
import Link from 'next/link';
import Hero from '@/components/Hero'
import { FaArrowUp } from "react-icons/fa";



const Home = () => {
  return (
    <div className='relative'>
      <Hero />
      <div>
        <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cm7pttc0e0z9xrik5y9zyqtx8"></script>
        {/* <div className="w-[5px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300 z-50  flex fixed right-5 bottom-5"><button className="font-bold ">Who is Coming</button></div> */}

        {/* <div className='z-50 flex fixed right-5 bottom-5 animate-bounce'>
          <button className="font-bold whoiscoming px-8 py-3 rounded-md">Who is Coming</button>
        </div> */}



      </div>

      <Link href='#top '>
        <div className="w-[5px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300 z-50  flex fixed left-5 bottom-5"><span className="font-bold "><FaArrowUp /></span></div>
      </Link>
      
    </div>
  )
}

export default Home;
