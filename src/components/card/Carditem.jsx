import luffyImg from '../../assets/images/luffy.webp';
import classes from './Carditem.module.css';

export default function Carditem(){
    return(
        <div className={classes.card}>
            <div className={classes.header}>
                <img className={classes.avatar} src={luffyImg} alt='profile avatar'/>

                <div className={classes.userInfo}>
                    <h2 className={classes.name}>Monkey D Luffy</h2>
                    <p className={classes.role}>Frontend developer</p>
                </div>
            </div>

            <div className={classes.details}>
                <div className={classes.detailItem}>
                    <spam className={classes.label}>Email:</spam>
                    <spam>luffy@example.com</spam>
                </div>
                <div className={classes.detailItem}>
                    <spam className={classes.level}>Location:</spam>
                    <spam>Kathmandu, Nepal</spam>
                </div>
                <div className={classes.detailItem}>
                    <spam className={classes.label}>Experience:</spam>
                    <spam>3 Years</spam>
                </div>
            </div>
            <button className={classes.button}>View More</button>
        </div>
    );
}