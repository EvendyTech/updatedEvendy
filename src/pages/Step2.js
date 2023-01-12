import React from 'react';
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
import {Link} from "react-router-dom";

function Step2() {
  return (
    <div className='flex justify-center'>
        <div className='md:top-44 font-poppins pt-16 pb-16 bg-white shadow-lg  md:w-[700px] top-24 w-[350px] sm:w-[600px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] rounded md:px-8 px-4 lg:px-16 2xl:px-32 md:flex border-t mt-16 mb-10'>
            <div className='md:w-1/2 md:mr-8 lg:pr-16 2xl:pr-32'>
                <div>
                    <h4 className='text-sm font-semibold'>Step 2</h4>
                </div>
                <div>
                    <h4 className='text-xs font-medium pb-10 leading-5 pt-6'>Kindly provide information about the vendors you might need.</h4>
                </div>
                <div className='flex items-center justify-center mb-16'>
                    <div className=' h-[1px] bg-gray-300 w-1/5'></div>
                    <div className='flex justify-center items-center bg-gray-300 w-6 h-6 rounded-full text-xs text-white'>1</div>
                    <div className=' h-[1px] bg-gray-300 w-2/5 '></div>
                    <div className='flex justify-center items-center bg-primary2 w-6 h-6 rounded-full text-xs text-white'>2</div>
                    <div className=' h-[1px] bg-gray-300 w-1/5 '></div>
                </div>
                <div>
                    <div>
                    <h4 className='text-lg font-medium pb-3'>Vendor:</h4>
                </div>
                <div>
                    <h4 className='text-xs font-normal pb-10'>Kindly select the list of vendors you need.</h4>
                </div>
                <div className="grid grid-cols-4 gap-3 gap-y-6 xl:grid-cols-5">
                    <div className=' items-center mb-4'>
                        <div className='w-10 mx-auto'>
                            <img className='' src={djs} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-1'>Dj</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={amc} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5'>MC</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={acakes} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5'>Cakes</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={acatering} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5'>Catering</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={adecoration} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5'>Decoration</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={ahall} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5'>Hall</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={ahotel} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5'>Hotel</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={adress} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5 text-center'>Wedding dress</h4>
                    </div>
                    <div className=' items-center mb-4'>
                        <div className='w-6 mx-auto'>
                            <img className='' src={amanagement} />
                        </div>
                        <h4 className='font-medium text-sm flex justify-center pt-5 text-center'>Full event management</h4>
                    </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <h4 className="text-sm leading-4 font-medium">
                        Name other vendors you might need but not listed above:
                    </h4>
                    <textarea className='border-gray-300 border-2 text-sm text-extrabold text-primary placeholder-gray-300 rounded-lg p-4 pl-6 w-full mt-3 ' name="message" placeholder="Paste them here" rows="6" ></textarea>
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-medium">Budget:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-6' name="email" type="text" placeholder="State your budget here" /> 
                </div>
                <div className="mt-8">
                    <h4 className="text-sm font-medium">Budget Specifics:</h4>
                    <h4 className="text-xs font-normal my-3">Do you have specific vendors you would like to focus more of your budget on.</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-3 pl-6' name="email" type="text" placeholder="E.g Decoration" /> 
                </div>
                <div className='mt-8'>
                    <h4 className="text-sm font-medium">
                        Additional Information
                    </h4>
                    <h4 className="text-xs font-normal my-3">It could be a request or specific information.</h4>
                    <textarea className='border-gray-300 border-2 text-sm text-extrabold text-primary placeholder-gray-300 rounded-lg p-4 pl-6 w-full mt-3 ' name="message" placeholder="Write your other information here" rows="6" ></textarea>
                </div>
                
                <Link to="/Services">
                    <div className="flex justify-center mt-6 mb-16 md:mb-0">
                        <button className="bg-primary2 text-white py-3 rounded-sm text-xs font-normal w-full">Submit</button>
                    </div>
                </Link>
                
   
            </div>

            <div className='md:w-1/2'>
                <div>
                    <h4 className='text-sm font-semibold'>Request for Vendor</h4>
                </div>
                <div>
                    <h4 className='text-xs font-medium leading-5 pt-6'>Fugiat deserunt aliquip sint in. Pariatur anim et pariatur ad elit cupidatat elit sunt consequat aliquip.Aliquip aute ut do veniam voluptate occaecat incididunt dolor dolor excepteur.</h4>
                </div>
                <div>
                    <h4 className='text-xs font-medium leading-5 pt-6'>Ea deserunt laboris exercitation aliquip aliquip laborum qui amet tempor magna consectetur cupidatat. In pariatur excepteur sit adipisicing esse magna occaecat id proident incididunt. Deserunt sunt eiusmod ullamco ad qui Lorem. Pariatur non ullamco Lorem est do dolore laborum sit in ad incididunt irure nisi amet.</h4>
                </div>
                <div>
                    <h4 className='text-xs font-medium leading-5 pt-6'>Velit consequat ex commodo elit incididunt. Commodo id irure sunt sunt ipsum ex reprehenderit. Culpa et labore duis minim velit eiusmod commodo. Laborum nisi aliquip ipsum laboris ipsum ut voluptate.</h4>
                </div>
                <div>
                    <h4 className='text-xs font-medium leading-5 pt-6'>Duis duis non id nostrud commodo occaecat consectetur commodo eiusmod ullamco dolor.Pariatur non proident cupidatat laborum aliquip velit et ullamco amet cupidatat ut non nisi.</h4>
                </div>
                <div>
                    <h4 className='text-xs font-medium leading-5 pt-6'>Sint pariatur excepteur irure laborum elit laborum aute. Cillum duis laborum occaecat adipisicing commodo excepteur voluptate.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step2