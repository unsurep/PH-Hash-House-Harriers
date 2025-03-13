import Misma from '@/components/Misma';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Misma/>

      <div>
        <script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cm7pttc0e0z9xrik5y9zyqtx8"></script>
      </div>


      <Link href='#top'>
        <div className="w-[5px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   flex fixed left-10 bottom-5"><span className="font-bold "><FaArrowUp /></span></div>
      </Link>
    </div>
  )
}

export default Page;
