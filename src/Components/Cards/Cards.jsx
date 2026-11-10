import cardsData from "../../collection";
import {Best_Sellers_in_Sports_Outdoors} from '../../collection';
function Cards() {
    return (
        <>
            <div className="relative bottom-60 z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%]">
    
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
    
            <div className="relative bottom-60 mt-5 bg-white">
                    {
                        Best_Sellers_in_Sports_Outdoors.map((items,index)=>{
                            return(
                                <div className="flex flex-col items-center gap-5 " key={index}>
                                   <h5 className="mt-5">{items.title}</h5>
                                   <div className="flex gap-5 overflow-auto overflow-y-hidden">
                                   {items.products_sport.map((product,index)=>{
                                    return(
                                        <div className="shrink-0 m-5" key={index}>
                                        <img src={product.Sports_Outdoors_image} className="h-50"></img>
                                        </div>
                                    );
                                   })}
                                   </div>
                                </div>
                            );
                        })
                    }
            </div>
        </>
    );
}

export default Cards;
