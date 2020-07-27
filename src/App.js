import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
  const APP_ID = '3b250df5'
  const APP_KEY = '1d0f691ac5f169148aab4be604f3971c'

  const [recipes, setRecipe] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect( () =>{
    getRecipe();
  },[query])

  const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipe(data.hits)

  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const updateQuery = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
     <form className ="search-form" onSubmit = {updateQuery}>
       <input className ="search-bar" value ={search} onChange = {updateSearch}></input>
       <button type ="submit" className ="search-button" >Search</button>
     </form>
     <div className ="recipe">
     {recipes.map(recipe => {
       return <Recipe tittle = {recipe.recipe.label} 
              ingredients = {recipe.recipe.ingredients}
              calories = {recipe.recipe.calories}
              image = {recipe.recipe.image}
              key = {recipe.recipe.label}/>
     })}
     </div>
    </div>
  );
}

export default App;
