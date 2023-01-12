import React from "react";
import planner2 from "../assets/planner2.png";
import planner3 from "../assets/planner3.png";
import table2 from "../assets/table2.png";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import mic from "../assets/mic.png";
import like from "../assets/like.png";
import share from "../assets/share.png";

function BlogApi() {
  return (
    <div className="  bg-gray-200 pt-[100px]">
      <div className="bg-sponsor font-poppins xl:px-[250px] px-[15px] md:px-[60px] pb-[70px] pt-[70px] sm:pt-0">
        <div className="pt-[50px] -mb-[70px] hidden sm:flex">
          <img className="w-[120px]" src={mic} />
        </div>
        <h4 className="text-white text-3xl font-semibold flex justify-center">
          Welcome to our blog
        </h4>
        <h4 className="text-white font-extralight text-sm flex justify-center text-center pt-[10px]">
          Stay updated and connected with our top event news
        </h4>
      </div>

      <div className="font-poppins xl:px-[250px] px-[15px] md:px-[60px]">
        <div className="flex justify-center pt-[60px] pb-[30px]">
          <h4 className="text-sm leading-6 text-center md:w-2/3 ">
            Join our subscriber list for the latest news,updates, and special
            offers delivered directly to your inbox
          </h4>
        </div>

        <div className="flex sm:w-2/3 mx-auto xl:w-1/2 pb-[60px] ">
          <input
            className="border-gray-400 border text-xs text-primary placeholder-gray-400 w-2/3 rounded-l-[3px] sm:pl-5 pl-2"
            name="email"
            type="amount"
            placeholder="Enter your email address here"
          />
          <button className="bg-sponsor hover:bg-primary2 text-xs w-1/3 text-white h-10 rounded-r-[3px] font-semibold">
            Get Notified
          </button>
        </div>
      </div>

      <div className="flex justify-center bg-gray-300 font-poppins xl:px-[250px] px-[15px] md:px-[60px] py-[60px] ">
        <div className="grid gap-[10px]  sm:grid-cols-3 lg:grid-cols-3 xl:gap-6 gap-y-8 xl:gap-y-12">
          <div className="bg-white w-[300px] sm:w-[180px] lg:w-[220px] md:w-[200px]  2xl:w-[250px] pb-[15px] shadow-md shadow-gray-500 mb-[30px] sm:mb-0">
            <div class="mx-[2px]">
              <img className="w-96" src={blog1} />
            </div>
            <div>
              <h4 className="text-sm px-[8px] font-medium flex justify-start pt-[4px] leading-4 h-[35px]">
                How to plan weddings in Nigeria
              </h4>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-red-500 px-[8px] pt-[10px]">
                01 Nov 2022
              </h4>
            </div>
            <div className="flex justify-between px-[8px] pt-[10px]">
              <button className="text-[10px] font-semibold border-primary1 py-[3px] rounded-[5px] px-[13px] border-[2px]">
                Read more
              </button>
              <div className="flex">
                <div className="mr-[10px]">
                  <img className="w-[20px]" src={like} />
                </div>
                <div>
                  <img className="w-[20px]" src={share} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[300px] sm:w-[180px] lg:w-[220px] md:w-[200px]  2xl:w-[250px] pb-[15px] shadow-md shadow-gray-500 mb-[30px] sm:mb-0 ">
            <div class="mx-[2px]">
              <img className="w-96" src={blog2} />
            </div>
            <div>
              <h4 className="text-sm px-[8px] font-medium flex justify-start pt-[4px] leading-4 h-[35px]">
                The world’s biggest hall
              </h4>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-red-500 px-[8px] pt-[10px]">
                01 Nov 2022
              </h4>
            </div>
            <div className="flex justify-between px-[8px] pt-[10px]">
              <button className="text-[10px] font-semibold border-primary1 py-[3px] rounded-[5px] px-[13px] border-[2px]">
                Read more
              </button>
              <div className="flex">
                <div className="mr-[10px]">
                  <img className="w-[20px]" src={like} />
                </div>
                <div>
                  <img className="w-[20px]" src={share} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[300px] sm:w-[180px] lg:w-[220px] md:w-[200px]  2xl:w-[250px] pb-[15px] shadow-md shadow-gray-500 mb-[30px] sm:mb-0">
            <div class="mx-[2px]">
              <img className="w-96" src={blog3} />
            </div>
            <div>
              <h4 className="text-sm px-[8px] font-medium flex justify-start pt-[4px] leading-4 h-[35px]">
                Photo sessions with TEE
              </h4>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-red-500 px-[8px] pt-[10px]">
                01 Nov 2022
              </h4>
            </div>
            <div className="flex justify-between px-[8px] pt-[10px]">
              <button className="text-[10px] font-semibold border-primary1 py-[3px] rounded-[5px] px-[13px] border-[2px]">
                Read more
              </button>
              <div className="flex">
                <div className="mr-[10px]">
                  <img className="w-[20px]" src={like} />
                </div>
                <div>
                  <img className="w-[20px]" src={share} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[300px] sm:w-[180px] lg:w-[220px] md:w-[200px]  2xl:w-[250px] pb-[15px] shadow-md shadow-gray-500 mb-[30px] sm:mb-0">
            <div class="mx-[2px]">
              <img className="w-96" src={blog4} />
            </div>
            <div>
              <h4 className="text-sm px-[8px] font-medium flex justify-start pt-[4px] leading-4 h-[35px]">
                The black lane
              </h4>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-red-500 px-[8px] pt-[10px]">
                01 Nov 2022
              </h4>
            </div>
            <div className="flex justify-between px-[8px] pt-[10px]">
              <button className="text-[10px] font-semibold border-primary1 py-[3px] rounded-[5px] px-[13px] border-[2px]">
                Read more
              </button>
              <div className="flex">
                <div className="mr-[10px]">
                  <img className="w-[20px]" src={like} />
                </div>
                <div>
                  <img className="w-[20px]" src={share} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[300px] sm:w-[180px] lg:w-[220px] md:w-[200px]  2xl:w-[250px] pb-[15px] shadow-md shadow-gray-500 mb-[30px] sm:mb-0">
            <div class="mx-[2px]">
              <img className="w-96" src={blog5} />
            </div>
            <div>
              <h4 className="text-sm px-[8px] font-medium flex justify-start pt-[4px] leading-4 h-[35px]">
                What to get for baby shower
              </h4>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-red-500 px-[8px] pt-[10px]">
                01 Nov 2022
              </h4>
            </div>
            <div className="flex justify-between px-[8px] pt-[10px]">
              <button className="text-[10px] font-semibold border-primary1 py-[3px] rounded-[5px] px-[13px] border-[2px]">
                Read more
              </button>
              <div className="flex">
                <div className="mr-[10px]">
                  <img className="w-[20px]" src={like} />
                </div>
                <div>
                  <img className="w-[20px]" src={share} />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-[300px] sm:w-[180px] lg:w-[220px] md:w-[200px]  2xl:w-[250px] pb-[15px] shadow-md shadow-gray-500 mb-[30px] sm:mb-0">
            <div class="mx-[2px]">
              <img className="w-96" src={blog6} />
            </div>
            <div>
              <h4 className="text-sm px-[8px] font-medium flex justify-start pt-[4px] leading-4 h-[35px]">
                TGIF
              </h4>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold text-red-500 px-[8px] pt-[10px]">
                01 Nov 2022
              </h4>
            </div>
            <div className="flex justify-between px-[8px] pt-[10px]">
              <button className="text-[10px] font-semibold border-primary1 py-[3px] rounded-[5px] px-[13px] border-[2px]">
                Read more
              </button>
              <div className="flex">
                <div className="mr-[10px]">
                  <img className="w-[20px]" src={like} />
                </div>
                <div>
                  <img className="w-[20px]" src={share} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogApi;
