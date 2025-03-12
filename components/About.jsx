import React from 'react'
import { Arvo } from "next/font/google";
import Image from 'next/image';

const arvoFont= Arvo ({
    subsets: ["latin"],
    weight: '400',
    variable: "--font-arvo",
  });



const About = () => {
  return (
    <div className={`${arvoFont.variable}`} >
        <section className='pt-24 h-[60vh] bg-cover font-arvo flex items-center justify-center bg-center bg-no-repeat' style={{ backgroundImage: "url('/image/about1.jpg')"}}>
        <h1 className='text-6xl font-extrabold  text-gray-200'>About Us</h1>
        </section>

        <article className='bg-gray-50 px-[1rem] md:px-[5rem] font-arvo flex flex-col gap-5 py-12 text-base'>
          <p className=' '>
            Port Hash House Harriers, commonly referred to as PH H<sup>3</sup> or PH-HHH, is one of the many chapters—or "Kennels," as they are called in Hash parlance—across Nigeria. The group held its first run in the 1980s.
          </p>

          <p>
            PH H<sup>3</sup> adopted the vulture as its emblem due to the frequent sightings of vultures throughout Port Harcourt back then in the 80's. The runs are marked using chalk symbols on the ground, incorporating a mix of checks and false trails known as "check-backs." On average, a PH H<sup>3</sup> run lasts approximately 60 minutes.
          </p>

          <p>
            Over the years, the kennel has achieved significant success, including hosting the 2018 Nash Hash in Calabar, which attracted over 800 hashers from around the world. Despite periods of mismanagement and changing leadership, PH H<sup>3</sup> has remained resilient, with its legacy traced through various Grand Masters, from DGM Bush Doc to DGM Bigger Twerk, and down to DGM One Sure Player and now GM Always Pumping.
          </p>
        </article>

        <section className='bg-gray-200'>
          <h1>What we do.</h1>
          
          {/* Follow the hare and not the Pussy */}
          <div>
            <div>
              <Image src='/image/livet.png' width={500} height={500} alt='image of trail' className='rounded'/>
            </div>

            <div>write ups</div>
          </div>

        </section>
    </div>
  )
}

export default About
