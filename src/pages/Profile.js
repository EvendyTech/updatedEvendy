import React from "react";
import profilepic from "../assets/profilepic.png";
import star1 from "../assets/star1.png";
import location2 from "../assets/location2.png";
import left from "../assets/left.png";
import vendor1 from "../assets/vendor1.png";
import vendor2 from "../assets/vendor2.png";
import vendor3 from "../assets/vendor3.png";
import location1 from "../assets/location1.png";
import star4 from "../assets/star4.png";
import star3 from "../assets/star3.png";
import vn from "../assets/vn.png";
import pause from "../assets/pause.png";
import phone from "../assets/phone.png";

function Profile() {
  return (
    <div className="bg-gray-200">
      <div
        className="bg-gradient-to-r
       from-sponsor  to-gray-500 md:grid grid-cols-2 gap-[20px] px-[15px] md:px-[30px] font-poppins pt-[50px] md:pb-[50px] pb-4 xl:px-[250px] lg:px-[150px] items-center relative"
      >
        <div className="absolute top-[30px] md:left-[15px] xl:left-[125px] lg:left-[75px]">
          <img className="w-[10px]" src={left} />
        </div>
        <div className="flex justify-center">
          <div className="">
            <div>
              <h1 className="text-white text-2xl  font-normal  leading-8">
                MakeUpByLayo
              </h1>
              <h4 className="text-white font-normal pb-[40px] text-lg pt-[5px]">
                Vendor ID: 123456
              </h4>
              <h4 className="text-white text-sm font-light pb-10 leading-5">
                <b>Description:</b>&nbsp; Description: We provide casual
                makeup,Bridal makeup, Studio makeup at affordable price. We are
                also available to travel within Nigeria.
              </h4>
              <div className="flex justify-start items-center pt-[50px]">
                <div className="flex items-center">
                  <div>
                    <img className="w-[10px]" src={location2} />
                  </div>
                  <h4 className="text-sm text-white font-medium pl-[10px]">
                    Lagos, Nigeria
                  </h4>
                </div>
                <div className="flex items-center pl-[50px]">
                  <div>
                    <img className="w-[13px]" src={star1} />
                  </div>
                  <div className="ml-[3px]">
                    <img className="w-[13px]" src={star1} />
                  </div>
                  <div className="ml-[3px]">
                    <img className="w-[13px]" src={star1} />
                  </div>
                  <div className="ml-[3px]">
                    <img className="w-[13px]" src={star1} />
                  </div>
                  <div className="ml-[3px]">
                    <img className="w-[13px]" src={star1} />
                  </div>
                  <h4 className="text-xs text-white font-medium pl-[10px]">
                    4.0 ratings
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[70px] md:pt-0">
          <div class="">
            <img src={profilepic} />
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-16 font-poppins xl:px-[250px] px-[15px] md:px-[60px] bg-gray-200 mt-[80px] mb-[100px]">
        <div className="xl:px-[100px] px-[15px] md:px-[30px] lg:px-[30px] bg-white shadow-2xl shadow-gray-500">
          <h4 className="text-base font-bold flex justify-center pt-[40px]">
            Contact Vendor
          </h4>
          <h4 className="text-xs font-medium pt-[15px] pb-[30px]">
            Enter your details to contact the vendor. The vendor will receive a
            notification after submitting this form.
          </h4>
          <div className="pb-[30px]">
            <h4 className="text-xs font-semibold">Full name:</h4>
            <input
              className="pl-[25px] py-[15px] rounded-[8px] border-gray-300 border-[2px] w-full mt-[10px] text-xs"
              type="text"
              placeholder="e.g John Doe"
            />
          </div>
          <div className="pb-[30px]">
            <h4 className="text-xs font-semibold"> Email:</h4>
            <input
              className="pl-[25px] py-[15px] rounded-[8px] border-gray-300 border-[2px] w-full mt-[10px] text-xs"
              type="email"
              placeholder="e.g example@gmail.com"
            />
          </div>
          <div className="pb-[30px]">
            <h4 className="text-xs font-semibold">Phone Number:</h4>
            <input
              className="pl-[25px] py-[15px] rounded-[8px] border-gray-300 border-[2px] w-full mt-[10px] text-xs"
              type="phone"
              placeholder="e.g 08123456790"
            />
          </div>
          <div className="pb-[30px]">
            <h4 className="text-xs font-semibold">Location:</h4>
            <input
              className="pl-[25px] py-[15px] rounded-[8px] border-gray-300 border-[2px] w-full mt-[10px] text-xs"
              type="text"
              placeholder="e.g Lagos"
            />
          </div>
          <div className="pb-[30px]">
            <h4 className="text-xs font-semibold">
              When likely do you need the service?
            </h4>
            <input
              className="pl-[25px] py-[15px] rounded-[8px] border-gray-300 border-[2px] w-full mt-[10px] text-xs"
              type="week"
              placeholder="e.g 2 weeks away"
            />
          </div>
          <button className="bg-primary2 text-sm py-[10px] px-[50px] font-light rounded-[4px] text-white w-full mt-[30px] mb-[100px]">
            Submit
          </button>
        </div>
        <div className="mt-[60px] md:mt-0">
          <div>
            <h4 className="text-sm font-semibold ">Contact</h4>
            <div className="flex mt-[5px] ml-[10px] items-center">
              <div>
                <img className="w-[20px]" src={phone} />
              </div>
              <h4 className="ml-[10px] text-sm font-medium">+2348080110323</h4>
            </div>
          </div>
          <div className="mt-[50px]">
            <h4 className="text-sm font-semibold">Charge</h4>
          </div>
        </div>
      </div>

      <div className="font-poppins xl:px-[250px] px-[15px] md:px-[60px] bg-gray-200 mb-[50px]">
        <div className=" mt-[50px]">
          <div className="bg-sponsor w-[150px] h-[3px] flex justify-center mx-auto rounded-[10px]"></div>
          <h4 className="text-2xl text-sponsor font-semibold flex justify-center mt-[5px]">
            Reviews
          </h4>
        </div>
        <div>
          <div className="px-10 font-poppins pb-[20px] lg:px-32 bg-white rounded-[4px] w-full pt-[20px] mt-[30px]">
            <div>
              <h4 className="text-sm font-semibold ">Adebayo:</h4>
              <div className="flex mt-4">
                <div className="flex">
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star3} />
                  </div>
                </div>
                <h4 className="text-black text-xs text-semibold ml-2 font-medium">
                  4.0 ratings
                </h4>
              </div>
              <div className="flex bg-blue-100 w-52 p-2 rounded-md justify-center mt-4">
                <div className="w-4 mr-2">
                  <img className="" src={pause} />
                </div>
                <div className="flex">
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={vn} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h4 className="text-sm font-semibold md:mt-12 mt-6">Adebayo:</h4>
              <div className="flex mt-4">
                <div className="flex">
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star4} />
                  </div>
                  <div className="w-4 mr-0.5">
                    <img className="" src={star3} />
                  </div>
                </div>
                <h4 className="text-black text-xs text-semibold ml-2 font-medium">
                  4.0 ratings
                </h4>
              </div>
              <div className="xl:w-1/2 w-full md:w-5/6 mt-4 text-xs font-mdium">
                <h4>
                  MakeupByLayo did a great a job. She made me a pretty bride
                  during my wedding.
                </h4>
              </div>
              <div className="xl:px-[150px] px-0 md:px-[40px]">
                <h4 className="text-sponsor text-xl font-semibold mt-[30px]">
                  Add a review
                </h4>
                <textarea
                  placeholder="Type something here..."
                  rows="6"
                  className=" w-full border-[2px] rounded-[4px] p-[15px] border-sponsor mt-[10px]"
                  autoComplete="on"
                  name="text"
                  type="text"
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-primary2 py-[5px] px-[50px] font-light rounded-[4px] text-white ">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-poppins xl:px-[250px] px-[15px] md:px-[60px] bg-gray-200 pb-[100px]">
        <div className="flex justify-between items-center pb-[15px] pt-[40px]">
          <h4 className="text-sm font-semibold">Check out similar vendors</h4>
          <button className="text-[15px] font-semibold border-primary1 py-[3px] rounded-[2px] px-[13px] border-[2px]">
            view more
          </button>
        </div>
        <div className="  md:grid gap-[10px]  sm:grid-cols-3 lg:grid-cols-3 xl:gap-6 gap-y-8 xl:gap-y-12">
          <div className="flex justify-center">
            <div className="bg-white w-full sm:w-[350px] lg:w-[250px] md:w-[210px]  2xl:w-[300px] pb-[15px] pt-[8px] px-[12px] shadow-md shadow-gray-500 mb-[30px] md:mb-0 ">
              <div class="">
                <img className="w-96" src={vendor1} />
              </div>
              <div>
                <h4 className="md:text-base text-xl lg:text-xl   font-semibold flex justify-center pt-[14px]">
                  MakeUpByLayo
                </h4>
              </div>
              <div className="flex justify-center items-center pt-[5px]">
                <div>
                  <img className="w-[10px]" src={location1} />
                </div>
                <h4 className="text-sm font-medium pl-[10px]">
                  Lagos, Nigeria
                </h4>
              </div>
              <div className="flex justify-between items-center pt-[30px] pb-[10px]">
                <div className="flex items-center ">
                  <div>
                    <img className="w-[18px]" src={star1} />
                  </div>
                  <h4 className="text-xs font-medium pl-[6px]">4.0 ratings</h4>
                </div>
                <h4 className="text-xs font-bold text-primary2">
                  View profile
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white w-full sm:w-[350px] lg:w-[250px] md:w-[210px]  2xl:w-[300px] pb-[15px] pt-[8px] px-[12px] shadow-md shadow-gray-500 mb-[30px] md:mb-0 ">
              <div class="">
                <img className="w-96" src={vendor2} />
              </div>
              <div>
                <h4 className="md:text-base text-xl lg:text-xl   font-semibold flex justify-center pt-[14px]">
                  Sparkles
                </h4>
              </div>
              <div className="flex justify-center items-center pt-[5px]">
                <div>
                  <img className="w-[10px]" src={location1} />
                </div>
                <h4 className="text-sm font-medium pl-[10px]">
                  Ibadan, Nigeria
                </h4>
              </div>
              <div className="flex justify-between items-center pt-[30px] pb-[10px]">
                <div className="flex items-center ">
                  <div>
                    <img className="w-[18px]" src={star1} />
                  </div>
                  <h4 className="text-xs font-medium pl-[6px]">4.0 ratings</h4>
                </div>
                <h4 className="text-xs font-bold text-primary2">
                  View profile
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white w-full sm:w-[350px] lg:w-[250px] md:w-[210px]  2xl:w-[300px] pb-[15px] pt-[8px] px-[12px] shadow-md shadow-gray-500 mb-[30px] md:mb-0 ">
              <div class="">
                <img className="w-96" src={vendor3} />
              </div>
              <div>
                <h4 className="md:text-base text-xl lg:text-xl   font-semibold flex justify-center pt-[14px]">
                  Beauty World
                </h4>
              </div>
              <div className="flex justify-center items-center pt-[5px]">
                <div>
                  <img className="w-[10px]" src={location1} />
                </div>
                <h4 className="text-sm font-medium pl-[10px]">Edo, Nigeria</h4>
              </div>
              <div className="flex justify-between items-center pt-[30px] pb-[10px]">
                <div className="flex items-center ">
                  <div>
                    <img className="w-[18px]" src={star1} />
                  </div>
                  <h4 className="text-xs font-medium pl-[6px]">4.0 ratings</h4>
                </div>
                <h4 className="text-xs font-bold text-primary2">
                  View profile
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
