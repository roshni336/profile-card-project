import classes from './Footer.module.css';
function Footer(){
    const date = new Date();
    const currentYear = date.getFullYear();
  //const copyrightYear = currentYear;  
  return <footer className={classes.footer}>Copyright {currentYear}</footer>;
}
export default Footer;