import React from 'react';

import classes from './Burger.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{

  //transforming an object of key value pairs into an array of burger ingredients
  //keys return us an array of ingredients keys
    let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {

//transform the given string array into an array with as many elements as we have ingredients for a given ingredient

     return[...Array(props.ingredients[igKey])].map((_,i)=> {

      return <BurgerIngredient key = {igKey + i} type={igKey} />;

     });

      })
      .reduce((arr,el) => {

          return arr.concat(el)

      }, []);

      if(transformedIngredients.length === 0) {
          transformedIngredients = <p>Please start adding ingredients!!</p>;
      }


   return (
     <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
          {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />

     </div>
   );

};

export default burger;
