import React,{Component} from 'react';
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        purchase:false

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

        this.setState({purchase:true});
    };
    purchaseCancelHandler=()=>{
        this.setState({purchase:false});
    };
    onPurchaseContinueHandler =()=>{

        alert('You continue!');
        let ingredients={...this.state.ingredients};
        Object.keys(this.state.ingredients).map((ingKey,ind)=>{
            ingredients[ingKey]=0;
        });

        this.setState({purchase:false,totalAmount:0.00,ingredients:ingredients});


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
                <Modal show={this.state.purchase} backDropClicked={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredientsPrices={INGREDIENT_PRICES}
                        ingredients={this.state.ingredients}
                        totalAmount={this.state.totalAmount}
                        cancelled={this.purchaseCancelHandler}
                        continue={this.onPurchaseContinueHandler}
                    />
                    </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredients={this.state.ingredients}
                    ingredientRemoved={(ingredientName)=>this.removeIngredientHandler(ingredientName)}
                    ingredientAdded={(ingredientName)=>this.addIngredientHandler(ingredientName)}
                    totalAmount={this.state.totalAmount}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export  default BurgerBuilder;

