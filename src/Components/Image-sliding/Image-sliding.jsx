import Books from '../../assets/Books.png';
import Electronics from '../../assets/Electronics.png';
import Fashion from '../../assets/Fashion.png';
import home_appliances from '../../assets/home_appliances.png';
import Kitchen from '../../assets/Kitchen.png';
import Lunar_new_year from '../../assets/Lunar_new_year.png';
import {ChevronRight,ChevronLeft} from 'lucide-react';
import { useRef } from 'react';
function ImageSliding(){

    const slider = useRef(null);//useRef → When you need to remember a value or access a DOM element without triggering a re-render.

    function slideRight() {
        slider.current.scrollBy({
            left: slider.current.clientWidth + 16,
            behavior: 'smooth'
        });
    }

    function slideLeft() {
        slider.current.scrollBy({
            left: -slider.current.clientWidth -16,
            behavior: 'smooth'
        });
    }
    return(
        <div className="relative">
            <ul className="flex overflow-x-hidden gap-4" ref={slider} >
                <img src={Books} alt="Books" className="h-150 w-full  shrink-0 object-cover" />
                <img src={Electronics} alt="Electronics" className="h-150 w-full shrink-0 object-cover"/>
                <img src={Fashion} alt="Fashion" className="h-150 w-full shrink-0 object-cover"/>
                <img src={home_appliances} alt="home_appliances"className="h-150 w-full shrink-0 object-cover" />
                <img src={Kitchen} alt="Kitchen" className="h-150 w-full shrink-0 object-cover"/>
                <img src={Lunar_new_year} alt="Lunar_new_year" className="h-150 w-full shrink-0 object-cover"/>
            </ul>
            <div className='absolute bg-gradient-to-t from-black to-transparent top-0 left-0 right-0 h-full'></div>
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
                <button onClick={slideLeft} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronLeft size={30} /></button>
                <button onClick={slideRight} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronRight size={30} /></button>
            </div>
        </div>
    );
}

export default ImageSliding;