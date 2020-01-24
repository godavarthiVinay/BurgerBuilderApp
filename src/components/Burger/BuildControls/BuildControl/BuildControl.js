import React from "react";
import classes from "./BuildControl.module.css"


const buildControl =(props)=>{
    console.log(props);
    return (
        <div className={classes.BuildControl}>
            <label className={classes.Label}>{props.label} : </label>
            <button  className={classes.Less} onClick={props.removeIngredient} disabled={props.disabled} > Less </button>
            <button className={classes.More}  onClick={props.addedIngredient} > More </button>
        </div>
    )

};

export default buildControl;
