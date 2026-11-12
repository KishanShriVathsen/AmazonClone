import cardsData from "../../collection";
import {Best_Sellers_in_Sports_Outdoors,clothes} from '../../collection';
import { useRef } from 'react';
import {ChevronRight,ChevronLeft} from 'lucide-react';
import { Link } from 'react-router-dom';
function Cards() {

    const sportsSlider = useRef(null);
    const clothesSlider = useRef(null);//useRef → When you need to remember a value or access a DOM element without triggering a re-render.

    function sports_slideRight(def) {
        if(!def.current) return;
        def.current.scrollBy({
            left: def.current.clientWidth + 15,
            behavior: 'smooth'
        });
    }

    function sports_slideLeft(def) {
        if(!def.current) return;
        def.current.scrollBy({
            left: -def.current.clientWidth -15,
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
                                    <Link to={`/Details/${product.id}`} key={i}>
                                        <img src={product.image} alt={product.name} className="w-35 mx-auto"/>
                                        <span className="text-sm">{product.name}</span>
                                    </Link>
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
    
            <div className="relative bottom-60 mt-5 bg-white w-full" >
                    {
                        Best_Sellers_in_Sports_Outdoors.map((items,index)=>{
                            return(
                                <div className="flex flex-col items-center gap-5 " key={index}>
                                   <h5 className="mt-5">{items.title}</h5>
                                   <div className="flex gap-5 overflow-x-auto overflow-y-hidden " ref={sportsSlider}>
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
                <button  onClick={()=>sports_slideLeft(sportsSlider)} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronLeft  size={30}/></button>{/*When passing arguments to an event handler, use an arrow function.*/}
                <button  onClick={()=>sports_slideRight(sportsSlider)} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronRight size={30}/> </button>
            </div>

            <div className="relative bottom-60 z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] mt-5" >
    
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

            <div className="relative bottom-60 mt-5 bg-white w-full" >
                    {
                        clothes.map((items,index)=>{
                            return(
                                <div className="flex flex-col items-center gap-5"key={index}>
                                   <h5 className="mt-5">{items.title}</h5>
                                   <div className="flex gap-5 overflow-x-auto overflow-y-hidden " ref={clothesSlider}>
                                   {items.products_clothes.map((product,index)=>{
                                    return(
                                        <div className="shrink-0 cursor-pointer" key={index}>
                                        <img src={product.clothes_image} alt={product.name} className="h-50"></img>
                                        <div className="w-full py-2 ml-2">
                                            <p className="text-sm text-red-500"><span className="bg-red-500 px-1 text-white">{product.pre}off</span> Deal</p>
                                            <p className="text-sm text-side-color">{product.price} List Price:{product.List_Price}</p>
                                            <p className="text-xs">This Product Is Best For You</p>
                                        </div>
                                        </div>
                                    );
                                   })}
                                   </div>
                                </div>
                            );
                        })
                    }
            </div> 
            <div className="absolute top-550 flex justify-between w-full px-5 ">
                <button  onClick={() =>sports_slideLeft(clothesSlider)} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronLeft  size={30}/></button>{/*When passing arguments to an event handler, use an arrow function.*/}
                <button  onClick={()=> sports_slideRight(clothesSlider)} className="bg-side-color opacity-70 rounded-full hover:opacity-100 hover:scale-105 hover:bg-white active:scale-95"><ChevronRight size={30}/> </button>
            </div>
        </div>
    );
}

export default Cards;
