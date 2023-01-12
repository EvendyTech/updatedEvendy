import React from 'react';
import hall from "../assets/hall.png";
import location from "../assets/location.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import star4 from "../assets/star4.png";
import star3 from "../assets/star3.png";
import vn from "../assets/vn.png";
import pause from "../assets/pause.png";

function Comments() {
  return (
    <div>
        <div className='px-10 font-poppins md:pb-20 pb-10 lg:px-32 bg-white md:pt-10 pt-6'>
            <div className='md:flex md:justify-between items-center w-full xl:w-4/5 xl:mx-auto'>
                <div class="md:w-2/5 w-full mr-2 ">
                <div className=''>
                    <Swiper className='rounded-xl'
                        spaceBetween={20}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        
                        onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide><img className='w-full' src={hall} /></SwiperSlide>
                        <SwiperSlide><img className='w-full' src={hall} /></SwiperSlide>
                        <SwiperSlide><img className='w-full' src={hall} /></SwiperSlide>
                        <SwiperSlide><img className='w-full' src={hall} /></SwiperSlide>
                    </Swiper>
                </div>
                </div>
                <div className='md:w-3/5 w-full md:ml-2 ml-0 flex justify-center text-center md:text-left mt-8 md:mt-0'>
                    <div>
                        <div>
                            <h4 className='text-md font-medium'>Vendor ID: 123456</h4>
                        </div>
                        <div className=''>
                            <h4 className='text-sm font-medium mt-6'><b className='text-base'>Offerings/Services:  </b>Fugiat excepteur anim deserunt ipsum commodo esse nostrud sit eu nulla. Culpa veniam officia officia voluptate qui magna adipisicing ex sit officia. Pariatur. Culpa veniam officia officia voluptate qui magna adipisicing ex sit officia. Pariatur.</h4>
                        </div>
                        <div className='flex items-center mt-6 justify-center md:justify-start'>
                            <div className='w-2 mr-4'>
                                <img className='' src={location} />
                            </div>
                            <h4 className='text-sm font-medium'>Lagos, Nigeria</h4>
                        </div>
                        <div className='flex items-center mt-6'>
                            <div className='flex'>
                                <div className='w-4 mr-0.5'>
                                    <img className='' src={star4} />
                                </div>
                                <div className='w-4 mr-0.5'>
                                    <img className='' src={star4} />
                                </div>
                                <div className='w-4 mr-0.5'>
                                    <img className='' src={star4} />
                                </div>
                                <div className='w-4 mr-0.5'>
                                    <img className='' src={star4} />
                                </div>
                                <div className='w-4 mr-0.5'>
                                    <img className='' src={star3} />
                                </div>
                            </div>
                            <h4 className='text-black text-xs text-semibold ml-2 font-medium'>4.0 ratings</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div className='px-10 font-poppins md:pb-20 pb-10 lg:px-32 bg-white w-full mt-6 md:mt-0'>
            <div className='flex justify-center text-sm font-semibold'>
                <h4>Comments</h4>
            </div>
            <div>
                <h4 className='text-sm font-semibold md:mt-12 mt-6'>Adebayo:</h4>
                <div className='flex mt-4'>
                    <div className='flex'>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star3} />
                        </div>
                    </div>
                <h4 className='text-black text-xs text-semibold ml-2 font-medium'>4.0 ratings</h4>
                </div>
                <div className='flex bg-blue-100 w-52 p-2 rounded-md justify-center mt-4'>
                    <div className='w-4 mr-2'>
                        <img className='' src={pause} />
                    </div>
                    <div className='flex'>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={vn} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-10'>
                <h4 className='text-sm font-semibold md:mt-12 mt-6'>Adebayo:</h4>
                <div className='flex mt-4'>
                    <div className='flex'>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star4} />
                        </div>
                        <div className='w-4 mr-0.5'>
                            <img className='' src={star3} />
                        </div>
                    </div>
                <h4 className='text-black text-xs text-semibold ml-2 font-medium'>4.0 ratings</h4>
                </div>
                <div className='xl:w-1/2 w-full md:w-5/6 mt-4 text-xs font-mdium'>
                   <h4>Dolore magna irure irure ut qui fugiat exercitation in ea. Commodo non occaecat ipsum irure aliquip voluptate culpa anim sint et amet laboris occaecat. Aute incididunt aute sint id.  </h4> 
                </div>
            </div>
    </div>

    </div>
  )
}

export default Comments