import React from "react";
import search from "../assets/search.png";
import sliders from "../assets/sliders.png";
import vendor1 from "../assets/vendor1.png";
import vendor2 from "../assets/vendor2.png";
import vendor3 from "../assets/vendor3.png";
import vendor4 from "../assets/vendor4.png";
import vendor5 from "../assets/vendor5.png";
import vendor6 from "../assets/vendor6.png";
import star1 from "../assets/star1.png";
import next from "../assets/next.png";
import previous from "../assets/previous.png";
import location1 from "../assets/location1.png";

function SearchPage() {
  return (
    <div className="font-poppins xl:px-[250px] px-[15px] md:px-[60px] bg-gray-200">
      <div className="lg:px-[250px] px-[15px] md:px-[30px] bg-gray-200 pt-[50px]">
        <div>
          <h4 className="flex justify-start mb-[5px] text-primary1 text-3xl font-medium">
            Makeup artist in Lagos
          </h4>
          <h4 className=" flex justify-start text-xs font-semibold text-gray-500 pt-[15px]">
            Page 2 of 10
          </h4>
          <h4 className=" flex justify-start text-xs font-medium text-gray-500 pt-[15px] pb-[30px]">
            Related search: &nbsp;
            <b className="text-black">Bridal Make up, casual Make up</b>
          </h4>
        </div>
        <div>
          <form
            className="
          flex justify-center mt-[10px] relative"
          >
            <div className="absolute z-10 top-[15px] left-[25px]">
              <img className="w-[19px]" src={search} />
            </div>
            <div className="absolute z-10 top-[15px] right-[25px]">
              <img className="w-[19px]" src={sliders} />
            </div>
            <input
              className="relative placeholder-gray-400 py-[15px] rounded-[4px] border-[0.5px] text-sm border-gray-400 text-black pl-[58px] w-full "
              type="text"
              placeholder="Search for vendors in your location"
            />
          </form>
        </div>
      </div>

      <div className="pt-[50px] pb-[70px]">
        <div>
          <div className="flex justify-start items-center pb-[15px] pt-[40px]">
            <h4 className="text-sm font-semibold">Make-up</h4>
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
                    <h4 className="text-xs font-medium pl-[6px]">
                      4.0 ratings
                    </h4>
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
                    <h4 className="text-xs font-medium pl-[6px]">
                      4.0 ratings
                    </h4>
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
                  <h4 className="text-sm font-medium pl-[10px]">
                    Edo, Nigeria
                  </h4>
                </div>
                <div className="flex justify-between items-center pt-[30px] pb-[10px]">
                  <div className="flex items-center ">
                    <div>
                      <img className="w-[18px]" src={star1} />
                    </div>
                    <h4 className="text-xs font-medium pl-[6px]">
                      4.0 ratings
                    </h4>
                  </div>
                  <h4 className="text-xs font-bold text-primary2">
                    View profile
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pt-[80px] pt-[10px]">
          <div>
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
                      <h4 className="text-xs font-medium pl-[6px]">
                        4.0 ratings
                      </h4>
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
                      <h4 className="text-xs font-medium pl-[6px]">
                        4.0 ratings
                      </h4>
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
                    <h4 className="text-sm font-medium pl-[10px]">
                      Edo, Nigeria
                    </h4>
                  </div>
                  <div className="flex justify-between items-center pt-[30px] pb-[10px]">
                    <div className="flex items-center ">
                      <div>
                        <img className="w-[18px]" src={star1} />
                      </div>
                      <h4 className="text-xs font-medium pl-[6px]">
                        4.0 ratings
                      </h4>
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

        <div className="md:pt-[80px] pt-[10px]">
          <div>
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
                      <h4 className="text-xs font-medium pl-[6px]">
                        4.0 ratings
                      </h4>
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
                      <h4 className="text-xs font-medium pl-[6px]">
                        4.0 ratings
                      </h4>
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
                    <h4 className="text-sm font-medium pl-[10px]">
                      Edo, Nigeria
                    </h4>
                  </div>
                  <div className="flex justify-between items-center pt-[30px] pb-[10px]">
                    <div className="flex items-center ">
                      <div>
                        <img className="w-[18px]" src={star1} />
                      </div>
                      <h4 className="text-xs font-medium pl-[6px]">
                        4.0 ratings
                      </h4>
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
      </div>

      <div className="flex justify-between items-center pb-[40px]">
        <div className="flex items-center">
          <div className="flex justify-center">
            <div>
              <img className="w-[6px]" src={previous} />
            </div>
            <div>
              <img className="w-[6px]" src={previous} />
            </div>
          </div>
          <h4 className="text-sponsor text-2xl font-bold pl-[10px]">
            Previous
          </h4>
        </div>
        <div className="flex items-center">
          <h4 className="text-sponsor text-2xl font-bold pr-[10px]">Next</h4>
          <div className="flex justify-center">
            <div>
              <img className="w-[6px]" src={next} />
            </div>
            <div>
              <img className="w-[6px]" src={next} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
