// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "PH Hash House Harriers | Running & Social Club in Port Harcourt",
  description:
    "Join the PH Hash House Harriers, a vibrant running and social club in Port Harcourt! Experience weekly runs, fun activities, and a welcoming community for all fitness levels.",
  keywords:
    "PH Hash House Harriers,Port Harcourt Hash House Harriers, PHH3, PH-H3, PH H3, running club Port Harcourt, social running group, Hash House Harriers Nigeria, fitness community PH, Port Harcourt events",
  openGraph: {
    title: "PH Hash House Harriers | Running & Social Club in Port Harcourt",
    description:
      "Looking for a fun running and social club in Port Harcourt? Join the PH Hash House Harriers for weekly runs, social events, and a welcoming community!",
    url: "https://ph-hash-house-harriers.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742237572/logo2_vhj7kv.jpg", 
        width: 1200,
        height: 630,
        alt: "PH Hash House Harriers - Running & Social Club",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


