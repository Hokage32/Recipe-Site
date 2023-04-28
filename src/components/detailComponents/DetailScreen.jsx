import React from 'react'
import salmon from "../../assets/salmon.jpg"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const DetailScreen = () => {  

  const [recipe, setRecipe] = useState([])
  const {id} = useParams()



  useEffect(()=> {
    axios
    .get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      console.log(res.data)
      setRecipe(res.data)
    })

  }, [])
  
  const ingredientsDisplay = recipe.ingredients && recipe.ingredients.map((i)=>{
    return <h4>{i.quantity}{i.ingredient}</h4>
  })
  
  return (
    
  <div >
    <div style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${recipe.image_url})`,
          height: '500px',
        backgroundSize: "cover",
        
      }} >

   
      <div>


      </div>

</div>



<div className='detail-card'>
  <div className='detail-recipe'>
  <h1>{recipe.recipe_name}</h1>
  <h4>Prep Time: {recipe.prep_time}</h4>
  <h4>Cook Time: {recipe.cook_time}</h4>
  <h4>Serves: {recipe.serves}</h4>

  <h1>Ingredients</h1>
  {ingredientsDisplay}
  </div>

  <div className='detail-instructions'>
    <h1>Instructions</h1>
    <p style={{whiteSpace: "pre-wrap"}}>
      {recipe.instructions && JSON.parse(recipe.instructions)}
    </p>
  </div>
</div>

</div>
  );
};

export default DetailScreen;
