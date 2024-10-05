import React, { useState } from "react";
import Heading from "../Products/Heading";
import { FaRupeeSign } from "react-icons/fa";
import Image from "../../designLayouts/Image";
import { BsPlus, BsDash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseCart } from "../../../redux/cartSlice";
import { GiShoppingCart } from "react-icons/gi";
import { baseURL } from "../../../constants/index";
import { AddCart } from "../../../actions/CartActions";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LiaCartPlusSolid } from "react-icons/lia";

const SpecialOffers = () => {
  const homeDetails = useSelector(state => state.auth.homeDetails);
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [quantities, setQuantities] = useState({});
  const [selectedVariants, setSelectedVariants] = useState({});

  const navigate = useNavigate()
  const handleDecrease = (cartItem) => {
    if (isAuthenticated) {
      const newQuantities = {
        ...quantities,
        [cartItem.id]: Math.max(quantities[cartItem.id] - 1, 0)
      };
      setQuantities(newQuantities);
      toast.error("item removed successfully")
      dispatch(decreaseCart(cartItem));

    } else {
      dispatch(decreaseCart(cartItem));
    }
  };
  const handleIncrease = (cartItem) => {
    const newQuantities = {
      ...quantities,
      [cartItem.id]: (quantities[cartItem.id] || 0) + 1
    };
    setQuantities(newQuantities);

    const selectedVariant = selectedVariants[cartItem.id] || cartItem.quantity_variants[0];

    const cartData = {
      product_id: cartItem.id,
      volume: selectedVariant.volume,
      unit: selectedVariant.unit,
      quantity: newQuantities[cartItem.id],
      price: selectedVariant.price
    };
    if (isAuthenticated) {
      AddCart(cartData);
      toast.success("Item added to cart successfully")
    } else {
      dispatch(addToCart(cartItem));
      toast.success("Item added to cart successfully")
    }
  };
  const handleBuy = (product) => {
    const newQuantities = {
      ...quantities,
      [product.id]: (quantities[product.id] || 0) + 1
    };
    setQuantities(newQuantities);

    const selectedVariant = selectedVariants[product.id] || product.quantity_variants[0];

    const cartData = {
      product_id: product.id,
      volume: selectedVariant.volume,
      unit: selectedVariant.unit,
      quantity: newQuantities[product.id],
      price: selectedVariant.price
    };
    if (isAuthenticated) {
      AddCart(cartData);
    } else {
      dispatch(addToCart(product));
    }
    navigate("/cart")
  }

  const getCartQuantity = (productId) => {
    if (isAuthenticated) {
      return quantities[productId] || 0;
    } else {
      const cartItem = cartItems.find((item) => item.id === productId);
      return cartItem ? cartItem.cartQuantity : 0;
    }
  };

  if (!homeDetails || !homeDetails.healthy || homeDetails.healthy.length === 0) {
    return null;
  }
  const handleView = (id) => {
    navigate(`/productDetails`, { state: { productId: id } });
  };

  const handleVariantChange = (productId, variant) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: variant
    });
  };

  return (
    <div className=" pb-20 lg:container">
      <ToastContainer />
      <Heading heading="Trending Products" />
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 font-body3" data-aos="fade-up">
        {homeDetails.healthy.slice(0, 10).map((product, index) => {
          const selectedVariant = selectedVariants[product.id] || product.quantity_variants[0];
          return (
            <div key={product.id} className="p-2 ">
              <div className="relative overflow-hidden rounded-lg border shadow-md group w-full h-full hover:shadow-xl ">
                <div className='flex flex-col items-center justify-center w-full h-auto'>
                  <div className="relative mt-4 md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] overflow-hidden" onClick={() => handleView(product.id)}>
                    <Image className=" cursor-pointer object-contain group-hover:scale-110 ease-in-out duration-500" imgSrc={`${baseURL}${product.image}`} />
                  </div>
                </div>
                <div className="py-1 flex flex-col gap-1 px-2 h-full bg-white">
                  <div className="flex flex-col items-center justify-between font-titleFont ">
                    <h2 className="text-base xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-body3 text-primeColor font-bold">
                      {product.name}
                    </h2>
                    <p className="xl:text-[18px] lg:text-[15px]  md:text-[15px] xs:text-[12px]  font-semibold flex items-center pt-1 ">
                      <span className=" xl:text-[12px] lg:text-[12px] md:text-[12px] xs:text-[10px]">
                        <FaRupeeSign />
                      </span>
                      <span className="line-through text-gray-600">{selectedVariant ? selectedVariant.price + 100 : 'N/A'}</span>
                      <span className="ml-2">{selectedVariant ? selectedVariant.price : 'N/A'}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <select
                      key={index}
                      name="quantity"
                      className="order-1 border px-2 rounded-md py-2 mt-1 hover:bg-primeColor font-body2 text-black hover:text-white xl:text-[20px] lg:text-[20px] md:text-[15px] xs:text-[15px] sm:text-[15px]"
                      onChange={(e) => handleVariantChange(product.id, product.quantity_variants.find(variant => variant.volume === parseInt(e.target.value)))}
                    >
                      {product.quantity_variants.map((ite, variantIndex) => (
                        <option
                          key={`${product.id}_${variantIndex}`}
                          value={ite.volume}
                          className="text-black bg-white font-medium"
                        >
                          {ite.volume}{ite.unit}
                        </option>
                      ))}
                    </select>
                    <div className="flex items-center order-2 rounded-md border px-2 py-2">
                      <button onClick={() => handleDecrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-primeColor text-black hover:text-white">
                        <BsDash />
                      </button>
                      <span className="px-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-100">{getCartQuantity(product.id)}</span>
                      <button onClick={() => handleIncrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-primeColor text-black hover:text-white">
                        <BsPlus />
                      </button>
                    </div>
                    <button onClick={() => handleBuy(product)} className="flex items-center px-2 py-2 order-3 font-body2 hover:bg-primeColor border rounded-md font-medium xs:text-[13px] sm:text-[15px] sml:text-[17px] md:text-[20px] lg:text-[20px] xl:text-[20px] text-black hover:text-white bg-white transition-transform duration-500">
                      <span className="pl-1"><LiaCartPlusSolid /></span>
                    </button>
                  </div>
                  <div className={`md:text-lg lg:text-sm pb-5 pt-2 sm:text-sm font-normal text-center xs:text-[10px] ${selectedVariant?.in_stock <= 0 ? 'text-red-500' : selectedVariant?.in_stock > 0 && selectedVariant?.in_stock <= 10 ? 'text-yellow-500' : 'text-green-500'}`}>
                    {selectedVariant?.in_stock <= 0 ? "Out of Stock" : selectedVariant?.in_stock > 0 && selectedVariant?.in_stock <= 10 ? `Only ${selectedVariant?.in_stock} items left` : selectedVariant ? `${selectedVariant.in_stock} left in stock` : "Stock information not available"}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>


  );
};

export default SpecialOffers;
