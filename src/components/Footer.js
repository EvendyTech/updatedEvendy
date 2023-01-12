import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function Footer() {
  return (
    <div className="bg-sponsor text-white pt-10 pb-6 font-poppins">
      <div class="bg-sponsor text-white  md:grid-cols-4 md:flex md:justify-center pl-10">
        <div class="md:mr-12 xl:mr-56 w-64">
          <h4 class="mt-10 font-semibold text-3xl">Evendy</h4>
          <ul>
            <li class="flex text-sm pt-4 font-light xl:text-base">
              We help get your preferred vendors anytime and anywhere within
              your budget.
            </li>
          </ul>
        </div>
        <div class="md:mr-12 xl:mr-56">
          <h4 class="mt-6 font-semibold md:mt-10">Services</h4>
          <ul>
            <li class="flex text-sm pt-4 font-light xl:text-base">
              <h4 class="pr-1 text-yellow-500 "></h4>Decoration
            </li>
            <li class="flex text-sm pt-4 font-light xl:text-base">Cake</li>
            <li class="flex text-sm pt-4 font-light xl:text-base">Catering</li>
            <li class="flex text-sm pt-4 font-light xl:text-base">DJ</li>
            <li class="flex text-sm pt-4 font-light xl:text-base">Hall</li>
          </ul>
        </div>
        <div class="md:mr-12 xl:mr-56">
          <h4 class="mt-10 font-semibold w-28">Company</h4>
          <ul>
            <li class="flex text-sm pt-4 font-light xl:text-base">About</li>
            <li class="flex text-sm pt-4 font-light xl:text-base">
              Testimonial
            </li>
            <li class="flex text-sm pt-4 font-light xl:text-base">
              Privacy policy
            </li>
            <li class="flex text-sm pt-4 font-light xl:text-base">FAQs</li>
          </ul>
        </div>
        <div class="md:mr-12 ">
          <h4 class="mt-10 font-semibold w-40">Connect with us</h4>
          <div className="flex pt-8 md:pt-36 md:justify-center md:pr-6">
            <a>
              <div class="w-4 mx-2">
                <img src={facebook} />
              </div>
            </a>
            <a>
              <div class="w-4 mx-2">
                <img src={twitter} />
              </div>
            </a>
            <a>
              <div class="w-4 mx-2">
                <img src={instagram} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h4 className="flex text-sm font-normal xl:text-base justify-center pt-28">
          2022 copyright at evendy all simple right observed
        </h4>
      </div>
    </div>
  );
}

export default Footer;
