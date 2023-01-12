import React from "react";
import faqs from "../assets/faqs.png";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";

function Faqs() {
  return (
    <div className="font-poppins xl:px-[250px] px-[15px] md:px-[60px] bg-gray-200 pb-[90px]">
      <div className="sm:grid sm:grid-cols-2 gap-[20px]  pt-[90px] items-center">
        <div className="">
          <div>
            <div className="bg-sponsor rounded-[6px] text-white text-xs font-light p-[20px]">
              <h4>The FAQs</h4>
              <h4 className="text-3xl font-medium pt-[13px]">Help Center</h4>
              <h4 className="pt-[13px]">
                Everything you need to know about <br></br> Evendy
              </h4>
            </div>
            <div className="pt-[38px]">
              <div>
                <div className="flex justify-between items-center pb-[9px]">
                  <h4 className="text-lg font-semibold w-4/5">
                    How does Evendy work?
                  </h4>
                  <div>
                    <img className="w-[25px]" src={minus} />
                  </div>
                </div>
                <h4 className="text-xs font-light">
                  Register and browse the list of vendors available. View the
                  selected vendor, as well as their profile descriptions and
                  packages, then schedule a meeting to finalize what services
                  you need.
                </h4>
                <div className="w-full h-[1px] bg-gray-300 my-[10px]"></div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold w-4/5">
                    How can I create an event?
                  </h4>
                  <div>
                    <img className="w-[25px]" src={plus} />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-[10px]"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold w-4/5">
                    Can I schedule a physical meeting with the vendors?
                  </h4>
                  <div className="">
                    <img className="w-[25px]" src={plus} />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-[10px]"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold w-4/5">
                    Can I change my vendors if i am not satisfied with their
                    services?
                  </h4>
                  <div>
                    <img className="w-[25px]" src={plus} />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-[10px]"></div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold w-4/5">
                    How do I make payment? can I make payment directly to the
                    vendor?
                  </h4>
                  <div>
                    <img className="w-[25px]" src={plus} />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-[10px]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex">
          <div>
            <img src={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
