import { useParams } from "react-router-dom";
import cardsData from "../collection";
import Rating from '../assets/Rating.png';
import { MapPin } from "lucide-react";

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
        <div className="p-5 grid grid-cols-[1fr_2.5fr_1fr]">
            <div className="flex justify-between">
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
            <div className="p-2">
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
                        <p className="text-blue-400">Join Prime to buy this item at $   {product.prime_price}</p>
                        <p className="text-sm">Available at a lower price from <span className="text-blue-400">other sellers</span> that may not Offer free Prime shipping.</p>
                    </div>
                    <div className="border-b">
                        <p>color:blue</p>
                        <div>
                            <div className="flex gap-5">
                               <button className="border px-5 rounded-sm">
                                   <p>Blue</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </button>
                               
                               <button className="border px-5 rounded-sm">
                                   <p>Red</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </button>
                               <button className="border px-5 rounded-sm">
                                   <p>Black</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </button>
                               <button className="border px-5 rounded-sm">
                                   <p>Green</p>
                                   <img src={product.image} alt={product.name} className="w-10 "/>
                               </button>
                                <button className="border px-5 rounded-sm">
                                    <p>White</p>
                                    <img src={product.image} alt={product.name} className="w-10 "/>
                                </button>
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
                    <d>
                        <h5>About This Item</h5>
                        <ul className="flex flex-col gap-5 list-disc p-5">
                            <li>Immersive Audio Experience:Enjoy clear and detailed audio with powerful bass that brings your games to life. Hear important in-game sounds and enjoy a more engaging gaming experience.</li>
                            
                            <li>Comfortable Design:Designed with soft cushioned ear cups and an adjustable headband to provide a comfortable fit during long gaming sessions.</li>
                            
                            <li>Clear Communication:The built-in microphone helps you communicate clearly with teammates during multiplayer games, online meetings, and voice chats.</li>
                            
                            <li>Multi-Purpose Usage:Perfect for PC gaming, online classes, music, movies, and everyday entertainment. Its versatile design makes it suitable for both gaming and regular use.</li>
                        </ul>
                    </d>
                </div>
            </div>
            <div className="p-3">
                <div className="border rounded-sm p-5">
                    <h5>Buy New:</h5>
                    <p>${product.currect_price}</p>
                    <ul className="flex flex-col gap-5">
                        <li>Get Fast, Free Shipping with<span className="text-blue-400">Amazon Prime FREE Returns</span> </li>
                        <li><span className="text-blue-400">FREE delivery</span> January 27 on orders shipped by Amazon over $35</li>
                        <li>Or fastest delivery Tomorrow. January 23. Order within <span className="text-blue-400">10 hrs 56 mins</span></li>
                        <li className="text-blue-400 flex items-center"><MapPin size={20}/>Deliver to New York 10014</li>
                    </ul>
                    <p className="text-2xl text-green-500">In Stock</p>
                    <div className="flex flex-col gap-5">
                       <select className="bg-gray-200 w-[60%] p-2 border border-gray-500 rounded-sm">
                        <option>Quantity:1</option>
                    </select>
                    <button className="bg-amber-400 p-3 rounded-full">Add To Card</button>
                    <button className="bg-amber-500 p-3 rounded-full">Buy Now</button> 
                    </div>
                    <p className="text-side-color text-sm">Ships from Amazon</p>

                    <table className="w-full border-collapse text-left text-side-color text-xs border-b">
                        <tbody>
                            <tr>
                                <th className="p-2">Sold by</th>
                                <td className="p-2">Bengoo Inc</td>
                            </tr>
                    
                            <tr>
                                <th className="p-2">Returns</th>
                                <td className="p-2">Eligible for Return, Refund or Replacement within 30 days</td>
                            </tr>
                    
                            <tr>
                                <th className="p-2">Payment</th>
                                <td className="p-2">Secure transaction</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="border w-full rounded-sm mt-3">Add To Card</button>
                </div>
            </div>
            
        </div>
    );
}

export default Details;