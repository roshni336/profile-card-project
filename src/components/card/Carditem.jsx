import Card from './Card';
import classes from './Carditem.module.css';

export default function Carditem(props){
// export default function Carditem({
//     name,
//     avatarImg,
//     email,
//     location,
//     experience,
//     role,
// }){
    return(
        <Card>        
            <div className={classes.header}>
                <img className={classes.avatar} 
                src={props.luffyImg} 
                alt='profile avatar'/>

                <div className={classes.userInfo}>
                    <h2 className={classes.name}>{props.name}</h2>
                    <p className={classes.role}>{props.role}</p>
                </div>
            </div>

            <div className={classes.details}>
                <div className={classes.detailItem}>
                    <span className={classes.label}>Email:</span>
                    <span>{props.email}</span>
                </div>
                <div className={classes.detailItem}>
                    <span className={classes.label}>Location:</span>
                    <span>{props.location}</span>
                </div>
                <div className={classes.detailItem}>
                    <span className={classes.label}>Experience:</span>
                    <span>{props.experience}</span>
                </div>
            </div>
            <button className={classes.button}>View More</button>
        </Card>
    );
}