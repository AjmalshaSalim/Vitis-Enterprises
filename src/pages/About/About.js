
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useEffect, useState } from "react";
import aboutImg from "../../assets/categories/warehouse-A.jpg"
import aboutImg1 from "../../assets/categories/warehouse-B.jpg"
import AboutUs from "../../components/About/AboutUs";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import Navigation from "../../components/home/Header/Navigation";
 
const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [registeredUsers, setRegisteredUsers] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRegisteredUsers((prev) => {
        if (prev < 1053) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => {
        if (prev < 420) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalProducts((prev) => {
        if (prev < 200) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
<>
<Header />
    <HeaderBottom />
    <div className="bg-[#fff] font-body3">
    <div className="lg:container mx-auto md:container px-4 overflow-hidden ">    
     <Breadcrumbs title="About Us" prevLocation={prevLocation} />
     <section className="inner-section about-company">
      <div>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <div className="about-content">
              <h2 className="text-xl lg:text-xl sm:text-lg bg-white p-3 border font-bold font-body2 text-primeColor mb-4">Our new, premier brand Vitis focuses on providing high-quality healthcare and general trading products designed to support overall wellness and healthier lifestyles. We are dedicated to promoting health in our communities through sustainable, ethically produced goods, ensuring a positive impact on both people and the environment.</h2>
              <p className="text-primeColor p-3 font-body2 text-lg">At Vitis, we source our products from trusted suppliers and manufacturers who adhere to high standards of quality and sustainability. We carefully select healthcare and general trading items, ensuring that each product meets rigorous hygiene and quality checks before reaching your doorstep. From essential healthcare items to everyday goods, we focus on offering products that contribute to your well-being, making your lifestyle safer and healthier."
This version emphasizes Vitis' healthcare and general trading focus while maintaining the commitment to quality and customer satisfaction. Let me know if you'd like further adjustments!</p>
            </div>
            <ul className="about-list mt-6 lg:mt-8 flex flex-row items-center justify-center gap-2">
              <li className="w-full lg:w-1/2 mb-4 py-2 lg:mb-0 text-center bg-primeColor bg-opacity-20 shadow-lg border">
                <h3 className="text-2xl font-bold text-black animate-pulse">
                  {/* {registeredUsers} */}30,000+
                  </h3>
                <h6 className="text-lg text-gray-400 font-body1 font-semibold">Customers</h6>
              </li>
              <li className="w-full lg:w-1/2 mb-4 py-2 lg:mb-0 text-center bg-primeColor bg-opacity-20 shadow-lg border">
                <h3 className="text-2xl font-bold text-gray-800 animate-pulse">
                  {/* {visitors} */}
                  500+
                  </h3>
                <h6 className="text-lg text-gray-400 font-body1 font-semibold">Daily Orders</h6>
              </li>
              <li className="w-full lg:w-1/2 mb-4 py-2 lg:mb-0 text-center bg-primeColor bg-opacity-20 shadow-lg border">
                <h3 className="text-2xl font-bold text-gray-800 animate-pulse">
                  {totalProducts}+
                  </h3>
                <h6 className="text-lg text-gray-400 font-body1 font-semibold">products</h6>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <div className="about-img flex flex-wrap items-center justify-center h-[250px]">
              <div className="w-1/2 lg:w-[250px] h-full p-3 lg:mb-0 overflow-hidden">
                <img src={aboutImg} alt="about" className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 lg:w-[250px] h-full p-3 lg:mb-0 overflow-hidden">
                <img src={aboutImg1} alt="about" className="w-full h-full object-cover" />
              </div>            
            </div>
          </div>
        </div>
      </div>
    </section>
    <AboutUs />
 
  </div>
  </div>
  <Footer />
  <FooterBottom />
  <div className="block lg:hidden overflow-hidden mt-24">
      <Navigation />
      </div>
  </>
  );
};

export default About;
