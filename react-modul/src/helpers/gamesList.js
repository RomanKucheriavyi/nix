import DoorsImg from "../assets/images/guess-door.jpg";
import CoinImg from "../assets/images/flip-coin.jpg";
import NumbersImg from "../assets/images/guess-num.jpg";

const GAMES = [
    {
        label:"Вгадай двері",
        imgSrc:DoorsImg,
        link:"/guess-door",
    },
    {
        label:"Монетка",
        imgSrc:CoinImg,
        link:"/coin-flip",
    },
    {
        label:"Вгадай число",
        imgSrc:NumbersImg,
        link:"/guess-num",
    }
];

export default GAMES;