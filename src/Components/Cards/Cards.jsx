import cardsData from "../../collection";
import {Best_Sellers_in_Sports_Outdoors} from '../../collection';
import { useRef } from 'react';
import {ChevronRight,ChevronLeft} from 'lucide-react';
function Cards() {

    const slider = useRef(null);//useRef → When you need to remember a value or access a DOM element without triggering a re-render.

    function slideRight() {
        if(!slider.current) return;
        slider.current.scrollBy({
            left: slider.current.clientWidth + 15,
            behavior: 'smooth'
        });
    }

    function slideLeft() {
        if(!slider.current) return;
        slider.current.scrollBy({
            left: -slider.current.clientWidth -15,
            behavior: 'smooth'
        });
    }
    return (
        <div className="relative">
            <div className="relative bottom-60 z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%]" >
    
                {cardsData.map((items, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg opacity-90 text-center">
                        <h5 className="font-bold text-lg mb-3">
                            {items.title}
                        </h5>
    
                        {/* Multiple Products */}
                        {items.products && (
                            <div className="grid grid-cols-2 gap-3 h-[80%]">
                                {items.products.map((product, i) => (
                                    <div key={i}>
                                        <img src={product.image} alt={product.name} className="w-35 mx-auto"/>
                                        <a href="#" className="text-sm">{product.name}</a>
                                    </div>
                                ))}
                            </div>
                        )}
    
                        {/* Single Large Image */}
                        {items.image && (
                            <div className="w-full h-[80%] flex  justify-center items-center">
                                <img src={items.image} alt={items.title} className="w-full"/>
                            </div>
                        )}
    
                        <a href="/" className="text-blue-400 block mt-3">
                            Show More
                        </a>
                    </div>
                ))}
                
            </div>
    
            <div className="relative bottom-60 mt-5 bg-white" >
                    {
                        Best_Sellers_in_Sports_Outdoors.map((items,index)=>{
                            return(
                                <div className="flex flex-col items-center gap-5 " key={index}>
                                   <h5 className="mt-5">{items.title}</h5>
                                   <div className="flex gap-5 overflow-x-auto overflow-y-hidden " ref={slider}>
                                   {items.products_sport.map((product,index)=>{
                                    return(
                                        <div className="shrink-0 m-7 cursor-pointer" key={index}>
                                        <img src={product.Sports_Outdoors_image} alt={product.name} className="h-50"></img>
                                        </div>
                                    );
                                   })}
                                   </div>
                                </div>
                            );
                        })
                    }
            </div> 
            <div className="absolute top-200 flex justify-between w-full px-5 ">
                <button  onClick={slideLeft} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronLeft  size={30}/></button>
                <button  onClick={slideRight} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronRight size={30}/> </button>
            </div>
        </div>
    );
}

export default Cards;
