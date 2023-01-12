import React from "react";
import arrow from "../assets/arrow.png";
import dj from "../assets/arrow.png";

function PlannerApi() {
  return (
    <div>
      <div className="px-10 font-poppins md:pb-20 pb-16 lg:px-32 bg-white">
        <div className="">
          <div className="pt-10 md:pt-16 lg:w-2/3 lg:mx-auto">
            <h1 className="text-lg text-black font-extrabold flex justify-center">
              {}
            </h1>
            <h4 className="text-xs font-normal pt-5 flex justify-center text-center leading-5">
              {}
            </h4>
          </div>
          <div className="flex justify-center mt-6 mb-12">
            <button className="flex justify-center bg-primary2 items-center p-2 rounded">
              <h4 className="text-white text-xs font-extralight mr-2">
                CONSULT AN EXPERT HERE
              </h4>
              <div className="w-4">
                <img className="" src={arrow} />
              </div>
            </button>
          </div>
          <div className="mt-3 flex justify-center xl:mx-auto items-center xl:w-4/5">
            <div class="">
              <img className="" src={dj} />
            </div>
          </div>
        </div>
      </div>

      <div className=" font-poppins text-lg text-black font-bold flex justify-center">
        <h4>From the Blog</h4>
      </div>

      <div className="px-10 font-poppins md:pb-20 pb-10 lg:px-32 bg-white md:pt-10 pt-6">
        <div className="md:flex md:justify-between items-center w-full xl:w-4/5 xl:mx-auto">
          <div class="md:w-2/5 w-full mr-4 ">
            <img className="mx-auto" src={dj} />
          </div>
          <div className="md:w-3/5 w-full md:ml-4 ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0">
            <div>
              <div>
                <h4 className="text-lg font-semibold">{}</h4>
              </div>
              <div className="">
                <h4 className="text-xs font-medium mt-6 leading-5">{}</h4>
              </div>
              <div className="flex items-center mt-6 justify-center md:justify-start">
                <h4 className="text-xs font-bold mr-5">{}</h4>
                <h4 className="text-xs">{}</h4>
              </div>
              <div>
                <h4 className="text-blue-500 text-xs text-semibold mt-6">
                  Read More
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 font-poppins md:pb-20 pb-10 lg:px-32 bg-white md:pt-0 pt-6 md:block hidden">
        <div className="md:flex md:justify-between items-center w-full xl:w-4/5 xl:mx-auto">
          <div className="md:w-3/5 w-full md:mr-4 ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0">
            <div>
              <div>
                <h4 className="text-lg font-semibold">{}</h4>
              </div>
              <div className="">
                <h4 className="text-xs font-medium mt-6 leading-5">{}</h4>
              </div>
              <div className="flex items-center mt-6 justify-center md:justify-start">
                <h4 className="text-xs font-bold mr-5">{}</h4>
                <h4 className="text-xs">{}</h4>
              </div>
              <div>
                <h4 className="text-blue-500 text-xs text-semibold mt-6">
                  Read More
                </h4>
              </div>
            </div>
          </div>
          <div class="md:w-2/5 w-full ml-4 ">
            <img className="mx-auto" src={dj} />
          </div>
        </div>
      </div>

      <div className="px-10 font-poppins pb-20 lg:px-32 bg-white  pt-6 md:hidden flex">
        <div className="items-center w-full">
          <div class="md:w-2/5 w-full ">
            <img className="mx-auto" src={dj} />
          </div>
          <div className="md:w-3/5 w-full ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0">
            <div>
              <div>
                <h4 className="text-lg font-semibold">{dj}</h4>
              </div>
              <div className="">
                <h4 className="text-xs font-medium mt-6 leading-5">{}</h4>
              </div>
              <div className="flex items-center mt-6 justify-center md:justify-start">
                <h4 className="text-xs font-bold mr-5">{dj}</h4>
                <h4 className="text-xs">{dj}</h4>
              </div>
              <div>
                <h4 className="text-blue-500 text-xs text-semibold mt-6">
                  Read More
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlannerApi;
