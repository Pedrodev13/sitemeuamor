import img1 from '../assets/fotos/img1.jpg'
import img2 from '../assets/fotos/img2.jpg'
import img3 from '../assets/fotos/img3.jpg'
import img4 from '../assets/fotos/img4.jpg'
import img5 from '../assets/fotos/img5.jpg'
import img6 from '../assets/fotos/img6.jpg'


export const Fotos = () => (
    <div className="ml-10 mr-10 lg:mt-[-400px] mt-[-600px] ">
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
            <img className='rounded-md w-52 h-60' src={img1.src} alt="" />
            <img className='rounded-md w-52 h-60' src={img2.src} alt="" />
            <img className='rounded-md col-span-full w-52 h-60' src={img3.src} alt="" />
            <img className='rounded-md w-52 h-60' src={img4.src} alt="" />
            <img className='rounded-md w-52 h-60' src={img5.src} alt="" />
            <img className='rounded-md w-52 h-60' src={img6.src} alt="" />
        </div>
    </div>
)