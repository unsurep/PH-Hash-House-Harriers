'use client';

import React, { useEffect } from 'react'
import { Arvo } from "next/font/google";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; 





const arvoFont= Arvo ({
    subsets: ["latin"],
    weight: '400',
    variable: "--font-arvo",
  });



const About = () => {

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
    <div className={`${arvoFont.variable}`} >
        <section className='pt-24 h-[60vh] bg-cover font-arvo flex items-center justify-center bg-center bg-no-repeat' style={{ backgroundImage: "url('/image/about1.jpg')"}}>
        <h1 className='text-6xl font-extrabold  text-gray-200'>About Us</h1>
        </section>

        {/* about1 */}
        <article data-aos="fade-up"
          data-aos-duration="1000" id='about1' className='bg-gray-50 px-[1rem] md:px-[3rem] font-arvo flex flex-col gap-5 py-6 text-base'>
          <div>
            Port Hash House Harriers, commonly referred to as PH H<sup>3</sup> or PH-HHH, is one of the many chapters or "Kennels," as they are called in Hash parlance across Nigeria. The group held its first run trached back to the 80s.
          </div>

          <div>
            PH H<sup>3</sup> adopted the vulture as its emblem due to the frequent sightings of vultures throughout Port Harcourt back then in the 80's. The runs are marked using chalk symbols on the ground, incorporating a mix of checks and false trails known as "check-backs." On average, a PH H<sup>3</sup> run lasts approximately 60 minutes.
          </div>

          <div>
            Over the years, the kennel has achieved significant success, including hosting the 2018 Nash Hash in Calabar, which attracted over 800 hashers from around the world. Despite periods of mismanagement and changing leadership, PH H<sup>3</sup> has remained resilient, with its legacy traced through various Grand Masters, like DGM... to, DGM Bush Doctor to DGM Bigger Twerk, down to DGM One Sure Player and now GM Always Pumping.
          </div>
        </article>

         {/* about 2 */}
        <section id='about2' className='bg-red-100 font-arvo pb-5 '>
          <h1 className='text-center text-4xl font-bold py-16 tracking-[5px]'>What we do.</h1>
          
          {/* Follow the hare and not the Pussy */}
          <div className='grid grid-cols-1 lg:flex mx-12 bg-white rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
            <div data-aos="fade-right"
              data-aos-duration="1000">
              <Image src='/image/livet.png' width={500} height={500} alt='image of trail' className='rounded'/>
            </div>

            <div data-aos="zoom-in-up"
              data-aos-duration="1000" className='py-3 flex flex-col mx-auto gap-5 justify-center relative '>
              <h1 className='text-center text-xl lg:text-4xl font-semibold tracking-[5px]'>Follow the Hare…</h1>

              <div className='tracking-wide text-sm md:text-base px-2'>The hares mark their trail with paper, chalk, sawdust,  strings, <br /> or colored flour, depending on the environment and weather.</div>

              <div className='tracking-wide text-sm md:text-base px-2'>Special marks may be used to indicate a false trail, a backtrack, <br /> a shortcut, or a turn. The most commonly used mark is a “check”, <br /> indicating that hashers will have to search in any direction to find <br /> the continuation of the trail. Trails may contain a “beer check”, <br /> where the pack stops to consume beer, water, or snacks, allowing <br /> any stragglers to catch up to the group.</div>

              <div data-aos="fade-up-left"
                data-aos-duration="1000" className='absolute bottom-0 right-0'>
                <Image src='/image/w-can.png' width={70} height={70} alt='image' />
              </div>

    
            </div>
          </div>


          {/* Red Dress Run */}
          <div className='grid grid-cols-1 lg:flex mx-12 bg-white rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] mt-16 px-[1rem] md:px-[3rem]'>
            <div data-aos="zoom-in"
              data-aos-duration="1000">
              <h1 className='py-8 tracking-[5px] text-xl lg:text-4xl font-semibold'>Red Dress</h1>
              <div>
                <div className='tracking-wide text-sm md:text-base '>An event held annually by some chapters is the “Red Dress Run”. <br /> In 1987, Donna Rhinehart was taken to a hash in Long Beach, <br /> California, to be introduced to the sport. She was invited to <br /> “wait in the truck” until her host returned. Instead Rhinehart <br /> joined the hash in her red dress. The following year, the <br /> San Diego Hash House Harriers sent Rhinehart an airline <br /> ticket to attend the inaugural “Red Dress Run”. Hundreds <br /> of hashers wore red dresses for the event which was widely <br /> covered by local media.</div>

                <div className='py-8 tracking-wide text-sm md:text-base'>In addressing the crowd, Rhinehart suggested that such <br /> hashes might be held to raise funds for local charities. <br /> Today the Red Dress Run is another part of the Nash <br /> Hash in Nigeria (an annual event hosted by different kennels in Nigeria).</div>
              </div>
            </div>

            {/* videos */}
            <div  data-aos="fade-left"
               className='ml-auto flex items-center pb-3'>
              <video src="/video/vid1.mp4" typeof='mp4' width="400" controls className='rounded ring ring-red-200'></video>
            </div>
          </div>


          {/* Special Events */}
          <div className='grid grid-cols-1 lg:flex mx-12 bg-white rounded shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] my-16 py-3'>
            <div data-aos="fade-right"
              data-aos-duration="1000">
              <Image src='/image/bob24.png' width={500} height={500} alt='image of trail' className='rounded'/>
            </div>

            <div data-aos="zoom-in"
              data-aos-duration="1000" className=' flex flex-col mx-auto gap-5 justify-center relative '>
              <h1 className='text-center text-xl lg:text-4xl font-semibold tracking-[5px]'>Special Events...</h1>

              <div className='tracking-wide text-sm md:text-base px-2'>The Bob Marley Run is PHH3's special event, celebrating <br /> reggae legend  Bob Marley with a themed hash run and <br /> lively festivities.</div>

              <div className='tracking-wide text-sm md:text-base px-2'>Join PH H<sup>3</sup> legendary Bob Marley Run—a vibrant, <br /> reggae-infused adventure through epic trails, tricky <br /> checks, and ice-cold beer stops! Feel the rhythm, <br /> blaze the trails, and sip freely as we run, chant, and <br /> celebrate unity. One love, one trail, endless vibes!</div>

              <div className='absolute bottom-0 right-0 data-aos="fade-up-left"
                data-aos-duration="1000"'>
                <Image src='/image/w-can.png' width={70} height={70} alt='image' />
              </div>
            </div>
          </div>
        </section>

        {/* about3 TRADITIONS */} 
        <section id='about3' className='bg-gray-100 h-150vh py-6 px-[1rem] md:px-[3rem] font-arvo'>
          <h1 className='text-center text-xl lg:text-4xl font-bold py-10 tracking-[5px] font-arvo'>Our Traditions...</h1>

          {/* Traditions of the hash  */}
          <div className=' md:grid grid-cols-3 gap-6 '>
            {/* 1 */}
            <div data-aos="zoom-in"
              data-aos-duration="1000" className='text-base flex flex-col gap-3 font-arvo'>
              <h3 className='flex gap-3 items-center'><span className='px-3 py-1 bg-red-200 rounded-full font-bold'>1 {" "}<b> Circle</b></span></h3>
              <div className='font-arvo'>Most hash events conclude with a lively gathering known as the "circle"—or, less commonly, "religion." Led by chapter leaders, this tradition fosters camaraderie through socializing, spirited drinking songs, and lighthearted recognition of members. It is a time to formally name hashers, share important announcements, and celebrate the mischief of the trail. The Grandmaster (GM), Religious Advisor (RA), or a dedicated committee may steer the circle, but spontaneous participation is always encouraged. Expect laughter, camaraderie, and plenty of beer-fueled storytelling!</div>
            </div>

            {/* 2 */}
            <div data-aos="zoom-in"
              data-aos-duration="1000" className='text-base flex flex-col gap-3'>
              <h3 className='flex gap-3 items-center'><span className='px-3 py-1 bg-blue-200 rounded-full font-bold'>2 {" "}<b>Beer & Down-downs</b></span></h3>
              <div>A "down-down" is a time-honored hash ritual—part celebration, part punishment, and all in good fun. It is how hashers recognize notable deeds, outrageous antics, or simply the whims of the group. The chosen one must chug their drink without pause—or risk anointing themselves with the remains! Honors may go to visitors, newcomers, or those who have served the pack well. But beware—infractions, real or hilariously fabricated, also earn a down-down. Offenses range from skipping the beer check, pointing with a finger, or uttering a forbidden sound, to the ultimate sin—wearing new shoes, which may just become your drinking vessel! </div>
            </div>

             {/* 3 */}
            <div data-aos="zoom-in"
              data-aos-duration="1000" className='text-base flex flex-col gap-3'>
              <h3 className='flex gap-3 items-center'><span className='px-3 py-1 bg-purple-200 rounded-full font-bold'>3 {" "} <b>Hash Gear</b></span></h3>
              <div>Hashers often sport unique attire on the trail and at the closing circle, blending tradition with personality. Thick, knee-high “Shiggy” socks shield shins from thorns, mud, and mayhem, while kilts—woven with the Hash’s own tartan—add a bold touch of heritage. Some kennels reward hashers with earned gear like bibs or sashes, marking milestones and misadventures. Meanwhile, the happi coat, a vibrant Japanese-inspired jacket, is customized to reflect each kennel’s spirit. Whether clad in shiggy-proof armor or rocking a well-earned bib, hashers wear their chaos with pride!</div>
            </div>

            {/* 4 */}
            <div data-aos="zoom-in"
              data-aos-duration="1000" className='text-base flex flex-col gap-3'>
              <h3 className='flex gap-3 items-center'><span className='px-3 py-1 bg-purple-200 rounded-full font-bold'>4 {" "} <b>Hash Hymn</b></span></h3>
              <div>“Swing Low, Sweet Chariot” is the sacred anthem of the Hash—a song every hasher knows and (mostly) respects. Though playful variations exist, its place in Hashing tradition remains untouched across the globe. The hymn unites hashers in raucous harmony, echoing through trails and circles alike. While its exact origins are debated—some tracing it to Singapore H3, others to Mother H3—its legacy is undeniable. No matter the kennel or country, when the hymn begins, hashers raise their voices (and their drinks) in tribute to the wild, untamed spirit of the Hash!</div>
            </div>

            {/* 5 */}
            <div data-aos="zoom-in"
              data-aos-duration="1000" className='text-base flex flex-col gap-3'>
              <h3 className='flex gap-3 items-center'><span className='px-3 py-1 bg-green-200 rounded-full font-bold'>5 {" "} <b>Symbols & Logos</b></span></h3>
              <div>Many Hash kennels take pride in their unique logos, often designing special emblems for major events like Nash Hash. Despite the individuality of each kennel, certain universal symbols remain iconic across the Hashing world. One of the most recognizable is the human foot outline (or a pair), often accompanied by the classic phrase “On-On.”

              Among the most prized Hash memorabilia are T-shirts, considered by many as collectors items. These shirts commemorate unique Hashes and special events, often featuring kennel logos, dates, hares, locations, sponsors, and more. For Hashers, each T-shirt tells a story—of trails conquered, beers downed, and camaraderie shared</div>
            </div>

            {/* 6 */}
            <div data-aos="zoom-in"
              data-aos-duration="1000" className='text-base flex flex-col gap-3'>
              <h3 className='flex gap-3 items-center'><span className='px-3 py-1 bg-yellow-200 rounded-full font-bold'>6 {" "} <b>Hash Names</b></span></h3>
              <div>In most Hash chapters, using real names during an event is highly discouraged. Instead, members earn a “Hash name”—a nickname inspired by their most outrageous escapade, distinctive personality trait, or physical quirk. Some kennels require Hashers to earn their name by doing something truly noteworthy, ridiculous, or infamous. Others follow a structured approach, bestowing names after a certain number of runs (usually 5 to 10) or after setting their first trail (known as a Virgin Hare).

              <div className='py-4'>Naming customs vary wildly between kennels. Some stick to family-friendly monikers like "Lost My Way," while others revel in playful innuendo ("Purple Vein") or push the limits with bawdy, irreverent, or politically incorrect names. Regardless of how wild the name, once given, it sticks—Hashers will call you by it no matter where you go. In more reserved circles, particularly family-oriented Hashes, some names may be censored humorously to fit the tone, but they are rarely changed.</div>

              Until officially named, newcomers are often referred to as “Just (Name),” “Nameless (Name)” (e.g., “Nameless John”), or simply “Virgin.”</div>
            </div>
          </div>

         


          
        </section>


    </div>
  )
}

export default About
