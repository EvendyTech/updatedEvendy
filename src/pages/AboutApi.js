import React from "react";
import meta from "../assets/meta.png";
import youtube from "../assets/youtube.png";
import mcdonalds from "../assets/mcdonalds.png";
import netflix from "../assets/netflix.png";
import google from "../assets/google.png";
import shopify from "../assets/shopify.png";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import about1 from "../assets/about1.png";

function AboutApi() {
  return (
    <div>
      <div className="bg-gray-200 xl:px-[250px] px-[15px] md:px-[60px] font-poppins md:pb-20 pb-10 pt-[20px]">
        <div className=" px-[15px] md:px-[50px] font-poppins md:pb-20 pb-10 bg-white md:pt-16 pt-10 md:flex items-center rounded-[4px]">
          <div className="md:w-1/2 md:mr-6">
            <h4 className="text-xs font-medium text-primary2">ABOUT US</h4>
            <h4 className="pt-4 text-base font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Fusce
              posuere.
            </h4>
            <h4 className="pt-4 text-xs leading-5 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              posuere tincidunt nisl vitae congue. Vestibulum ac quam tellus.
            </h4>
            <h4 className="pt-4 text-xs leading-5 font-medium">
              Sed purus lorem, imperdiet sit amet magna blandit, facilisis
              mattis orci. Curabitur vitae ante tellus. In at quam scelerisque
              tellus pretium mattis ut in justo. Sed in ex eget magna mattis
              faucibus. Sed a nisi dictum, luctus diam at, auctor eros.
            </h4>
            <h4 className="pt-4 text-xs leading-5 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              posuere tincidunt nisl vitae congue. Vestibulum ac quam tellus.
            </h4>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img className="" src={about1} />
          </div>
        </div>
      </div>

      <div className="xl:px-[250px] px-[15px] md:px-[30px] font-poppins md:pb-20 pb-10 bg-sponsor md:pt-16 pt-10">
        <div>
          <h4 className="flex justify-center text-white text-2xl">
            Learn More About Us
          </h4>
          <h4 className="text-white text-xs font-light flex justify-center pt-4">
            Know about our mission and vision
          </h4>
        </div>
        <div className="md:flex mt-12">
          <div className="md:w-1/2 w-full mx-auto lg:w-1/3 md:mr-4">
            <div className="w-8">
              <img className="" src={mission} />
            </div>
            <div>
              <h4 className="text-white text-md font-light pt-6">
                Our Mission
              </h4>
              <h4 className="text-white text-xs font-extralight leading-5 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                posuere tincidunt nisl vitae congue. Vestibulum ac quam tellus
                posuere tincidunt nisl.
              </h4>
            </div>
          </div>
          <div className="md:w-1/2 w-full mx-auto lg:w-1/3 md:ml-6 mt-10 md:mt-0">
            <div className="w-8">
              <img className="" src={vision} />
            </div>
            <div>
              <h4 className="text-white text-md font-light pt-4">Our Vision</h4>
              <h4 className="text-white text-xs font-extralight leading-5 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                posuere tincidunt nisl vitae congue. Vestibulum ac quam tellus
                posuere tincidunt nisl.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:px-[250px] px-[15px] md:px-[30px] font-poppins  pt-[120px] bg-gray-200">
        <h4 className="text-sponsor text-2xl font-semibold mb-[6px]">
          Our Customers
        </h4>
        <h4 className="text-[13px] md:w-2/3">
          Evendy is used by more than 1000 people, for events accross the
          country. Evendy is available to our customers at all times and from
          any location. More than 90% of Evendy clients are satisfied and happy.
        </h4>
      </div>

      <div className="xl:px-[250px] px-[15px] font-poppins grid grid-cols-6 gap-4 bg-gray-200 pb-[120px] pt-[40px]">
        <div className="">
          <div className="flex justify-center">
            <img className="md:w-[60px] w-[30px]" src={shopify} />
          </div>
          <h4 className="text-sponsor flex justify-center mt-[6px] text-xs sm:text-base">
            Shopify
          </h4>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img className="md:w-[60px] w-[30px]" src={meta} />
          </div>
          <h4 className="text-sponsor flex justify-center mt-[6px] text-xs sm:text-base">
            Meta
          </h4>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img className="md:w-[60px] w-[30px]" src={youtube} />
          </div>
          <h4 className="text-sponsor flex justify-center mt-[6px] text-xs sm:text-base">
            Youtube
          </h4>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img className="md:w-[60px] w-[30px]" src={mcdonalds} />
          </div>
          <h4 className="text-sponsor flex justify-center mt-[6px] text-xs sm:text-base">
            Mcdonalds
          </h4>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img className="md:w-[60px] w-[30px]" src={netflix} />
          </div>
          <h4 className="text-sponsor flex justify-center mt-[6px] text-xs sm:text-base">
            Netflix
          </h4>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img className="md:w-[60px] w-[30px]" src={google} />
          </div>
          <h4 className="text-sponsor flex justify-center mt-[6px] text-xs sm:text-base">
            Google
          </h4>
        </div>
      </div>
    </div>
  );
}

export default AboutApi;
