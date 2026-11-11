import { Search, ShoppingCart, User, Menu,MapPin,Home} from 'lucide-react';
import { useState } from 'react';
function Nav_bar(){
    const[toggle,SetToggle]=useState(false);
    return(
        <>
            <div className='text-default-color bg-gray-900  p-3 fixed top-0 left-0 w-full z-50'>
                <div className=" w-full  flex gap-5  max-sm:justify-between">
                    <div className='flex gap-[2%]'>
                        <Menu onClick={()=>SetToggle(!toggle)} className=' hidden max-sm:block cursor-pointer active:scale-95'/>
                        <img src="/logo.png" className='w-25 h-10'/>
                        <div className='max-sm:hidden'>
                            <p className='text-side-color max-sm:text-xs'>Deliver to</p>
                            <div className='flex'>
                                <MapPin size={25}/>
                                <div className='flex'>
                                    <p>United</p>
                                    <p>Kingdom</p> 
                                </div>
                            </div>  
                        </div>
                    </div>
    
                    <div className='flex items-center flex-1 min-w-0 max-sm:hidden'>
                        <select defaultValue="ALL" className='h-[80%] bg-side-color max-sm:text-xs'>
                            <option value="ALL">All</option>
                        </select>
                        <input type='text' placeholder="Search Amazon" className='bg-default-color px-2 text-black h-[80%] w-full min-w-0'/>
                        <button className='bg-amber-500  h-[80%] p-[1%] max-sm:p-1 max-sm:flex max-sm:items-center'><Search size={25}/></button>
                    </div>
    
                    <div className='flex gap-[5%] w-[25%] max-sm:w-[20%]'>
                        <div className='max-sm:hidden'>
                            <select defaultValue="EN">
                                <option value="EN">EN</option>
                            </select>
                        </div>
                        <div className='max-sm:hidden'>
                            <p className='text-xs text-side-color'>Hello,sing in</p>
                            <p className='text-sm font-bold'>Account & Lists</p>
                        </div>
                        <div className='max-sm:hidden'>
                            <p className='text-xs text-side-color'>Returns</p>
                            <p className='text-sm font-bold'>&Orders</p>
                        </div>
                        <div>
                            <div className='flex gap-[5%]'>
                                <p><ShoppingCart size={25}/></p>
                                <p className='text-sm font-bold'>Cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden text-black max-sm:block relative'>
                    <select className=' absolute bottom-2 text-side-color'>
                            <option defaultChecked>All</option>
                    </select>
                    <input className='bg-white w-full p-1.5 px-10 rounded-sm' placeholder='Search Amazon'/>
                    <Search size={25} className='absolute  top-1 right-2 bg-amber-500 p-1  rounded-sm'/>
                </div>
                
                {/*Sub-nav_bar*/}
                <div className='bg-gray-700 flex gap-[2%] p-[0.5%] max-sm:hidden'>
                    <div className='flex'>
                        <Menu size={25} className='cursor-pointer'/>
                        <p>All</p>
                    </div>
                    <p>Today's Deals</p>
                    <p> Customer Service</p>
                    <p> Registry</p>
                    <p>Gift Card</p>
                    <p>Sell</p>
                </div>
            </div>
            {toggle?(
                <aside className='bg-default-color w-[70%] hidden max-sm:block text-black fixed top-22 left-0 h-full z-50 overflow-y-auto'>
                        <div className='bg-gray-900 w-full h-20 relative p-2 text-white'>
                            <div className='flex gap-2'>
                                <User size={20}/>
                                <p>Sign In</p>
                            </div>
                            
                            <div className=" absolute right-2">
                                <h6>Browse</h6>
                                <p className='text-lg'>Amazon</p>
                            </div>
                        </div>
                        <div className='flex justify-between p-2 border-b-8 border-side-color'>
                            <div>
                                <h5>Amazon Home</h5>
                            </div>
                            <Home/>
                        </div>
                        <div className="flex flex-col gap-3 p-2 border-b-8 border-side-color">
                            <h6>Trending</h6>
                            <p>Best Sellers</p>
                            <p>New Releases</p>
                            <p>Movers & Shakers</p>
                        </div>
                        <div className="flex flex-col gap-3 p-2 border-b-8 border-side-color">
                            <h6>Top Departments</h6>
                            <p>Home</p>
                            <p>Health & Household</p>
                            <p>Books</p>
                            <p>PC</p>
                        </div>
                        <div className="flex flex-col gap-3 p-2 border-b-8 border-side-color">
                            <h6>Shop by Category</h6>
                            <p>Electronics</p>
                            <p>Fashion</p>
                            <p>Books</p>
                            <p>Sports</p>
                        </div>
                </aside>):
                ""
            }
        </>
    );
}
export default Nav_bar;