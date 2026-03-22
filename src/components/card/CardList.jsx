import Carditem from "./Carditem";
import luffyImg from '../../assets/images/luffy.webp';
import sanjiImg from '../../assets/images/sanji.jpg';
import zoroImg from '../../assets/images/zoro.webp';
import robinImg from '../../assets/images/robin.webp';
import classes from './CardList.module.css';

export default function CardList(){
    return (
    <div className={classes.listContainer}>
    <Carditem name="Monkey D Luffy" luffyImg={luffyImg} 
    email="luffy@example.com" 
    location="Tokyo, Japan"  
    experience="2 years"
    role="Frontend Developer"
    />
    <Carditem name="Vinsmoke Sanji" 
    luffyImg={sanjiImg} 
    email="sanji@example.com"
    location="Nagoya, Japan"
    experience="3 years"
    role="Backend Developer"
    />
    <Carditem name="Roronoa Zoro" 
    luffyImg={zoroImg} 
    email="zoro@example.com" 
    location="Kyoto, Japan" 
    experience="4 years"
    role="Cyber Security"
    />
    <Carditem name="Niko Robin" 
    luffyImg={robinImg} 
    email="robin@example.com" 
    location="Osaka, Japan" 
    experience="1 years"
    role="Graphic Designer"
    />
    </div>
    );
}