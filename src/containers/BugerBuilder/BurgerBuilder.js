import React,{Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import {CHEESE,BACON,SALAD,MEAT,} from "../../constants/BugerIngredients";

const INGREDIENT_PRICES = {
    [SALAD]: 20.12,
    [CHEESE]: 10.56,
    [MEAT]: 30.45,
    [BACON]: 10.20
};

class BurgerBuilder extends Component{
    state={
        ingredients:{
            [SALAD]:0,
            [BACON]:0,
            [CHEESE]:0,
            [MEAT]:0
        },

        totalAmount:100.00,

    };

    removeIngredientHandler=(ingredientName)=>{

        const updatedIngredients = {...this.state.ingredients};
        let oldCount=updatedIngredients[ingredientName];
        if (oldCount <=0){
            return;
        }
        let updatedCount = oldCount - 1;
        updatedIngredients[ingredientName] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[ingredientName];
        const oldPrice = this.state.totalAmount;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalAmount: newPrice, ingredients: updatedIngredients } );

    };

    addIngredientHandler =(ingredientName)=>{

        const updatedIngredients = {...this.state.ingredients};
        let oldCount=updatedIngredients[ingredientName];
        let updatedCount = oldCount + 1;
        updatedIngredients[ingredientName] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[ingredientName];
        const oldPrice = this.state.totalAmount;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalAmount: newPrice, ingredients: updatedIngredients } );
    };
    purchaseHandler = () => {

    };

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredients={this.state.ingredients}
                    ingredientRemoved={(ingredientName)=>this.removeIngredientHandler(ingredientName)}
                    ingredientAdded={(ingredientName)=>this.addIngredientHandler(ingredientName)}
                    totalAmount={this.state.totalAmount}
                    disabled={disabledInfo}
                    ordered={this.p urchaseHandler}
                />
            </Aux>
        )
    }
}

export  default BurgerBuilder;

