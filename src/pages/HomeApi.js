import React from "react";
import profile from "../assets/profile.png";
import message from "../assets/message.png";
import star from "../assets/Star.png";
import works2 from "../assets/works2.png";
import works3 from "../assets/works3.png";
import founder from "../assets/founder.png";
import star2 from "../assets/Star2.png";
import quote1 from "../assets/quote1.png";
import quote2 from "../assets/quote2.png";
import homeimg from "../assets/homeimg.png";
import down from "../assets/down.png";
import search from "../assets/search.png";
import sliders from "../assets/sliders.png";
import meta from "../assets/meta.png";
import youtube from "../assets/youtube.png";
import mcdonalds from "../assets/mcdonalds.png";
import netflix from "../assets/netflix.png";
import google from "../assets/google.png";
import shopify from "../assets/shopify.png";
import tg1 from "../assets/tg1.png";
import tg2 from "../assets/tg2.png";
import mark from "../assets/mark.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function HomeApi({
  headline,
  subtitle,
  image0,
  title1,
  description1,
  image1,
  title2,
  description2,
  image20,
  image21,
  image22,
  image23,
  image24,
  name3,
  image3,
  description3,
  rate3,
  name4,
  image4,
  description4,
  rate4,
  name5,
  image5,
  description5,
  rate5,
  name6,
  image6,
  description6,
  rate6,
  name7,
  image7,
  description7,
  rate7,
  name8,
  image8,
  description8,
  rate8,
  name9,
  image9,
  description9,
  rate9,
  name10,
  image10,
  description10,
  rate10,
}) {
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 md:grid grid-cols-2 gap-[20px] px-[15px] md:px-[30px] font-poppins pt-4 md:pb-[50px] pb-4 xl:px-[250px] lg:px-[150px] items-center">
        <div className="flex justify-center">
          <div className="">
            <div>
              <h1 className="text-primary text-xl md:text-2xl xl:text-3xl font-semibold pb-[40px] leading-8">
                Looking for a vendor For your event?
              </h1>
              <h4 className="text-amber text-sm font-medium pb-10 leading-5">
                This platform gives you the best event planning experience. you
                can get vendors for your event faster and easier for weddings,
                birthdays, coporate events, concerts and more.
              </h4>
            </div>
            <div className="md:flex">
              <div className="flex justify-center">
                <Link to="">
                  <button className="bg-button text-white  text-sm font-semibold rounded-[5px] py-[12px] w-[200px] md:px-0 md:w-44 lg:w-44 ">
                    Get Started
                  </button>
                </Link>
              </div>
              <div className="flex justify-center">
                <Link to="">
                  <button className="bg-button md:bg-gray-200 md:text-primary1 text-white text-sm font-semibold md:font-bold py-[12px] rounded-[5px] md:w-44 lg:w-44 mt-4 md:mt-0 w-[200px] mb-[20px] md:mb-0">
                    View Vendors
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div class="">
            <img src={homeimg} />
          </div>
        </div>
      </div>

      <div className="lg:px-[250px] px-[15px] md:px-[30px] bg-gray-200">
        <div>
          <h4 className="flex justify-center mb-[10px] text-primary text-xl font-bold">
            Get vendors on your budget
          </h4>
          <h4 className=" flex justify-center text-base font-semibold">
            Start your search here
          </h4>
        </div>
        <div className="flex justify-center mt-[15px] mb-[20px]">
          <img className="w-[15px]" src={down} />
        </div>
        <div>
          <form
            className="
          flex justify-center mt-[18px] relative"
          >
            <div className="absolute z-10 top-[15px] left-[25px]">
              <img className="w-[19px]" src={search} />
            </div>
            <div className="absolute z-10 top-[15px] right-[25px]">
              <img className="w-[19px]" src={sliders} />
            </div>
            <input
              className="relative placeholder-gray-400 py-[15px] rounded-[8px] border-[0.5px] text-sm border-gray-400 text-black pl-[58px] w-full "
              type="text"
              placeholder="Search for vendors in your location"
            />
          </form>
        </div>
      </div>

      <div className="xl:px-[250px] px-[15px] md:px-[30px] bg-sponsor py-[36px] mt-[70px] font-poppins">
        <div>
          <h4 className="flex justify-center text-white mb-[36px] text-center text-sm sm:text-lg">
            Trusted by 100+ satisfied customers all across the world
          </h4>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="">
            <div className="flex justify-center">
              <img className="md:w-[60px] w-[30px]" src={shopify} />
            </div>
            <h4 className="text-white flex justify-center mt-[6px] text-xs sm:text-base">
              Shopify
            </h4>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img className="md:w-[60px] w-[30px]" src={meta} />
            </div>
            <h4 className="text-white flex justify-center mt-[6px] text-xs sm:text-base">
              Meta
            </h4>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img className="md:w-[60px] w-[30px]" src={youtube} />
            </div>
            <h4 className="text-white flex justify-center mt-[6px] text-xs sm:text-base">
              Youtube
            </h4>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img className="md:w-[60px] w-[30px]" src={mcdonalds} />
            </div>
            <h4 className="text-white flex justify-center mt-[6px] text-xs sm:text-base">
              Mcdonalds
            </h4>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img className="md:w-[60px] w-[30px]" src={netflix} />
            </div>
            <h4 className="text-white flex justify-center mt-[6px] text-xs sm:text-base">
              Netflix
            </h4>
          </div>
          <div className="">
            <div className="flex justify-center">
              <img className="md:w-[60px] w-[30px]" src={google} />
            </div>
            <h4 className="text-white flex justify-center mt-[6px] text-xs sm:text-base">
              Google
            </h4>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 px-[15px] md:px-[30px] font-poppins pt-[28px] md:pb-[30px] pb-[50px] xl:px-[250px] lg:px-[150px]">
        <h4 className="flex justify-center text-black font-semibold md:text-xl text-lg mb-[24px] text-center">
          Together with you, we make your event colourful and memorable
        </h4>
        <div className="md:flex md:justify-center md:gap-6">
          <div className="flex md:mt-[50px] mb-[20px] md:mb-0">
            <div className="mr-[10px]">
              <img className="w-[50px] " src={mark} />
            </div>
            <div className="w-[300px] md:w-full ">
              <h4 className="text-2xl font-bold">Browse</h4>
              <h4 className="text-xs font-medium text-amber">
                search for the vendors available and select the one you need for
                your event.
              </h4>
            </div>
          </div>
          <div className="flex  mb-[20px] md:mb-0">
            <div className="mr-[10px]">
              <img className="w-[50px] " src={mark} />
            </div>
            <div className="w-[300px] md:w-[250px]">
              <h4 className="text-2xl font-bold">View</h4>
              <h4 className="text-xs font-medium text-amber ">
                View the profile of the vendor and check the package,
                descriptions, delivery pointers and reviews.
              </h4>
            </div>
          </div>
          <div className="flex  md:mt-[50px] mb-[20px] md:mb-0">
            <div className="mr-[10px]">
              <img className="w-[50px] " src={mark} />
            </div>
            <div className="w-[300px] md:w-full">
              <h4 className="text-2xl font-bold">Request</h4>
              <h4 className="text-xs font-medium text-amber">
                Fill in your details to request for the vendor.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-[15px] md:px-[30px] font-poppins pt-[28px] md:pb-[30px] pb-4 xl:px-[250px] lg:px-[150px]">
        <h4 className="flex justify-center text-black font-semibold md:text-xl text-lg mb-[24px]">
          We provide the best for you
        </h4>
        <div className=" md:grid grid-cols-2 gap-[20px]  items-center">
          <div className=" grid grid-cols-2">
            <div class="-mr-[70px]">
              <img className="" src={tg1} />
            </div>
            <div class="-ml-[70px] mt-[180px]">
              <img className="" src={tg2} />
            </div>
          </div>
          <div className="flex justify-center mt-[30px] md:pt-0">
            <div className="">
              <div>
                <h4 className="text-amber text-sm font-medium pb-10 leading-5">
                  The purpose of Evendy is to assist clients with their event
                  planning and making it a successfull event.
                </h4>
                <h4 className="text-amber text-sm font-medium pb-[24px] leading-5">
                  We will provide you with vendors such as decorators/designers,
                  DJs, caterers,hall,cakes and small chops makers and many more
                  based on your budget.
                </h4>
              </div>

              <button className="bg-button text-white  text-sm font-semibold rounded-[5px] py-[12px] w-full">
                Create an event
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 px-[15px] md:px-[30px] font-poppins lg:px-32 pt-[60px]">
        <div>
          <h4 className="md:text-4xl lg:text-4xl text-xl font-bold text-gray-300 flex justify-center">
            Testimonial
          </h4>
          <h4 className="text-sm font-bold flex justify-center pt-4 text-primary2">
            What people say About US
          </h4>
          <div className=" flex justify-center pt-4 pb-8">
            <h4 className="text-xs w-96 text-center text-gray-500">
              Join our happy customer nationwide who are already using our
              amaing services
            </h4>
          </div>
        </div>
        <div className="md:flex justify-center">
          <div className="shadow-lg bg-white shadow-gray-400 sm:w-2/4 w-4/5 px-3 pt-4 pb-2 mb-10 md:mb-[100px] rounded-xl md:mr-2 mx-auto md:w-2/5 lg:w-1/3 xl:w-1/4">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-primary h-14 -mr-6 w-16"></div>
                <div>
                  <img className="w-20" src={founder} />
                </div>
              </div>
              <div className="ml-2">
                <h4 className="text-primary text-sm font-semibold">Ahmed</h4>
                <h4 className="text-xs text-gray-500 w-28">
                  Founder Gigalayer
                </h4>
              </div>
            </div>
            <div className="flex mt-2">
              <img className="w-5 mr-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
            </div>
            <div>
              <p className="flex mt-3">
                <div className="mr-1">
                  <img className="w-14" src={quote1} />
                </div>
                <h4 className="text-xs text-gray-500">
                  Evendy service delivery in providing vendors for our event
                  were absolutely top notch. We got vendors who delivered beyond
                  our expectation and meeting our budget with evendy you can be
                  sure your event is sorted
                </h4>
                <div className="">
                  <img className="w-14" src={quote2} />
                </div>
              </p>
            </div>
          </div>
          <div className="shadow-lg bg-white shadow-gray-400 sm:w-2/4 w-4/5 px-3 pt-4 pb-2 mb-10 md:mb-[100px] rounded-xl md:ml-[30px] mx-auto md:w-2/5 lg:w-1/3 xl:w-1/4">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="bg-primary h-14 -mr-6 w-16"></div>
                <div>
                  <img className="w-20" src={founder} />
                </div>
              </div>
              <div className="ml-2">
                <h4 className="text-primary text-sm font-semibold">
                  Wunmi and perfect
                </h4>
                <h4 className="text-xs text-gray-500 w-32">
                  CEO Shalex venture
                </h4>
              </div>
            </div>
            <div className="flex mt-2">
              <img className="w-5 mr-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
              <img className="w-5 mx-2" src={star2} />
            </div>
            <div>
              <p className="flex mt-3">
                <div className="mr-1">
                  <img className="w-14" src={quote1} />
                </div>
                <h4 className="text-xs text-gray-500">
                  Thank you for all the help during our wedding, it is a
                  wonderful platform, i didn't have to lift a finger, or an
                  eyebrow or worry. We love the service so much. Thank you.
                </h4>
                <div className="">
                  <img className="w-14" src={quote2} />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeApi;
