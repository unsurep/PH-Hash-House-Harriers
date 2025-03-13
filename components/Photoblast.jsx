import React from 'react'
import Image from 'next/image';
import { Arvo } from "next/font/google";

// these links are all pictures from cloudinary
const phPic = [
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739981725/swiper2_m6gyxs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012868/DSC_4373_yzaqrw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012890/DSC_4381_xpulqy.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012910/DSC_4388_r5fyzw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012995/DSC_4422_bw0sju.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013069/DSC_4449_eajc9l.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013094/DSC_4455_vusvy2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013168/DSC_4467_jilr9k.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013193/DSC_4497_jghbjp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013243/DSC_4531_hzrvia.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013272/DSC_4620_dqysnl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013294/DSC_4622_pa0byf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013314/DSC_4623_u0fthp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013331/DSC_4624_snw9ak.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013393/DSC_4639_r8fsac.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013454/DSC_4651_lcixhp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013496/DSC_4678_koy2m8.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013534/DSC_4899_hkcfnq.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013577/DSC_4964_vutggs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013604/DSC_4985_pliep4.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013647/DSC_5017_hrugdm.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013718/DSC_5088_vgunqm.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013683/DSC_5065_fqbcm5.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013745/DSC_5115_cyxhlp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013788/DSC_5143_jtxeb2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013818/DSC_5156_lkz13t.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013839/DSC_5162_iuqmjh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013860/DSC_5163_crazz5.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013914/DSC_5180_wtignw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013887/DSC_5165_wostbp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013972/DSC_5190_lsn6rf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013997/DSC_5192_h4v6bh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014040/DSC_5211_pev2aj.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014067/DSC_5214_qw0atn.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014090/DSC_5232_r9g1vd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014226/DSC_5308_uugr3c.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014115/DSC_5252_rlsrlk.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014270/DSC_5393_buomqx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014248/DSC_5313_slumtf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014357/DSC_5416_iyvba2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014299/DSC_5395_nyy2yq.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014395/DSC_5418_pimga7.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014475/DSC_5428_szwu8n.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014538/DSC_5488_yhgyrv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014688/DSC_5503_agly8n.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740823302/ap1_ejsu4y.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740824191/ap2_mjuzip.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740824708/ap3_ahamxs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740826125/2ap1_lkpbsv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740827057/2ap2_boeeom.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740827309/2ap3_y0ftrl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830037/3ap3_huobwp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830187/4ap1_igbuai.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830692/4ap2_cxmuzd.jpg',


  // Ended... no new pic for now as at 13/3/2025

]


const arvoFont= Arvo ({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-arvo",
});



const Photoblast = () => {
  return (
    <div className={`${arvoFont.variable}`}>
    <div className='lg:pt-28 bg-black text-white/90 px-[1rem] md:px-[3rem] font-arvo'>
      <div className='flex items-center justify-center gap-5 py-6'>
        <h1 className='text-center text-xl md:text-4xl font-bold '>PH H<sup>3</sup> Photo-Blast</h1>
        <audio src='/audio/by.mp3' typeof='mp3' controls className='bg-red-200/50 rounded'></audio>
      </div>
      
      {/* top image */}
      <div className='grid grid-cols-1 lg:flex gap-5'>
        {/* 1 */}
        <div>
          <Image src='/image/photob.png' width={400} height={400} alt='image' className='rounded'/>
        </div>

        {/* 2 */}
        <div className='flex flex-col gap-5 ml-auto'>
          <div className='hidden lg:flex gap-5'>
            <Image src='/image/s1.jpg' width={200} height={200} alt='image' className='rounded'/>
            <Image src='/image/s1.jpg' width={200} height={200} alt='image' className='rounded'/>
            <Image src='/image/s1.jpg' width={200} height={200} alt='image' className='rounded'/>
          </div>

          {/* 3 */}
          <div className='grid grid-cols-1 md:flex gap-5'>
            <Image src='/image/s2.jpg' width={200} height={200} alt='image' className='rounded'/>
            <Image src='/image/s2.jpg' width={200} height={200} alt='image' className='rounded'/>
            <Image src='/image/s2.jpg' width={200} height={200} alt='image' className='rounded'/>
          </div>
        </div>
      </div>

      {/* other images from cloudinary */}
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-5 py-8'>
        {phPic.map((url, index)=>(
          <div key={index} className='overflow-hidden rounded-lg'>
            <Image src={url} alt={`Image ${index + 1}`}
            width={700} height={700}
            className='w-full h-auto object-cover transition duration-300 hover:brightness-75'
            
            
            />

          </div>
        )

        )}
      </div>
      
    </div>
    </div>
  )
}

export default Photoblast;
