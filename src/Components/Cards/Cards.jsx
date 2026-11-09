import gameingheadset from "../../assets/gamingheadset.png";
import gameingkeyboard from "../../assets/gamingkeyboard.png";
import gameingmouse from "../../assets/gamingmouse.png";
import gameingchair from "../../assets/gamingchair.png";
import PC from "../../assets/PC.png";
import HT from "../../assets/home_Towal.png";
import dinning from "../../assets/dinning.png";
import Kitchen_2 from "../../assets/Kitchen_2.png";
import TV from "../../assets/TV.png";
import ST from "../../assets/studytable.png";
function Cards(){
    return(
        <div className="relative z-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[95%] ">
            <div className="bg-white p-4 rounded-lg opacity-90 text-center">
                <h5>Gaming Accessories</h5>
                <div className="grid grid-cols-2 gap-3">
                    <img src={gameingheadset} alt=""  className="w-35"/>
                    <img src={gameingkeyboard} alt=""  className="w-35"/>
                    <img src={gameingmouse} alt=""  className="w-35"/>
                    <img src={gameingchair} alt="" className="w-35" />
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg opacity-90 text-center">
                <h5>Deals in PCs</h5>
                <div className="w-full h-full ">
                    <img src={PC} alt=""  className="w-full"/>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg opacity-90 text-center">
                <h5>Home Accessories</h5>
                <div className="grid grid-cols-2 gap-3 ">
                    <img src={HT} alt=""  className="w-35"/>
                    <img src={dinning} alt=""  className="w-35"/>
                    <img src={Kitchen_2} alt=""  className="w-35"/>
                    <img src={TV} alt="" className="w-35" />
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg opacity-90 text-center">
                <h5>study things</h5>
                <div className="w-full h-full ">
                    <img src={ST} alt=""  className="w-full"/>
                </div>
            </div>
        </div>
    );
}

export default Cards;