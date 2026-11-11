import gameingheadset from "./assets/gamingheadset.png";
import gameingkeyboard from "./assets/gamingkeyboard.png";
import gameingmouse from "./assets/gamingmouse.png";
import gameingchair from "./assets/gamingchair.png";
import PC from "./assets/PC.png";
import HT from "./assets/home_Towal.png";
import dinning from "./assets/dinning.png";
import Kitchen_2 from "./assets/Kitchen_2.png";
import TV from "./assets/TV.png";
import ST from "./assets/studytable.png";
import Grooming_Products_1 from './assets/Grooming_Products_1.png';
import Grooming_Products_2 from './assets/Grooming_Products_2.png';
import Grooming_Products_3 from './assets/Grooming_Products_3.png';
import Grooming_Products_4 from './assets/Grooming_Products_4.png';
import Latest_Devicess from './assets/Latest_Devicess.png';
import Pets_Food from'./assets/Pets_Food.png';
import Fashion_Mart from './assets/Fashion.png';
import Best_Sellers_in_Sports_Outdoors_1 from './assets/Best_Sellers_in_Sports_Outdoors_1.png';
import Best_Sellers_in_Sports_Outdoors_2 from './assets/Best_Sellers_in_Sports_Outdoors_2.png';
import Best_Sellers_in_Sports_Outdoors_3 from './assets/Best_Sellers_in_Sports_Outdoors_3.png';
import Best_Sellers_in_Sports_Outdoors_4 from './assets/Best_Sellers_in_Sports_Outdoors_4.png';
import Best_Sellers_in_Sports_Outdoors_5 from './assets/Best_Sellers_in_Sports_Outdoors_5.png';
import Best_Sellers_in_Sports_Outdoors_6 from './assets/Best_Sellers_in_Sports_Outdoors_6.png';
import Best_Sellers_in_Sports_Outdoors_7 from './assets/Best_Sellers_in_Sports_Outdoors_7.png';
import Best_Sellers_in_Sports_Outdoors_8 from './assets/Best_Sellers_in_Sports_Outdoors_8.png';
import Best_Sellers_in_Sports_Outdoors_9 from './assets/Best_Sellers_in_Sports_Outdoors_9.png';
import Best_Sellers_in_Sports_Outdoors_10 from './assets/Best_Sellers_in_Sports_Outdoors_10.png';
import clothes_1 from './assets/clothes_1.png';
import clothes_2 from './assets/clothes_2.png';
import clothes_3 from './assets/clothes_3.png';
import clothes_4 from './assets/clothes_4.png';
import clothes_5 from './assets/clothes_5.png';
const cardsData = [
    {
        title:"Gaming Accessories",
        products: [
            { image:gameingheadset, name:"Gaming Headset" },
            { image:gameingkeyboard, name:"Gaming Keyboard" },
            { image:gameingmouse, name:"Gaming Mouse" },
            { image:gameingchair, name:"Gaming Chair" }
        ]
    },
    {
        title:"Deals in PCs",
        image:PC
    },
    {
        title:"Home Accessories",
        products: [
            { image:HT, name:"Towel" },
            { image:dinning, name:"Dining Table" },
            { image:Kitchen_2, name:"Kitchen Items" },
            { image:TV, name:"Full Screen TV" }
        ]
    },
    {
        title:"Study Things",
        image:ST
    },
    {
        title:"Grooming Products",
        products: [
            { image:Grooming_Products_1, name:"Richards Slazer" },
            { image:Grooming_Products_2, name:"Hair Pomade 50g" },
            { image:Grooming_Products_3, name:"Grooming Product 3" },
            { image:Grooming_Products_4, name:"Grooming Product 4" }
        ]
    },
    {
        title:"Latest Devices",
        image:Latest_Devicess
    },
    {
        title:"Pets Food",
        image:Pets_Food
    },
    {
        title:"Fashion Mart",
        image:Fashion_Mart
    }
];

export const Best_Sellers_in_Sports_Outdoors=[{
    title:"Best Sellers in Sports & Outdoors",
        products_sport:[
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_1,name:"sport-1"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_2,name:"sport-2"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_3,name:"sport-3"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_4,name:"sport-4"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_5,name:"sport-5"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_6,name:"sport-6"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_7,name:"sport-7"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_8,name:"sport-8"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_9,name:"sport-9"},
            {Sports_Outdoors_image:Best_Sellers_in_Sports_Outdoors_10,name:"sport-10"},
        ]
}]

export const clothes=[{
    title:"Deals Under $25",
    products_clothes:[
        {clothes_image:clothes_1,name:"clothes-1",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_2,name:"clothes-2",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_3,name:"clothes-3",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_4,name:"clothes-4",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_5,name:"clothes-5",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_1,name:"clothes-1",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_2,name:"clothes-2",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_3,name:"clothes-3",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_4,name:"clothes-4",pre:"27%",price:"$14.49",List_Price:"$19.95"},
        {clothes_image:clothes_5,name:"clothes-5",pre:"27%",price:"$14.49",List_Price:"$19.95"}
    ]
}]

export default cardsData;
