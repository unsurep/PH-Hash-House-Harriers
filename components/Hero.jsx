'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Arvo } from "next/font/google";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from 'motion/react'
import { FaWhatsappSquare } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const arvoFont= Arvo ({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-arvo",
});



const Hero = () => {
  const [background, setBackground] = useState ('/image/about1.jpg')
  const [write, setWrite] = useState ("Another welcome note to market tehiljem to the world.")

  useEffect (() =>{
    const timeout = setTimeout(() => {
      setBackground('/image/bg-sec1.avif');
      setWrite('Now the second background and the new / second text would appear how u want it ')
    }, 6000);

    return () => clearTimeout(timeout);
  }, []);


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



  const [text] =useTypewriter({
    words: ['Port Harcourt', 'Hash House Harriers','Port Harcourt Hash House Harriers'],
    loop: 2, 
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    <div className={`${arvoFont.variable}`}>
      {/* SECTION 1 */}
        <section id='section1' className='h-screen bg-cover font-arvo  bg-center bg-no-repeat' style={{ backgroundImage: `url(${background})` }}>
            <div className='bg-red-50 h-[60%] md:h-[70%] text-3xl md:px-[3rem] '>
              <h1 className="text-lg pt-[4rem] md:pt-[7rem] font-semibold text-center font-arvo tracking-[5px]">Welcome to</h1>
              <h1 className='flex items-center  justify-center pt-[1rem] md:pt-[1rem] font-arvo head_text tracking-[5px] text-center'>{text}<Cursor cursorColor='red' /></h1>
              <p className='text-center text-base md:text-[20px] md:pt-[2rem] pt-[2rem] text-black/90 font-bold font-arvo'>We are a drinking club with a running problem.</p>
              <p className='text-center pt-[1rem] text-sm font-arvo text-black/90 font-bold md:text-xl'>We drink beer to save water</p>
              <p className='text-center text-base font-arvo text-black/90 font-bold md:text-xl flex items-center justify-center gap-2'>Join us every Friday at 5pm!
                <Image src='/image/beer1.svg' width={35} height={35} alt="beericon" className="animate-bounce"/>
              </p>
            </div>
            
            {/* modal */}
            <div className="flex items-center justify-center pt-[1rem] min-h-[30%]">
             
              <button className="btn bounce-in-top font-arvo border border-black hover:border hover:border-black" onClick={()=>document.getElementById('my_modal_4').showModal()}>Run Information:</button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl font-arvo">
                  <h3 className="font-bold text-lg ">Hashers RU!!!</h3>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-1">
                      <Image src='/image/logo.png' width={50} height={50} alt="logo"/>
                      <h3 className="text-xs font-arvo">#NWTS</h3>
                    </div>
                    <h3 className="font-semibold">Weekly Run Information :</h3>
                    <ul className="space-y-3">
                      <li>Run No: 1007</li>
                      <li>Date: Friday 14th March, 2025</li>
                      {/* <li>Venue:  GRA Phase II, Port Harcourt</li> */}
                      <li>Hare: PH H3Mismanagement</li>
                      <li>Rego: N1,500</li>
                      <li>Time: 5:00 pm</li>
                      <li>Rego Account: 1019116023 UBA</li>
                      <li className="font-bold flex gap-2 items-center">Send evidencey of payment to Pussy eyes on 09122146944 <span><Image src='/image/whatsapp.svg' width={30} height={30} alt="whatsapp logo" /></span></li>
                    </ul>
                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
        </section>

        {/* SECTION 2 */}
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
        
          id="section2" className="h-[20rem] font-arvo py-[3rem] px-[3rem] bg-red-50 ">
          <div className="space-y-5">
            <h3 className="text-sm md:text-lg">A community of Runners and Beer lovers</h3>
            <h3 className="text-sm md:text-3xl tracking-[5px]">Hash House Harriers</h3>
          </div>

          <div className="pt-3">
            <p className="text-sm md:text-[20px] leading-4 md:leading-6">Port Harcourt Hash House Harriers is a kennel of <br /> vibrant community that unites runners and beer lovers. <br /> We host weekly, non-competitive runs, to celebrate and <br /> promote physical fitness and friendship. Join us to  experience <br /> dynamic adventures and lasting connections ON ON!.</p>

          </div>
        </section>

        {/* SECTION 3 */}
        <section id="section3" className="px-[3rem] font-arvo bg-gray-300/20 py-16 relative">
          <div  data-aos="fade-up" data-aos-duration="1000">
            <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740592027/pic1_mss4ds.jpg' width={700} height={500} alt="image" className="rounded-xl"/>
          </div>

          <div  className="md:absolute top-[5rem] pr-[16px] pb-5 right-[8rem] font-arvo h-[35%] md:bg-red-100/80 w-fit rounded-lg">
            <div data-aos="fade-left" data-aos-duration="1000"  className="right-[24rem] h-[100%] bg-gray-50/90  px-[1rem] py-10 rounded-lg">
              <h1 className="font-bold text-2xl tracking-[5px]">Hiking with your running shoes ?</h1>
              <p className="pt-3 leading-5">Hiking with your running shoes lacks proper ankle support, <br /> compromises stability and durability compared to proper hiking boots <br /> which provide better grip and stability. Confirm from DGM Bigger  <br /> Twerk for more information else OTILO!</p>
            </div>

            <div className="flex md:block px-[1rem]">
              <Image src='/image/shoe 2.png' width={100} height={100} alt="image" className="md:absolute top-[12rem] right-[8rem]"/>

              <Image src='/image/shoe.png' width={100} height={100} alt="image" className="md:absolute top-[12rem] right-[2rem]"/>
            </div>

          </div>


        </section>

        {/* Section 4 Swiper Js */}
        <div data-aos="fade-up" data-aos-duration="1000" id="section4" className="md:px-[3rem] font-arvo px-[1rem] bg-gray-300/20 pb-[2rem]">
        
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            }}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper">
              
              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599057/IMG-20250127-WA0090_byqiol.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599093/IMG-20250226-WA0181_bdgrka.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599103/IMG-20250226-WA0185_aztgr7.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>


              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599111/IMG-20250226-WA0183_abmju2.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599125/IMG-20250226-WA0187_ontlcb.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599130/IMG-20250226-WA0188_llnkam.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599144/IMG-20250226-WA0190_kl0scm.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599150/IMG-20250226-WA0191_uejhnr.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599182/IMG-20250226-WA0195_inzdiw.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599136/IMG-20250226-WA0189_q2ns0z.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599172/IMG-20250226-WA0193_aae8ow.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599248/IMG-20250226-WA0197_o9oz9f.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599260/IMG-20250226-WA0199_altyic.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599253/IMG-20250226-WA0198_zxstru.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='h-48 w-full overflow-hidden'>
                    <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599268/IMG-20250226-WA0200_iiopxm.jpg' width={100} height={100}alt='image' className='rounded-[12px] h-full w-full object-cover'/>
                  </div>
              </SwiperSlide>



          </Swiper>
                

        </div>
          
          
        {/* Section 5 SOFT BABY */}
        <div data-aos="fade-up" data-aos-duration="1000" id="section5" className="bg-black text-gray-200/50 h-[40%] lg:flex  pb-12 relative font-arvo">
          <div>
            <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740602752/DSC_5481_zen0c1.jpg' width={700} height={100} alt="image"/>
          </div>
          
          <div className="flex flex-col items-center justify-center mx-auto pt-5 relative">
            <p className="leading-8 pb-[1.5rem] text-sm md:text-xl px-[1rem]">“Hashing is a life style and cold beer heals all wound. <br /> We hash to promote physical fitness among hashers, <br /> We hash to get rid of weekend hangovers, <br /> We hash to acquire a good thirst and to satisfy it with beer and <br /> To persuade the older hashers they are not as old as they feel.”
            </p>

            <div className="pt-5 flex gap-5">
              <motion.div
                initial={{
                  opacity:0,
              }}
              animate={{
                  scale:[1,2,2,3,1],
                  opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                  borderRadius: ['20%', '20%', '50%', '80%', '20%'],
              }}
      
              transition={{
                  duration:2.5,
              }}
              className='relative flex justify-center items-center mt'>
                <div className='absolute border border-blue-400/50 rounded-full h-[150px] w-[150px] mt-4 animate-ping'/>

                {/* <div className='absolute border border-blue-200/50 rounded-full h-[250px] w-[250px] mt-4'/> */}

                <div className='absolute border border-blue-400/50 rounded-full h-[350px] w-[350px] mt-4 animate-ping'/>

                {/* <div className='rounded-full border border-[#F7AB0A]/50 opacity-20 h-[500px] w-[500px] absolute mt-52 animate-pulse'/> */}
                <Image src='/image/softb.jpg' width={100} height={10} alt="profile image" className="ring ring-blue-400 rounded-full" />
              </motion.div>
              
              
              <ul className="flex flex-col items-center justify-center text-white">
                <li className="font-semibold">SOFT BABY</li>
                <li className="text-sm block">#PH H<sup>3</sup></li>
              </ul>
            </div>
          </div>

            {/*tablet screen hidden  */}
          <div data-aos="fade-up-left" data-aos-duration="1000" className="absolute top-[20rem] md:block hidden right-[2rem]">
            <Image src='/image/w-can.png' width={100} height={100} alt="image of water can"/>
          </div>
            
          {/* small screen */}
          <div data-aos="fade-up-left" data-aos-duration="1000" className="absolute top-[37rem] md:hidden right-[1rem]">
            <Image src='/image/w-can.png' width={30} height={30} alt="image of water can"/>
          </div>
          
        </div>

        {/* SECTION 6  */}
        <div data-aos="fade-up" data-aos-duration="1000" id='section6' className=' font-arvo bg-cover bg-center bg-no-repeat h-screen' style={{ backgroundImage: "url('/image/lucas1.jpg')" }}>
          <div className="pt-">
            <div className="bg-black/40 pt-20 md:px-[3rem]  ">
              <Image src='/image/save.png' width={300} height={300} alt="image" className=" "/>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-3 pt-10 bg-black/40 md:gap-16 md:px-[3rem] px-[1rem]">
              {/* 1 */}
              <div className="flex gap-1 md:gap-3 w-fit ">
                <div><Image src='/image/ishoe.png' width={50} height={50} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo ">
                  <h2 className="md:text-2xl font-bold text-xs">MR. BAD LEG</h2>
                  <p className="text-xs md:text-lg">As a hasher, your hash gear is your identity. <br /> Make sure you always come with it.</p>
                </div>
              </div>

              {/* 2 */}
              <div className="flex gap-1 md:gap-3 w-fit">
                <div><Image src='/image/isexz.png' width={90} height={90} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">UNSURE</h2>
                  <p className="text-xs md:text-lg">It is not the size of the dog in the fight but rather the size of the fight in the DOG.</p>
                </div>
              </div>

              {/* 3 */}
              <div className="flex gap-1 md:gap-3 w-fit">
                <div><Image src='/image/ionon.png' width={150} height={150} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">AWAY RUNS</h2>
                  <p className="text-xs md:text-lg">The Hash is a non-competitive club that brings together runners and beer lovers for a refreshing reward at the end.</p>
                </div>
              </div>

              {/* 4 */}
              <div className="flex gap-1  pt-3 md:gap-3 w-fit">
                <div><Image src='/image/ican.png' width={50} height={50} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">BEER MERCHANT</h2>
                  <p className="text-xs md:text-lg">We drink Lager to save water.</p>
                </div>
              </div>

              {/* 5 */}
              <div className="flex gap-1 pt-3 md:gap-3 w-fit">
                <div><Image src='/image/iwork.png' width={150} height={150} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">I AM NOT AN HASHER</h2>
                  <p className="text-xs md:text-lg">Every hasher is unique. We are fun-loving people who come together for the thrill of a great trail and the joy of a cold beer </p>
                </div>
              </div>

               {/* 6 */}
               <div className="flex gap-1 pt-3 md:gap-3 w-fit">
                <div><Image src='/image/iwatch.png' width={50} height={50} alt="hash gear" className=""/></div>
                <div className="text-gray-100/90 font-arvo">
                  <h2 className="md:text-2xl font-bold text-xs">REGO</h2>
                  <p className="text-xs md:text-lg">Rego is a hasher's key. No Rego, No Hashing.</p>
                </div>
              </div>
            </div>
          </div>
          
        <div className="h-screen bg-black/40"/>
        

        </div>

        {/* SECTION 7 LEADERS DASHBOARD */}
        <div id="section7" className="bg-gray-50 pt-10  text-black/40 flex flex-col  items-center justify-center px-[1rem] md:px-[3rem] font-arvo">
          <h3 className="font-bold font-arvo text-4xl  text-black/90 tracking-[5px]">PH H<sup>3</sup> GM</h3>
          <h3 className="font-delius text-gray-400">&</h3>
          <h1 className="font-bold font-arvo text-2xl  mb-12 tracking-[5px] text-black/90">X GMs from 4 years ago...</h1>

          <div className=" flex flex-col md:grid md:grid-cols-3 items-center gap-16">
          
            {/* Always pumping */}
            <div data-aos="fade-up" data-aos-duration="1000">
              {/* up div */}
              <div className="text-center items-center flex justify-center hvr-float-shadow ">
                
                <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740823302/ap1_ejsu4y.jpg' width={300} height={300} alt="image" className=" ring ring-red-500 rounded-lg"/>
              </div>

              {/* down div */}
              <div className="flex gap-3 mt-5">
                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740826125/2ap1_lkpbsv.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740827057/2ap2_boeeom.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740827309/2ap3_y0ftrl.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>
              </div>

              <div className="flex mt-3 font-arvo">
                <p className="flex items-center gap-1 text-sm hover:text-black hover:font-bold">GM ALWAYS PUMPING 2025<span><Image src='/image/alwaysp.svg' width={20} height={20} alt="icon" className=""/></span></p>
                <button className="ml-auto text-xs font-bold items-center flex animate-bounce border border-black p-2 rounded-md hover:bg-black hover:text-white">#NWTS</button>
              </div>
            </div>

            {/* Unsure */}
            <div data-aos="fade-up" data-aos-duration="1000">
              {/* up div */}
              <div className="text-center items-center flex justify-center hvr-float-shadow">
                <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740824191/ap2_mjuzip.jpg' width={300} height={300} alt="image" className="ring ring-red-500 rounded-lg"/>
              </div>

              {/* down div */}
              <div className="flex gap-3 mt-5">
              <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740829002/3ap1_c0mhyi.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830037/3ap3_huobwp.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740829560/3ap2_ewp2ma.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

              </div>

              <div className="flex mt-3 font-arvo">
                <p className="flex items-center gap-1 text-sm hover:text-black hover:font-bold">X GM 1 SURE PLAYER 2022<span><Image src='/image/cancel.svg' width={20} height={20} alt="image" className=""/></span></p>
                <button className="ml-auto text-xs font-bold items-center flex animate-bounce border border-black p-2 rounded-md hover:bg-black hover:text-white">#OTILO </button>
              </div>
            </div>

            {/* Bigger Twerk */}
            <div data-aos="fade-up" data-aos-duration="1000">
              {/* up div */}
              <div className="text-center items-center flex justify-center hvr-float-shadow">
                <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740824708/ap3_w8jziq.jpg' width={300} height={300} alt="image" className="ring ring-red-500 rounded-lg"/>
              </div>

              {/* down div */}
              <div className="flex gap-3 mt-5">
                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830187/4ap1_igbuai.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830692/4ap2_cxmuzd.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

                <div className="hvr-float-shadow">
                  <Image src='https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830885/4ap3_rqos1h.jpg' width={100} height={100} alt="image" className="rounded"/>
                </div>

              </div>

              <div className="flex mt-3 font-arvo">
                <p className="flex items-center gap-1 text-sm hover:text-black hover:font-bold">X GM BIGGER TWERK 2020<span><Image src='/image/bbeer.svg' width={20} height={20} alt="image" className=""/></span></p>
                <button className="ml-auto text-xs font-bold items-center flex animate-bounce border border-black p-2 rounded-md hover:bg-black hover:text-white">#P.O.S AFRICA</button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 8 UP COMING EVENTS */}
        <div data-aos="fade-up" data-aos-duration="1000" id='section8' className="bg-gray-50 w-full font-arvo px-[1rem] md:px-[3rem]">
          <div className="py-16">
            <h1 className="tracking-[5px] font-extrabold underline text-center text-2xl">2025 UP COMING HASH EVENTS IN NIGERIA</h1>
          </div>
            
          {/* SWIPER */}
          <div className='pt-'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              }}
              autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              }}
              // pagination={{clickable: true,}}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]} className="mySwiper">

              {/* 1 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/trilogy.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

                {/* 2 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/sierra.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

                {/* 3 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/fgals.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 4 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/akwa.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 5 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/pan.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 6 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/bob.jpg" width={200} height={200} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 7 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/trilogy.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 8 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/sierra.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 9 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/fgals.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 10 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/akwa.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 11 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/pan.jpg" width={300} height={300} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>

              {/* 12 */}
              <SwiperSlide>
                <div>
                  <Image src="/image/bob.jpg" width={200} height={200} alt='image' className='rounded-[20px]'/>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <h1 className="text-center py-5 text-red-400">Remember, REGO is KEY!</h1>
        </div>

        {/* SECTION 9 MARKET */}
        <div data-aos="fade-up" data-aos-duration="1000" id="section9" className="bg-gray-50 w-full pt-8 px-[1rem] md:px-[3rem] font-arvo">
          <h1 className="text-center text-2xl font-bold tracking-[5px] underline">MEET OUR APPROVED VENDORS</h1>
          
          {/* market swiper */}
          <div className='py-12'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              }}
              autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              }}
              pagination={{clickable: true,}}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]} className="mySwiper">

              {/* 1 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s1.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-items-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

                {/* 2 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s2.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

                {/* 3 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s3.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 4 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s4.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 5 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s1.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 6 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s2.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col">
                      <p className="text-base font-bold font-arvo">Men Fashions</p>
                      <p className="text-xs font-arvo">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 7 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s3.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 8 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s4.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 9 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s1.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvotext-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 10 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s2.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 11 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s3.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* 12 */}
              <SwiperSlide>
                <div className="flex flex-col gap-4 px-2 py-4 bg-gray-50 hover:bg-red-200/30 rounded">
                  <div className="bg-gray-100 rounded">
                    <Image src='/image/s4.jpg' width={100} height={100} className="rounded" alt='image'/>
                  </div>

                  <ul className="flex items-center justify-center gap-2 py-4">
                    <li>
                      <Image src='/image/a2.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>

                    <li>
                      <Image src='/image/a3.webp' width={100} height={100} className="rounded" alt='image'/>
                    </li>

                    <li>
                      <Image src='/image/a4.webp' width={100} height={100} className="rounded" alt="image"/>
                    </li>
                  </ul>

                  <div className="flex items-center justify-center gap-5">
                    <div className="flex flex-col w-full">
                      <p className="text-base font-bold font-arvo text-center">Men Fashions</p>
                      <p className="text-xs font-arvo text-center">Sold by of Cooking Cummer PH H<sup>3</sup></p>
                      {/* <p>Contact</p> */}
                    </div>

                    <div className="flex items-center">
                      <p><FaWhatsappSquare className="text-4xl text-green-500 rounded-full"/></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
        
        {/* Contact Us */}
        <div id="section10" className="px-[1rem] py-[1rem] md:px-[3rem] bg-gray-50/90  ">
          <h1 className="text-center font-arvo text-3xl font-bold tracking-[5px] underline py-5">CONTACT US / MAKE A REPORT</h1>

          <div className="lg:flex py-8 shadow-2xl justify-center px-[1rem] md:px-[3rem] items-center">
            {/* div A */}
            <form data-aos="fade-right" data-aos-duration="1000" className="px-6  formbg opacity-80 py-7 rounded flex flex-col justify-items-center">
              {/* Hash handle */}
              <div className="font-arvo flex flex-col">
                <label>Hash Handle</label>
                <input type="text"
                placeholder="Enter hash handle"
                className="px-4 py-2 outline-none rounded text-gray-500"/>
              </div>
              
              {/* Name of kennel */}
              <div className="font-arvo flex flex-col py-3">
                <label>Name of Kennel</label>
                <input type="text"
                placeholder="Enter kennel name"
                className="px-4 py-2 outline-none rounded text-gray-500"/>
              </div>

              {/* Subject */}
              <div className="font-arvo flex flex-col">
                <label>Subject Matter</label>
                <input type="text"
                placeholder="Enter subject"
                className="px-4 py-2 outline-none rounded text-gray-500"/>
              </div>

              {/* Message */}
              <div className="font-arvo flex flex-col py-3">
                <label>Message</label>
                <textarea type="text"
                placeholder="Enter Message"
                className="px-4 py-2 outline-none rounded text-gray-500"/>
              </div>

              <div className="flex items-center justify-center py-5">
                <button type="submit" className="w-full bg-gray-100 hover:bg-gray-300/60 py-2 rounded">Submit</button>
              </div>
            </form>

            {/* Div B */}
            <div>
              <Image src='/image/climb.avif' width={700} height={700} alt="image" className="rounded"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
