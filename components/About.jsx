import React from 'react'
import { Arvo } from "next/font/google";

const arvoFont= Arvo ({
    subsets: ["latin"],
    weight: '400',
    variable: "--font-arvo",
  });



const About = () => {
  return (
    <section className={`${arvoFont.variable}`} >
        <section className='pt-24 h-[60vh] bg-cover font-arvo flex items-center justify-center bg-center bg-no-repeat' style={{ backgroundImage: "url('/image/about1.jpg')"}}>
        <h1 className='text-6xl font-extrabold  text-gray-200'>About Us</h1>
        </section>

        <article>







        
        </article>
    </section>
  )
}

export default About
