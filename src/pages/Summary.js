import React from 'react';
import select from "../assets/select.png";
import unselect from "../assets/unselect.png";
import djs from "../assets/djs.png";
import mcs from "../assets/mcs.png";
import cakes from "../assets/cakes.png";
import caterings from "../assets/caterings.png";
import decorations from "../assets/decorations.png";
import halls from "../assets/halls.png";

function Summary() {
  return (
    <div>
        <div className=' px-10 font-poppins pt-16 md:pb-16 pb-4 lg:px-32 items-center bg-gray-200'>
            <div className='md:flex md:justify-between lg:justify-center'>
                <div className='bg-white md:w-3/5 2xl:w-1/2 w-full mb-4 md:mb-0 py-16 px-8 rounded-sm'>
                    <div>
                        <h4 className='flex justify-center text-md font-bold mb-8'>Summary</h4>
                    </div>
                    <div>
                        <h4 className='text-sm font-normal pb-6'>Name: Atanda Damilare</h4>
                    </div>
                    <div>
                        <h4 className='text-sm font-normal pb-6'>Phone Number: 08123456789</h4>
                    </div>
                    <div>
                        <h4 className='text-sm font-normal pb-6'>Occasion: Wedding</h4>
                    </div>
                    <div>
                        <h4 className='text-sm font-normal pb-6'>Capacity: 1000</h4>
                    </div>
                    <div>
                        <h4 className='text-sm font-normal pb-3'>Vendor Selected:</h4>
                    </div>
                    <div>
                        <h4 className='text-xs font-light pb-4'>Here are all the vendors you selected.</h4>
                    </div>
                    <div>
                        <div className='flex items-center mb-4'>
                            <div className='w-8 mr-3'>
                                <img className='' src={djs} />
                            </div>
                            <h4 className='font-medium text-sm'>Dj</h4>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className='w-8 mr-3'>
                                <img className='' src={mcs} />
                            </div>
                            <h4 className='font-medium text-sm'>MC</h4>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className='w-8 mr-3'>
                                <img className='' src={cakes} />
                            </div>
                            <h4 className='font-medium text-sm'>Cakes</h4>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className='w-8 mr-3'>
                                <img className='' src={caterings} />
                            </div>
                            <h4 className='font-medium text-sm'>Catering</h4>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className='w-8 mr-3'>
                                <img className='' src={decorations} />
                            </div>
                            <h4 className='font-medium text-sm'>Decoration</h4>
                        </div>
                        <div className='flex items-center mb-4'>
                            <div className='w-8 mr-3'>
                                <img className='' src={halls} />
                            </div>
                            <h4 className='font-medium text-sm'>Hall</h4>
                        </div>
                        <div className='flex justify-center pt-8 -mx-10'>
                            <h4 className='text-xs font-medium text-black'>You are currently on our</h4>
                            <h4 className='text-xs font-medium pl-1 text-primary2'>Basic package.</h4>
                        </div>
                        <div className='mt-6 md:w-72 mx-auto'>
                            <button className='w-full bg-primary2 text-white text-xs py-3 rounded-sm'>Proceed to payment</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='bg-white md:ml-2  md:w-96 rounded-sm mb-12'>
                        <div className='px-6 pt-10 pb-6'>
                            <div class="flex items-center">
                                <div className='w-6 mr-3 cursor-pointer'>
                                    <img className='' src={select} />
                                </div>
                                <h4 className='font-semibold'>Basic package</h4>
                            </div>
                            <div className='flex justify-end mt-8'>
                                <button className='bg-primary2 text-white text-xs font-light py-2 px-3 rounded-sm'>1500000</button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white md:ml-2  md:w-96 rounded-sm mb-12'>
                        <div className='px-6 pt-10 pb-6'>
                            <div class="flex items-center">
                                <div className='w-6 mr-3 cursor-pointer'>
                                    <img className='' src={unselect} />
                                </div>
                                <h4 className='font-semibold'>Premium package</h4>
                            </div>
                            <div>
                                <div className='flex text-xs mt-4'>
                                    <h4 className='mr-1'>Event management</h4>
                                    <h4 className='mr-1'><s>1000000</s></h4>
                                    <h4>250000</h4>
                                </div>
                                <div className='text-xs font-light mt-4'>
                                    <h4>Note: Quis consectetur minim sint dolore Lorem mollit et tempor dolor non do occaecat.
                                    </h4>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-10'>
                                <div className='flex items-center'>
                                    <h4 className='text-xs font-semibold mr-3'>Agents:</h4>
                                    <button className='bg-white border border-primary2 text-primary2 text-xs font-light py-2 px-3 rounded-sm'>2750000</button>
                                </div>
                                <div className=''>
                                    <button className='bg-primary2 text-white text-xs font-light py-2 px-3 rounded-sm'>1500000</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white md:ml-2  md:w-96 rounded-sm'>
                        <div className='px-6 pt-10 pb-6'>
                            <div class="flex items-center">
                                <div className='w-6 mr-3 cursor-pointer'>
                                    <img className='' src={unselect} />
                                </div>
                                <h4 className='font-semibold'>Basic package</h4>
                            </div>
                            <div className='flex justify-end mt-8'>
                                <button className='bg-primary2 text-white text-xs font-light py-2 px-3 rounded-sm'>1500000</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-24 mb-20'>
                <h4 className='flex justify-center  text-xs font-medium text-center'>You are to make 80% deposit to cater for your event.</h4>
                <div className='flex justify-center mt-6'>
                    <button className='text-xs bg-primary2 text-white font-light py-3 w-72 rounded-sm'>Pay 80% Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary