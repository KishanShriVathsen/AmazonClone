import gameingheadset from "../../assets/gamingheadset.png";
import gameingkeyboard from "../../assets/gamingkeyboard.png";
import gameingmouse from "../../assets/gamingmouse.png";
import gameingchair from "../../assets/gamingchair.png";
function Cards(){
    return(
        <div className="grid grid-cols-4">
            <div>
                <h5>Gaming Accessories</h5>
                <div className="grid grid-cols-2 ">
                    <img src={gameingheadset} alt=""  className="w-50"/>
                    <img src={gameingkeyboard} alt=""  className="w-50"/>
                    <img src={gameingmouse} alt=""  className="w-50"/>
                    <img src={gameingchair} alt="" className="w-50" />
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Cards;