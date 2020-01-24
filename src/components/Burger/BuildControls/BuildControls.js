import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";


const buildControls =(props)=>{
    let indegrientsKeys=Object.keys(props.ingredients);
    let OrderButtondisabled=0;
    let ingredientsButtons=indegrientsKeys.map(InKey => {
        OrderButtondisabled=OrderButtondisabled+props.ingredients[InKey];
        return (<BuildControl
            key ={InKey}
            label={InKey}
            removeIngredient={()=> props.ingredientRemoved(InKey)}
            addedIngredient={()=> props.ingredientAdded(InKey)}
            disabled={props.disabled[InKey]}
        />)
    });
    OrderButtondisabled= OrderButtondisabled>0;
    return (
        <div className={classes.BuildControls} >
            <p>Current Price:<strong>{props.totalAmount.toFixed(2)}</strong></p>
            {ingredientsButtons}
            <button className={classes.OrderButton} onClick={props.ordered} disabled={!OrderButtondisabled} > Order Now</button>
        </div>
    )

};

export default buildControls;