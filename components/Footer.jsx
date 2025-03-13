import React from 'react'
import { Delius } from 'next/font/google';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';


const deliusFont= Delius ({
    subsets: ["latin"],
    weight: '400',
    variable: "--font-delius",
  });

const Footer = () => {
  return (
    <div className={`${deliusFont.variable}`}>
        <footer className='px-[1rem] py-[3rem]  text-sm  font-delius md:px-[3rem] bg-black text-gray-200 flex flex-col md:grid md:grid-cols-3 '>
            <div className='flex flex-col scale-in-ver-bottom'>
                <h3 className='text-3xl hvr-underline-from-center cursor-pointer w-fit'>Contact</h3>
                <ul className='pt-2 flex flex-col gap-4'>
                    <li className='flex items-center gap-3'><FaPhone />0803-4567-890</li>
                    <li className='flex items-center gap-3'><MdEmail />ph-hash-house-harriers@gmail.com</li>
                    <li className='flex items-center gap-3'><MdLocationOn />Somewhere in Port Harcourt</li>
                    <li className='flex items-center gap-3'><IoTimeSharp /> Fridays by 5:00pm</li>
                </ul>

                <div className='flex items-center pt-3 gap-3'>

                    <SocialIcon
                        url="https://www.facebook.com"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        network="facebook"
                        style={{ height: 40, width: 40 }}
                    />

                    <SocialIcon
                        url="https://www.tiktok.com/@onesureplayer?_t=ZM-8tSCSG1nYjG&_r=1"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        network="tiktok"
                        style={{ height: 40, width: 40 }}
                    />

                    <SocialIcon
                        url="https://www.youtube.com"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        network="youtube"
                        style={{ height: 40, width: 40 }}
                    />
                </div>
            </div>

            <div className='flex flex-col py-10 md:py-0 scale-in-ver-bottom'>
                {/* <h3 className='text-3xl'>About Hashing</h3> */}
                <ul className='flex flex-col gap-'>
                    <li className='text-3xl hvr-underline-from-center cursor-pointer w-fit'>About Hashing</li>
                    <li className='mt-2'>The Hash House Harriers (abbreviated to HHH or H3) <br /> is an international group of non-competitive running social clubs.</li>
                    <li>An event organized by a club is known as a hash, hash run or <br /> simply hashing, with participants calling themselves hashers or <br /> hares and hounds. New to the Hash? Have a chat with our Ai  <br />  smart bot for more information relating to any question about  <br />  PH H<sup>3</sup>  and the Hash at large.</li>
                </ul>
            </div>

            <div className='flex flex-col md:ml-auto scale-in-ver-bottom'>
                <h3 className='text-3xl hvr-underline-from-center cursor-pointer w-fit'>Navigate</h3>
                <ul className='pt-2 flex flex-col gap-4'>

                    <Link href={'/'}>
                        <li className='hvr-underline-from-center cursor-pointer w-fit'>Home</li>
                    </Link>

                    <Link href={'/about'}>
                        <li className='hvr-underline-from-center cursor-pointer w-fit'>About</li>
                    </Link>

                   <Link href={'/photo-blast'}>
                        <li className='hvr-underline-from-center cursor-pointer w-fit'>Photo-Blast</li>
                   </Link>

                   <Link href={'/misma'}>
                        <li className='hvr-underline-from-center cursor-pointer w-fit'>Misma</li>
                   </Link>

                    <Link href={'/nwts'}>
                        <li className='hvr-underline-from-center cursor-pointer w-fit'>#NWTS</li>
                    </Link>
                </ul>
            </div>
        </footer>

         {/* my brand */}
            <div className="flex justify-center items-center py-3 gap-3 ">
                <h1 className="text-[10px] ">© 2025 Port Harcourt Hash House Harriers. All Rights Reserved
                || Developer: One-SurePlayer </h1>
                <p>
                    <Image src="/image/me.jpg" width={30} height={30} alt="svg_logo" className=" animate-bounce ring ring-green-400 rounded-full" />
                </p>
            </div>
    </div>
  )
}

export default Footer
