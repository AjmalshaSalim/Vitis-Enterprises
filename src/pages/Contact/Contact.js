import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Footer from "../../components/home/Footer/Footer";
import FooterBottom from "../../components/home/Footer/FooterBottom";
import Header from "../../components/home/Header/Header";
import HeaderBottom from "../../components/home/Header/HeaderBottom";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Navigation from "../../components/home/Header/Navigation";
import { ContactForm } from "../../actions/AuthActions";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ContactForm(formData);
      if (response.status === true) {
        toast.success("sended mail successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
     <Header />
    <HeaderBottom />
    <ToastContainer />
    <div className=" xl:container p-5 bg-[#fff] font-body3" >
    <Breadcrumbs title="Contact Us"/>
    <section>
      <div className=" mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0 animate-fadeInUp">
            <h5 className="text-lg font-semibold mb-6">
              Do you have questions about Vitis ?
            </h5>
            <p className="mb-6">Vitis is dedicated to offering premium healthcare and general trading products that contribute to overall wellness and a healthier lifestyle. We are committed to supporting health in our communities through reliable, high-quality products, while maintaining a strong focus on sustainability and ethical business practices.</p>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="text-black mr-4">
                  <span className="text-2xl"><FaPhoneSquareAlt /></span>
                </div>
                <div>
                  <p className="text-lg"><a href="tel:+12031230606" className="text-primeColor"> +91 7736921309</a></p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="text-black mr-4">
                  <span className=" text-2xl"><MdAttachEmail /></span>
                </div>
                <div>
                  <p className="text-lg"><a href="mailto:info@the-gym.com" className="text-primeColor">vitisenterprises@gmail.com</a></p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-black mr-4">
                  <span className=" text-2xl"><FaLocationDot /></span>
                </div>
                <div>
                  <p className="text-lg">Vitis Enterprises, Pathanapuram <br></br> Kollam (District), Kerala-689695</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 animate-fadeInUp">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h5 className="text-lg font-semibold mb-6">Get in touch</h5>
              <form onSubmit={handleSubmit}>
                {/* Form message */}
                <div className="hidden alert alert-success contact__msg" role="alert"> Your message was sent successfully. </div>
                {/* Form elements */}
                <div className="space-y-4">
                  <div className="form-group">
                    <input id="name" name="name" type="text" placeholder="Your Name *" required className="w-full p-3 border border-gray-300 rounded-lg outline-none" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 form-group">
                      <input id="email" name="email" type="email" placeholder="Your Email *" required className="w-full p-3 border border-gray-300 rounded-lg outline-none" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="w-full md:w-1/2 px-2 form-group">
                      <input id="phone" name="phone" type="text" placeholder="Your Number *" required className="w-full p-3 border border-gray-300 rounded-lg outline-none" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <input id="subject" name="subject" type="text" placeholder="Subject *" required className="w-full p-3 border border-gray-300 rounded-lg outline-none" value={formData.subject} onChange={handleChange} />
                  </div>
                  <div>
                    <textarea name="message" id="message" cols="30" rows="4" placeholder="Message *" required className="w-full p-3 border border-gray-300 rounded-lg outline-none" value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <div>
                    <input id="submit" name="submit" type="submit" value="Send Message" className="w-full bg-primeColor text-white p-3 rounded-lg cursor-pointer hover:bg-black" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <Footer />
  <FooterBottom />
  <div className="block lg:hidden overflow-hidden mt-24">
      <Navigation />
      </div>
    </>
  );
};

export default Contact;
