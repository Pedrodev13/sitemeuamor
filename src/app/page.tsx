import Home from "@/components/Home";
import { Texto } from "@/components/Texto";
import "tailwindcss"
import ReactAudioPlayer from "react-audio-player";
import { Fotos } from "@/components/Fotos";
import YouTube from "react-youtube";
import img1 from '@/assets/fotos/img1.jpg'


const Page = () => (
  <div className="">
    <div className="ml-10 mr-10">
    <Home />
    </div>
    <Texto />
    <div className='flex justify-center items-center py-5 px-1 bg-[#E6E6FA] text-black font-Montserrat'>
      <img className="w-12 h-12 rounded-full" src={img1.src} alt="" />
        <div className='ml-1 text-center text-[8px]'>Por Pedro Peres, para o amor da minha vida!</div>

    </div>
  </div>
)

export default Page;