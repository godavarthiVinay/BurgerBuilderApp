import React from 'react';
import PropTypes from 'prop-types';
import {CHEESE,BACON,SALAD,MEAT,BREADBOTTOM,BREADTOP} from "../../../constants/BugerIngredients";
import classes from "./BugerIngredient.module.css";

const bugerIngredient =(props)=>{
    let ingredient=null;

    switch (props.type){
        case  BREADTOP:
            ingredient=(
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;

        case BREADBOTTOM:
            ingredient=<div className={classes.BreadBottom}></div>
            break;

        case SALAD:
            ingredient=<div className={classes.Salad}></div>
            break;
        case BACON:
            ingredient=<div className={classes.Bacon}></div>
            break;
        case CHEESE:
            ingredient=<div className={classes.Cheese}></div>
            break;
        case MEAT:
            ingredient=<div className={classes.Meat}></div>
            break;

        default:
            ingredient = null;

    }
    return ingredient;
};

bugerIngredient.propTypes={
    type: PropTypes.string.isRequired
} ;

export default bugerIngredient;