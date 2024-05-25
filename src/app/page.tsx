import Home from "@/components/Home";
import { Texto } from "@/components/Texto";
import "tailwindcss"
import ReactAudioPlayer from "react-audio-player";
import { Fotos } from "@/components/Fotos";
import YouTube from "react-youtube";


const Page = () => (
  <div className="">
    <div className="ml-10 mr-10">
    <Home />
    </div>
    <Texto />
    <Fotos />
    <div className='py-5 mt-5 bg-[#E6E6FA] text-black font-Montserrat'>
        <div className='text-center text-[8px]'>Por Pedro Peres, para o amor da minha vida!</div>

    </div>
  </div>
)

export default Page;