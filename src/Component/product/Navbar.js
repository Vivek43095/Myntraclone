import classes from"../product/Navbar.module.css";
function Navbar ({totalWishListCount}){
    console.log(totalWishListCount);
    return(
        <nav className={classes.Navbar}>
           <h3 className={classes.heading}>Myntra Clothing</h3>
           <i className={`${classes.icon} fa fa-heart `}><sup>{totalWishListCount}</sup></i>
        
        </nav>
    )
}
export default Navbar;