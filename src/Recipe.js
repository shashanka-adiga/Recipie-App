import React from 'react';
import style from './recipe.module.css';

const Recipe = ({tittle, ingredients, calories, image}) =>{
    return(
        <div className = {style.recipe}> 
            <h1>{tittle}</h1>
            <ol>
            {ingredients.map(ingredient =>{
               return <li><p>{ingredient.text}</p></li>
            })}
            </ol>
            <h3>Calories:{calories}</h3>
            <img className ={style.image} src = {image} alt ={tittle}></img>
        </div>
    );
}

export default Recipe;