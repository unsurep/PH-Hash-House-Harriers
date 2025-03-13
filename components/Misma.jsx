import React from 'react'
import { Arvo } from "next/font/google";
import Image from 'next/image';


const arvoFont= Arvo ({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-arvo",
});





const Misma = () => {
  return (
    <div className={`${arvoFont.variable}`}>
      <section className='pt-28 bg-gray-100 font-arvo px-[1rem] md:px-[3rem]'>

       <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl text-center lg:text-4xl font-bold tracking-[5px]'>Our Mismanagement Team...</h1>
        <p className='py-6 tracking-wide'>They manage the affairs of Port Harcourt Hash House Harriers and  they are know as the Mismanagement Team.</p>
       </div>

       {/* pic of misma */}
       <div className=' flex flex-col md:grid grid-cols-2 gap-8'>
        {/* GM */}
        <div className='h-[100vh] bg-cover font-arvo rounded-lg bg-center bg-no-repeat transition duration-300 hover:brightness-75 p-6 ' style={{ backgroundImage: "url('/image/gm.jpg')"}}>
          <h1 className='text-white lg:text-2xl'>Always Pumping</h1> 
          <p className='text-white lg:text-xl font-bold'>Grand Master (GM)</p>
        </div>

        {/* RA */}
        <div className='h-[100vh] bg-cover font-arvo rounded-lg bg-center bg-no-repeat transition duration-300 hover:brightness-75 p-6' style={{ backgroundImage: "url('/image/ra.jpg')"}}>
          <h1 className='text-white lg:text-2xl'>Late Night Prof</h1> 
          <p className='text-white lg:text-xl font-bold'>Religious Adviser (RA)</p>
         
        </div>

        <div className='h-[100vh] bg-cover font-arvo rounded-lg bg-center bg-no-repeat transition duration-300 hover:brightness-75 p-6' style={{ backgroundImage: "url('/image/unknown.svg')"}}>
          <h1 className='text-black lg:text-2xl'>Pussy Eyes</h1> 
          <p className='text-black lg:text-xl font-bold'>Hash Cash</p>
        </div>

        <div className='h-[100vh] bg-cover font-arvo rounded-lg bg-center bg-no-repeat transition duration-300 hover:brightness-75 p-6' style={{ backgroundImage: "url('/image/unknown.svg')"}}>
          <h1 className='text-black lg:text-2xl'>Hipnotize</h1> 
          <p className='text-black lg:text-xl font-bold'>Haberdash</p>
        </div>





       </div>
      </section>
    </div>
  )
}

export default Misma
