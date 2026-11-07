import { Search, ShoppingCart, User, Menu,MapPin} from 'lucide-react';
function Nav_bar(){
    return(
        <div className='text-default-color'>
            <div className="bg-gray-900 w-full  flex gap-5 p-3  max-sm:justify-between">
                <div className='flex gap-[2%]'>
                    <p className=' hidden max-sm:block'><Menu/></p>
                    <h1 className='max-sm:text-lg'>Amazon</h1>
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

                <div className='flex items-center flex-1 min-w-0'>
                    <select className='h-[80%] bg-side-color max-sm:text-xs'>
                        <option defaultChecked >All</option>
                    </select>
                    <input type='text' placeholder="Search Amazon" className='bg-default-color h-[80%] w-full min-w-0'/>
                    <button className='bg-amber-300 h-[80%] p-[1%] max-sm:p-1 max-sm:flex max-sm:items-center'><Search size={25}/></button>
                </div>

                <div className='flex gap-[5%] w-[25%] max-sm:w-[20%]'>
                    <div className='max-sm:hidden'>
                        <select defaultValue="EN">
                            <option value="EN">EN</option>
                        </select>
                    </div>
                    <div className='max-sm:hidden'>
                        <p className='text-xs text-side-color'>Hello sing in</p>
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
            {/*Sub-nav_bar*/}
            <div className='bg-gray-700 flex gap-[2%] p-[0.5%] max-sm:hidden'>
                <div className='flex'>
                    <p><Menu size={25}/></p>
                    <p>All</p>
                </div>
                <p>Today's Deals</p>
                <p> Customer Service</p>
                <p> Registry</p>
                <p>Gift Card</p>
                <p>Sell</p>
            </div>
        </div>
    );
}
export default Nav_bar;