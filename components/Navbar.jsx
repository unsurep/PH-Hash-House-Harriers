'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Delius } from "next/font/google";
import { IoMdMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { IoBeer } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const deliusFont = Delius({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-delius'
});




const Navbar=()=>{


    const [show, setShow]= useState(false);

    const handleShowMenue=()=>{
        setShow((prev) => !prev)
    }


        // AOS
      useEffect(() => {
        AOS.init({
          animatedClassName: 'aos-animate',
          useClassNames: false,
          duration: 400,
          easing: 'ease',
          once: false,
          anchorPlacement: 'top-bottom',
        });
      }, []);







    return (
        <div className={`${deliusFont.variable}`}>
            {/* Desktop view */}
            <nav className="lg:flex items-center justify-between px-[3rem] py-3 font-delius shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] fixed z-50  w-full ring ring-red-200 hidden bg-white text-[20px] bg-opacity-45 backdrop-blur-xl">
                <Link href={'/'}>
                    <div className="flex items-center gap-3">
                        <Image src='/image/logo.png' width={60} height={60} alt="logo"/>
                        <h3 className="">Port Harcourt Hash House Harriers
                            <span className="flex text-xs font-bold gap-1 items-center"><FaMapMarkerAlt className="text-red-500"/>Port Harcourt on the map... <MdOutlineDirectionsRun /> <IoBeer /> </span>
                        </h3>
                    </div>
                </Link>

                <ul className="flex items-center gap-5 " >
                    <Link href={'/'}>
                        <li className="hvr-underline-from-center cursor-pointer">Home</li>
                    </Link>

                    <Link href={'/about'}>
                        <li className="hvr-underline-from-center cursor-pointer">About</li>
                    </Link>

                   <Link href={'/photo-blast'}>
                        <li className="hvr-underline-from-center cursor-pointer">Photo-Blast</li>        
                   </Link>

                    <Link href={'/misma'}>
                        <li className="hvr-underline-from-center cursor-pointer">Misma</li>
                    </Link>

                    <>
                        <li className="">#NWTS</li>
                    </>

                    {/* <Link href={'/register'}>
                        <li className="cursor-pointer"><FaRegCircleUser className="text-2xl"/></li>
                    </Link> */}

                </ul>

            </nav>

            {/* mobile view */}
            <nav className="flex lg:hidden items-center justify-between px-[1rem] py-2 bg-opacity-45 backdrop-blur-xl relative z-50">
                <Link href={'/'}>
                    <div className="flex items-center gap-1">
                        <Image src='/image/logo.png' width={50} height={50} alt="logo"/>
                        <h3 className="">Port Harcourt Hash House Harriers
                            <span className="flex text-xs font-bold gap-1 items-center"><FaMapMarkerAlt className="text-red-500"/>Port Harcourt on the map... <MdOutlineDirectionsRun /> <IoBeer /> </span>
                        </h3>
                    </div>
                </Link>


                <div onClick={handleShowMenue} className="flex items-center text-black text-3xl "> <IoMdMenu/>

                    {
                        show===true ? 
                        <ul  data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" className="absolute  top-[4rem] flex flex-col gap-12 right-2 bg-gray-100 p-12 font-delius text-base h-screen w-full text-center">

                            <Link href='/'>
                                <li>Home</li>
                            </Link>

                            <Link href='/about'>
                                <li>About</li>
                            </Link>

                            <Link href='/photo-blast'>
                                <li>Photo-Blast</li>
                            </Link>

                            <Link href='/misma'>
                                <li>Misma</li>
                            </Link>

                            <li>#NWTS</li>

                            
                        </ul> :
                        
                        <div></div>
                    }


                    
                    
                </div>








               {/* <div className="">
               <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                       
                        <label htmlFor="my-drawer-4" className="drawer-button bt btn-primary"><IoMdMenu className="text-black text-3xl"/></label>
                    </div>
                    
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-white text-base-content text-center min-h-full w-56 px-4 space-y-5 pt-5 font-delius relative z-50">

                            <Link href={'/'}>
                                <li>Home</li>
                            </Link>

                            <Link href={'/about'}>
                                <li>About</li>
                            </Link>

                            <Link href={'/photo-blast'}>
                                <li>Photo-Blast</li>
                            </Link>

                            <Link href={'/misma'}>
                                <li>Misma</li>
                            </Link>

                           <>
                                <li>#NWTS</li>
                           </>

                           
      
                        </ul>
                    </div>
                </div>
               </div>  */}

            </nav>


        </div>
    )
};

export default Navbar;