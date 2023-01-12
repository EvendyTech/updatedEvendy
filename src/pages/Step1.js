import React from 'react';
import {Link} from "react-router-dom";

function Step1() {
  return (
    <div className='flex justify-center'>
        <div className='md:top-44 font-poppins pt-16 pb-16 bg-white shadow-lg  md:w-[700px] top-24 w-[350px] sm:w-[600px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px] rounded md:px-8 px-4 lg:px-16 2xl:px-32 md:flex border-t mt-16 mb-10'>
            <div className='md:w-1/2 md:mr-8 lg:pr-16 2xl:pr-32'>
                <div>
                    <h4 className='text-sm font-semibold'>Get vendors for your events</h4>
                </div>
                <div>
                    <h4 className='text-xs font-medium pb-10 leading-5 pt-6'>Please fill these information and we will find you vendors according to your budget in no time.</h4>
                </div>
                <div className='flex items-center justify-center mb-16'>
                    <div className=' h-[1px] bg-gray-300 w-1/5'></div>
                    <div className='flex justify-center items-center bg-primary2 w-6 h-6 rounded-full text-xs text-white'>1</div>
                    <div className=' h-[1px] bg-gray-300 w-2/5 '></div>
                    <div className='flex justify-center items-center bg-gray-300 w-6 h-6 rounded-full text-xs text-white'>2</div>
                    <div className=' h-[1px] bg-gray-300 w-1/5 '></div>
                </div>
                <div className="">
                    <h4 className="text-sm font-medium">Full name:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-6' name="text" type="text" placeholder="e.g John" /> 
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-medium">Phone number:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-6' name="number" type="number" placeholder="e.g 08123456789" /> 
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-medium">Email address:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-2 rounded-lg flex mx-auto w-full mt-1 pl-6' name="email" type="email" placeholder="e.g johndoe@gmail.com" /> 
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-medium">The state the occasion will be taking place:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-6' name="email" type="text" placeholder="e.g Lagos" /> 
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-medium">Area the occasion will be taking place:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-6' name="text" type="text" placeholder="e.g Lekki" /> 
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-medium">Date of Occasion:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-6' name="text" type="date" placeholder="DD - MM - YY" /> 
                </div>
                <div className="mt-6">
                    <h4 className="text-sm font-medium">Type of Occasion:</h4>
                    <input className='border-gray-300 border-2 text-xs text-primary placeholder-gray-300 p-3 rounded-lg flex mx-auto w-full mt-1 pl-6' name="email" type="text" placeholder="Select one" /> 
                </div>
                <Link to="/Step2">
                    <div className="flex justify-center mt-10 mb-16 md:mb-0">
                        <button className="bg-primary2 text-white py-3 rounded-sm text-xs font-normal w-full">Proceed</button>
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

export default Step1