import Books from '../../assets/Books.png';
import Electronics from '../../assets/Electronics.png';
import Fashion from '../../assets/Fashion.png';
import home_appliances from '../../assets/home_appliances.png';
import Kitchen from '../../assets/Kitchen.png';
import Lunar_new_year from '../../assets/Lunar_new_year.png';
function ImageSliding(){
    return(
        <div>
            <ul className="flex">
                <img src={Books} alt="Books" className="h-150 w-full" />
                <img src={Electronics} alt="Electronics" className="h-150 w-full"/>
                <img src={Fashion} alt="Fashion" className="h-150 w-full"/>
                <img src={home_appliances} alt="home_appliances"className="h-150 w-full" />
                <img src={Kitchen} alt="Kitchen" className="h-150 w-full"/>
                <img src={Lunar_new_year} alt="Lunar_new_year" className="h-150 w-full"/>
            </ul>
        </div>
    );
}

export default ImageSliding;