import React from "react";
import classes from"../product/product.module.css";
import Calculate from "./Calculate";
 
function Productcard(props){
    
    return(
        <>
        <div className={classes.Card}>
            <div className={ classes.PreviewWrapper}>

            <img className={classes.Productimage} src={props.thumbnail} alt=""/>
            <div className={classes.WishListWrapper}>
                  <p className={classes.WishlistButton} onClick={()=>props.WishListClick(props.pos)}>
                    {
                        props.isWishListed ?(
                            <>
                              <i className={"fas fa-heart"}></i>
                              WishListed
                            </>
                        ):(
                            <>
                              <i className={"far fa-heart"}> </i>wishlist
                            </>
                        )
                        
                        
                    }

                  </p>
            </div>
            </div>
            <div>
                <h3 className={classes.Brand}>{props.brand}</h3>
                <h3 className={classes.ProductName}>{props.title}</h3>
               <div className={classes.PriceRapper}>
                   <Calculate props={props}/>
                  <p className={classes.MRP}>Rs {props.mrp}</p>
                  <p className={classes.Discount}>( {props.discount}% OFF)</p>
                  <p>{props.isWishListed}</p>
               </div>
            </div>      
        </div>
        
        </>
    )
}
export {Productcard};