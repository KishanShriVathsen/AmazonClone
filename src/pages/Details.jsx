import { useParams } from "react-router-dom";
import cardsData from "../collection";
import Rating from '../assets/Rating.png';

function Details() {
    const { id } = useParams();

    const product = cardsData
        .flatMap((items) => items.products || [])
        .find((item) => item.id === Number(id));

    if (!product) {
        return <h1>Product not found!</h1>;
    }
    console.log("Details page updated!");

    return (
        <div className="p-5 grid grid-cols-[1fr_2fr_2fr]">
            <div className="flex  border justify-between">
                <div className="flex flex-col gap-5">
                    <img src={product.image} alt={product.name} className="w-10 border rounded-sm "/>
                    <img src={product.image} alt={product.name} className="w-10 border rounded-sm "/>
                    <img src={product.image} alt={product.name} className="w-10 border rounded-sm "/>
                    <img src={product.image} alt={product.name} className="w-10 border rounded-sm "/>
                    <img src={product.image} alt={product.name} className="w-10 border rounded-sm "/>
                </div>
                <div>
                    <img src={product.image} alt={product.name} className="w-70"/>
                </div>
            </div>
            <div className="border">
                <div className="border-b border-gray-500">
                    <p className="font-medium">{product.description}</p>
                    <p className="text-blue-400 text-xs ">{product.suggestion}</p>
                    <div className="flex">
                        <p>{product.rating}</p>
                        <img src={Rating} className="w-15"/>
                    </div>
                    <p className="text-blue-400 text-xs ">{product.rank}</p>
                    <p className="text-xs">{product.selling_info}</p>
                </div>
                <div>
                    <div>
                        <div className="flex gap-3">
                            <p className="text-red-500">{product.discount_price}</p>
                            <p>${product.currect_price}</p>
                        </div>
                        <p>List Price:{product.list_price}</p>
                        <p>Get Fast, Free Shipping with <span className="text-blue-400">Amazon Prime</span></p>
                        <p className="text-blue-400">FREE Returns</p>
                        <p className="text-blue-400">Join Prime to buy this item at {product.prime_price}</p>
                        <p className="text-sm">Available at a lower price from <span className="text-blue-400">other sellers</span> that may not Offer free Prime shipping.</p>
                    </div>
                    <div>
                        <p>color:blue</p>
                        <div>
                            <div className="flex gap-5">
                               <div className="border px-5 rounded-sm">
                                   <p>Blue</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </div>
                               
                               <div className="border px-5 rounded-sm">
                                   <p>Red</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </div>
                               <div className="border px-5 rounded-sm">
                                   <p>Black</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </div>
                               <div className="border px-5 rounded-sm">
                                   <p>Green</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </div>
                                <div className="border px-5 rounded-sm">
                                    <p>White</p>
                                    <img src={product.image} alt={product.name} className="w-10 "/>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <ul>
                                    <li className="font-medium">Brand</li>
                                    <li className="font-medium">Model Name</li>
                                    <li className="font-medium">color</li>
                                    <li className="font-medium">Form Factor</li>
                                    <li className="font-medium">Connectivity Technology</li>
                                </ul>

                                <ul>
                                    <li>{product.brand}</li>
                                    <li>G9000</li>
                                    <li>blue</li>
                                    <li>Over Ear</li>
                                    <li>Wired</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            
        </div>
    );
}

export default Details;