import React from "react";
import classes from "./OrderSummary.module.css";

const orderSummary= (props)=>{
    let ingredientsKeys =Object.keys(props.ingredients);
    let list=ingredientsKeys.map((ingKey,index)=>{
        let value=props.ingredients[ingKey];
        let eachPrice=props.ingredientsPrices[ingKey]*value.toFixed(2);
        return(
            <li key={ingKey}>
                <span >{ingKey}</span> : {value+"   ( "+eachPrice+" )"}
            </li>
        )
    });

    return (
        <div className={classes.OrderSummary}>
            <h3>Order Summary  </h3>
            <hr style={{color:"white"}}/>
            <br/>
            <p>Your Order :</p>
           <ul>
               {list}
           </ul>
            <label>Total Price : {props.totalAmount.toFixed(2)}</label>
            <p>Continue to checkout? </p>

            <button className={[classes.Button,classes.Danger].join(" ")} onClick={props.cancelled}>CANCEL</button>
            <button className={[classes.Button,classes.Success].join(" ")} onClick={props.continue}>CONTINUE</button>

        </div>
    )
};

export default orderSummary;