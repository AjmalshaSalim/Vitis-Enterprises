import React, { useEffect, useState, lazy, Suspense } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { FaRupeeSign } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { baseURL } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { BsPlus, BsDash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { addToCart, decreaseCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ComboStore } from "../../actions/ShopActions"
import { AddCart } from "../../actions/CartActions";
import { BsFillCartCheckFill } from "react-icons/bs";
import Loader from "../../components/Loader/Loader";
import { SpecialCateg } from "../../actions/HomeActions";

const Image = lazy(() => import("../../components/designLayouts/Image"));
const HeaderBottom = lazy(() => import("../../components/home/Header/HeaderBottom"));
const Header = lazy(() => import("../../components/home/Header/Header"));
const Footer = lazy(() => import("../../components/home/Footer/Footer"));
const FooterBottom = lazy(() => import("../../components/home/Footer/FooterBottom"));
const Navigation = lazy(() => import("../../components/home/Header/Navigation"));

const Shop = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isLoading = useSelector(state => state.auth.isLoading);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [shopDetails, setShopDetails] = useState(null);
  const [specialCategories, setSpecialCategories] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const [selectedSpecialCategory, setSelectedSpecialCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [selectedCombo, setSelectedCombo] = useState("")

  useEffect(() => {
    const fetchShopDetails = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const details = await ComboStore();
        setShopDetails(details);
        console.log(shopDetails, "setShopDetails");
        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        console.error('Failed to fetch shop details', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    const fetchSpecialCategories = async () => {
      try {
        const specialCateg = await SpecialCateg();
        setSpecialCategories(specialCateg);
      } catch (error) {
        console.error('Failed to fetch special categories', error);
      }
    };

    fetchShopDetails();
    fetchSpecialCategories();

    return () => {
      setShopDetails(null);
      setSpecialCategories(null);
      setQuantities({});
      setSelectedCategory("");
      setSelectedPriceRange("");
      setSelectedAge("");
      setSelectedDiet("");
      setSelectedDisease("");
      setSelectedSpecialCategory("");
      setSearchTerm("");
      setShowFilters(false);
      setSelectedVariants({});
    };
  }, []);
  const itemsPerPage = 16
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = shopDetails ? Math.ceil(shopDetails.products.length / itemsPerPage) : 0;
  const offset = currentPage * itemsPerPage;

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
      dispatch(addToCart(cartData));
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
      dispatch(addToCart(cartData));
    }
    navigate("/cart");
  };
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  const getCartQuantity = (productId) => {
    if (isAuthenticated) {
      return quantities[productId] || 0;
    } else {
      const cartItem = cartItems.find((item) => item.id === productId);
      return cartItem ? cartItem.cartQuantity : 0;
    }
  };
  const handleView = (id) => {
    navigate(`/productDetails`, { state: { productId: id } });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
  };

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  const handleDietChange = (event) => {
    setSelectedDiet(event.target.value);
  };
  const handleComboChange = (e) => {
    setSelectedCombo(e.target.value);
  }

  const handleSpecialCategoryChange = (event) => {
    setSelectedSpecialCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleVariantChange = (productId, variant) => {
    setSelectedVariants({
      ...selectedVariants,
      [productId]: variant
    });
  };

  const filterProducts = (products) => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category_ids.includes(parseInt(selectedCategory)));
    }

    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    if (selectedAge) {
      filteredProducts = filteredProducts.filter(product => product.special_category_children.includes(selectedAge));
    }
    if (selectedCombo) {
      filteredProducts = filteredProducts.filter(product => product.special_category_children.includes(selectedCombo));
    }

    if (selectedDiet) {
      filteredProducts = filteredProducts.filter(product => product.special_category_children.includes(selectedDiet));
    }

    if (selectedDisease) {
      filteredProducts = filteredProducts.filter(product => product.special_category_children.includes(selectedDisease));
    }

    if (selectedSpecialCategory) {
      filteredProducts = filteredProducts.filter(product => product.special_category_children.includes(selectedSpecialCategory));
    }

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category_ids.includes(parseInt(searchTerm)) ||
        product.price.toString().includes(searchTerm)
      );
    }

    return filteredProducts;
  };

  if (isLoading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Header />
        <HeaderBottom />
        <ToastContainer />
        <div className='bg-[#fff]'>
          <div className="lg:container mx-auto px-4 py-4">
            <Breadcrumbs title="Products" />
            <div className="w-full flex lg:flex-row flex-col lg:items-start items-center justify-between lg:justify-end gap-2 h-full">
              <div className="flex flex-col gap-4 w-full lg:w-1/4">
                <button className="lg:hidden p-2 bg-primeColor text-white rounded w-full" onClick={() => setShowFilters(!showFilters)}>{showFilters ? "Close Filters" : "Filters"}</button>
                <div className={`lg:block font-titleFont bg-white p-5 ${showFilters ? 'block' : 'hidden'}`}>
                  <h1 className="text-center font-medium underline">Filter by :</h1>
                  <div className='my-4'>
                    <h3 className="font-bold text-gray-600">CATEGORIES</h3>
                    <select onChange={handleCategoryChange} className="p-2 outline-none border font-medium rounded w-full">
                      <option value="">All Categories</option>
                      {shopDetails?.categories?.map(category => (
                        <option className="uppercase font-medium bg-white text-black" key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                    <hr />
                  </div>
                
                 
                  <div className='my-4'>
                    <h3 className="font-bold text-gray-600">PRICE RANGE</h3>
                    <select onChange={handlePriceRangeChange} className="p-2 outline-none bg-white border bg-opacity-20 font-medium rounded w-full">
                      <option className="font-medium bg-white text-black" value="">All Prices</option>
                      <option className="font-medium bg-white text-black" value="0-100">0-100</option>
                      <option className="font-medium bg-white text-black" value="100-300">100-300</option>
                      <option className="font-medium bg-white text-black" value="300-600">300-600</option>
                      <option className="font-medium bg-white text-black" value="600-1000">600-1000</option>
                      <option className="font-medium bg-white text-black" value="1000-10000">1000-10000</option>
                    </select>
                    <hr />
                  </div>
                  <div className='my-4'>
                    <h3 className="font-bold text-gray-600">SEARCH PRODUCTS BY</h3>
                    <input
                      type="text"
                      placeholder="Name, Id, Categories, Price..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="p-2 outline-none bg-white border font-semibold rounded w-full mb-2"
                    />
                   
                  </div>
                  <div>
                    <button onClick={() => setCurrentPage(0)} className="p-2 bg-primeColor text-white font-medium hover:bg-black rounded w-full">Search</button>
                  </div>
                </div>
              </div>
              <div className="w-full h-full lg:w-3/4">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full" >
                  {shopDetails && filterProducts(shopDetails.products)?.slice(offset, offset + itemsPerPage)?.map((product, index) => {
                    const selectedVariant = selectedVariants[product.id] || product.quantity_variants[0];
                    return (
                      <div key={product.id} className="p-2 border hover:shadow-lg rounded-lg">
                        <div className="relative overflow-hidden group w-full h-full ">
                          <div className={`flex flex-col items-center justify-center group-hover:bg-white max-w-full max-h-full`}>
                            <div className="md:w-[230px] md:h-[230px] xs:w-[140px] xs:h-[140px] overflow-hidden relative w-full h-full my-2 mx-4" onClick={() => handleView(product.id)}>
                              <Image className=" cursor-pointer object-contain group-hover:scale-110 ease-in-out duration-500" imgSrc={`${baseURL}${product.image}`} />
                            </div>
                          </div>
                          <div className="py-1 flex flex-col h-auto w-full items-center justify-between gap-1  px-2 bg-white">
                            <div className="flex flex-col items-center justify-between font-titleFont ">
                              <h2 className=" h-20 md:text-xl xl:text-xl lg:text-xl xs:text-[10px] text-center sm:text-[10px] text-primeColor font-medium">
                                {product.name}
                              </h2>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center border p-2">
                                  <button onClick={() => handleDecrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-primeColor text-black hover:text-white">
                                    <BsDash />
                                  </button>
                                  <span className="px-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-sm xl:text-sm ">{getCartQuantity(product.id)}</span>
                                  <button onClick={() => handleIncrease(product)} className="px-1 py-1 text-xs xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg bg-gray-300 hover:bg-primeColor text-black hover:text-white">
                                    <BsPlus />
                                  </button>
                                </div>
                                <div className="text-primeColor font-semibold flex items-center">
                                  <span className="text-sm">
                                    <FaRupeeSign />
                                  </span>
                                  <span className="line-through text-gray-600">{(selectedVariants[product.id]?.price || product.price) + 100}</span>
                                  <span className="ml-2">{selectedVariants[product.id]?.price || product.price}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between w-full">
                              <button onClick={() => handleBuy(product)} className="order-1 ml-2 py-2 hover:bg-primeColor border  text-black px-2 font-medium xs:text-[13px] sm:text-[15px] sml:text-[17px] md:text-[20px] lg:text-[20px] xl:text-[20px] hover:text-white  hover:rounded-none  transition-transform duration-500">
                                <BsFillCartCheckFill />
                              </button>
                              <select className="order-2 mt-1 border p-2 hover:bg-primeColor font-medium font-body2 text-black hover:text-white xl:text-[15px] lg:text-[15px] md:text-[15px] xs:text-[15px] sm:text-[15px]" onChange={(e) => handleVariantChange(product.id, JSON.parse(e.target.value))}>
                                {product.quantity_variants.map((variant, idx) => (
                                  <option key={idx} value={JSON.stringify(variant)} className="text-black bg-white font-medium ">{variant.volume}{variant.unit}</option>
                                ))}
                              </select>
                            </div>
                            <div className={`md:text-lg lg:text-sm sm:text-sm font-normal text-center xs:text-[10px] ${selectedVariant?.in_stock <= 0 ? 'text-red-500' : selectedVariant?.in_stock > 0 && selectedVariant?.in_stock <= 10 ? 'text-yellow-500' : 'text-green-500'}`}>
                              {selectedVariant?.in_stock <= 0 ? "Out of Stock" : selectedVariant?.in_stock > 0 && selectedVariant?.in_stock <= 10 ? `Only ${selectedVariant?.in_stock} items left` : selectedVariant ? `${selectedVariant.in_stock} left in stock` : "Stock information not available"}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination flex justify-center gap-1 items-center mt-5"
              activeClassName="bg-black text-white px-2 py-2"
              pageLinkClassName="px-3 py-2  hover:bg-lightGray"
            />

          </div>
        </div>
        <Footer />
        <FooterBottom />
        <div className="block lg:hidden overflow-hidden mt-24">
          <Navigation />
        </div>
      </div>
    </Suspense>
  );
};

export default Shop;
