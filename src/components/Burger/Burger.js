import React from 'react'
import classes from './Burger.module.css';
import {BREADBOTTOM,BREADTOP} from "../../constants/BugerIngredients";
import BurgerIngredient from "./BugerIngredient/BurgerIngredient";

const burger =(props)=>{

    const burgerIngredients={...props.ingredients};


    let keys=Object.keys(burgerIngredients);
    let updatedIngrediants=keys.map((ingredentKey,index)=>{

        let value=burgerIngredients[ingredentKey];
        return [...Array(value)].map((_,i)=>{
            return (<BurgerIngredient key={ingredentKey + i} type={ingredentKey} />)
        });
    });

    let transformedIngrediants =updatedIngrediants.reduce((prev,current)=>{
        return prev.concat(current)
    },[]);
    if (transformedIngrediants.length === 0) {
        transformedIngrediants = <p>Please start adding ingredients!</p>;
    }


    return(
        <div className={classes.Burger}>
            <BurgerIngredient type={BREADTOP}/>
            {transformedIngrediants}
            <BurgerIngredient type={BREADBOTTOM}/>
        </div>

        )

};
export default burger;