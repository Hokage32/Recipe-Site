import React from 'react'
import AdBanner from './AdBanner'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipeCard from '../RecipeCard'
import {BiSearchAlt} from 'react-icons/bi'

const HomeScreen = () => {  
  
  const [info, setInfo]= useState([])
  const [search, setSearch]= useState("")

  useEffect( () => {
    axios
    .get("https://recipes.devmountain.com/recipes")
    .then((res) => {
      
      setInfo(res.data)
      
    })
  },[])
  

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }


  const recipeDisplay = info.filter((recipe) => {
    let recipeName = recipe.recipe_name.toLowerCase()
    let recipeSearch = search.toLowerCase()
    return recipeName.includes(recipeSearch)
  })
  .map((recipe) => {
    return <RecipeCard recipe={recipe}/>

  })
  
  return (
    <div>
      <AdBanner />
      <div className='search'>
      <div className='search-bar'>
        <BiSearchAlt size='2em' color= "#DA7653"/>
      <input 
      
      type='text'
      value={search}
      onChange={handleSearch}
      placeholder='Search for a recipe!'
       />
       </div>
       </div>
       <div recipe-container>

      {recipeDisplay}
      </div>
    </div>
  )
}

export default HomeScreen