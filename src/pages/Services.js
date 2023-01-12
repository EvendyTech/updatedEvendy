import React, { useState } from "react";
import portrait2 from "../assets/portrait2.png";
import decoration from "../assets/decoration.png";
import star from "../assets/Star.png";
import cake from "../assets/cake.png";
import catering from "../assets/catering.png";
import hall from "../assets/hall.png";
import dress from "../assets/dress.png";
import hotel from "../assets/hotel.png";
import dj from "../assets/dj.png";
import more from "../assets/more.png";
import { Slider } from "@mui/material";
import amc from "../assets/amc.png";
import acakes from "../assets/acakes.png";
import acatering from "../assets/acatering.png";
import adecoration from "../assets/adecoration.png";
import ahall from "../assets/ahall.png";
import ahotel from "../assets/ahotel.png";
import adress from "../assets/adress.png";
import amanagement from "../assets/amanagement.png";
import djs from "../assets/djs.png";
import cancel from "../assets/cancel.png";
import image0 from "../assets/image0.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function Services() {
  const [show, setShow] = useState(false);

  const budget = 1500000;
  const min = 150000;
  const max = 1500000;
  const a = (min / budget) * 100;
  const b = (max / budget) * 100;
  const [val, setVal] = useState([a, b]);
  const updateRange = (e, data) => {
    setVal(data);
    console.log(12);
  };

  const [val2, setVal2] = useState([3, 9]);
  const updateRange2 = (e, data) => {
    setVal2(data);
  };

  const [val3, setVal3] = useState([1, 22]);
  const updateRange3 = (e, data) => {
    setVal3(data);
  };

  const [val4, setVal4] = useState([40, 80]);
  const updateRange4 = (e, data) => {
    setVal4(data);
  };

  const [val5, setVal5] = useState([30, 50]);
  const updateRange5 = (e, data) => {
    setVal5(data);
  };

  const [val6, setVal6] = useState([2, 10]);
  const updateRange6 = (e, data) => {
    setVal6(data);
  };

  const [val7, setVal7] = useState([30, 50]);
  const updateRange7 = (e, data) => {
    setVal7(data);
  };

  return (
    <div>
      {show ? (
        <div className="md:top-44 font-poppins pt-16 md:pb-16 pb-4  items-center bg-white shadow-lg absolute md:w-[700px] left-1/2 md:-ml-[350px] top-24 w-[350px] -ml-[175px] sm:w-[600px] sm:-ml-[300px] lg:w-[900px] lg:-ml-[450px] xl:w-[1200px] xl:-ml-[600px] 2xl:w-[1400px] 2xl:-ml-[700px] rounded md:px-16 px-8 lg:px-32 2xl:px-64 z-40">
          <div>
            <div className="w-8 absolute right-10  top-10">
              <img onClick={() => setShow(!show)} className="" src={cancel} />
            </div>
          </div>
          <div>
            <div>
              <h4 className="text-lg font-medium pb-3">Vendor:</h4>
            </div>
            <div>
              <h4 className="text-xs font-normal pb-10">
                Kindly select the list of vendors you need.
              </h4>
            </div>
            <div className="grid grid-cols-4 gap-3 gap-y-6 lg:grid-cols-5">
              <div className=" items-center mb-4">
                <div className="w-10 mx-auto">
                  <img className="" src={djs} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-1">
                  Dj
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={amc} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5">
                  MC
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={acakes} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5">
                  Cakes
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={acatering} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5">
                  Catering
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={adecoration} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5">
                  Decoration
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={ahall} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5">
                  Hall
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={ahotel} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5">
                  Hotel
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={adress} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5 text-center">
                  Wedding dress
                </h4>
              </div>
              <div className=" items-center mb-4">
                <div className="w-6 mx-auto">
                  <img className="" src={amanagement} />
                </div>
                <h4 className="font-medium text-sm flex justify-center pt-5 text-center">
                  Full event management
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium">
              Name other vendors you might need but not listed above:
            </h4>
            <textarea
              className="border-gray-300 border-2 text-sm text-extrabold text-primary placeholder-gray-300 rounded-lg p-4 pl-6 w-full mt-3 "
              name="message"
              placeholder="Paste them here"
              rows="6"
            ></textarea>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-medium">Budget:</h4>
            <input
              className="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-3 pl-6"
              name="email"
              type="text"
              placeholder="State your budget here"
            />
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-medium">Budget Specifics:</h4>
            <h4 className="text-xs font-light my-3">
              Do you have specific vendors you would like to focus more of your
              budget on.
            </h4>
            <input
              className="border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-3 pl-6"
              name="email"
              type="text"
              placeholder="E.g Decoration"
            />
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-medium">Additional Information</h4>
            <h4 className="text-xs font-light my-3">
              It could be a request or specific information.
            </h4>
            <textarea
              className="border-gray-300 border-2 text-sm text-extrabold text-primary placeholder-gray-300 rounded-lg p-4 pl-6 w-full mt-3 "
              name="message"
              placeholder="Write your other information here"
              rows="6"
            ></textarea>
          </div>

          <div className="flex justify-center mt-20 mb-24">
            <button
              onClick={() => setShow(!show)}
              className="bg-primary2 text-white py-3 rounded-sm text-xs font-normal w-full md:w-72"
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}

      <div className=" font-poppins xl:px-[250px] px-[15px] md:px-[60px] bg-gray-200 pb-10">
        <div className="pt-[70px]">
          <h4 className="text-sponsor text-3xl font-semibold flex justify-center">
            Our services
          </h4>
          <h4 className="text-xs flex justify-center text-center pt-[10px]">
            We provide you with vendors such as decorators/designers, dj’s,
            caterers, hall, cake and small chops makers and many more based on
            your budget
          </h4>
        </div>
        <div className="px-[15px] md:px-[30px] lg:px-[70px] ">
          <div className="flex justify-center pt-[45px]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:gap-6 gap-y-8 xl:gap-y-12">
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={decoration} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Decoration
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={cake} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Cake
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={catering} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Catering
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={hall} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Hall
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={dress} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Wedding dress
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={hotel} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Hotel
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={dj} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Dj
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
              <div className="bg-white pt-2 w-32 sm:w-44 lg:w-[160px] md:w-[140px]  2xl:w-[200px] pb-6 shadow-md shadow-gray-500">
                <div class="mx-2">
                  <img className="w-96" src={more} />
                </div>
                <div>
                  <h4 className="text-md font-bold flex justify-center pt-4">
                    Lots more
                  </h4>
                </div>
                <div className="flex justify-center">
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                  <img className="m-0.5 w-3" src={star} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[60px]">
          <h4 className="text-white">and lots more...</h4>
        </div>

        <div
          className="w-full md:-mt-[450px] 2xl:-mt-[550px] -mt-[880px] md:h-[520px] 2xl:h-[630px] h-[940px] bg-sponsor
        "
        ></div>

        <div className="mt-[30px]">
          <h4 className="text-gray-400 text-3xl font-semibold flex justify-center">
            Gallery
          </h4>
        </div>

        <div className="px-[15px] md:px-[50px]  font-poppins bg-white md:pt-14 pt-10 mt-[30px]">
          <div>
            <h4 className="flex justify-center text-xl text-primary2 font-medium text-center">
              Pictures from events we covered
            </h4>
            <div className="flex justify-center md:-ml-52 -ml-0 mt-1">
              <div className="bg-primary2 w-20 h-0.5 rounded mr-2"></div>
              <div className="bg-gray-300 w-6 h-0.5 rounded"></div>
            </div>

            <h4 className="text-xs  flex justify-center text-center mt-8 font-medium">
              Check out images from some of the events we covered
            </h4>
          </div>
        </div>

        <div className="px-[15px] md:px-[50px]  font-poppins md:pb-20 pb-10 bg-white pt-8 flex justify-center ">
          <div>
            <div className="flex mx-auto mb-4 md:mb-6">
              <div className="mr-1 md:mr-2">
                <img className="" src={image0} />
              </div>
              <div className="ml-1 md:ml-2">
                <img className="" src={image1} />
              </div>
            </div>
            <div className="flex mx-auto">
              <div className="mr-1 md:mr-2">
                <img className="" src={image2} />
              </div>
              <div className="mx-1 md:mx-2">
                <img className="" src={image3} />
              </div>
              <div className="ml-1 md:ml-2">
                <img className="" src={image4} />
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 font-poppins md:pb-20 pb-20 lg:px-32 bg-white md:flex justify-between items-center">
          <h4 className=" text-primary2 text-lg font-semibold md:ml-20">
            We Offer the Best!
          </h4>
          <h4 className="md:w-3/5 text-xs font-medium leading-5">
            We promise to make your event a bliss. reach out to us for any of
            your events, either Conference, Weddings, Birthday, Get to gether
            and so on.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Services;
