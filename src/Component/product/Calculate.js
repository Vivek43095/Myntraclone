import classes from"../product/product.module.css";
function Calculate ({props}){
    return(
        <p className={classes.Price}>Rs {props.mrp - (props.mrp*props.discount)/100}</p>
    )
}
export default Calculate;