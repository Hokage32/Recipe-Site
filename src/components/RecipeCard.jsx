import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe}) => {

    const navigate = useNavigate()


    const handleClick = () => {
        navigate(`/recipes/${recipe.recipe_id}`)
    }


  return (
    <div className='recipe-card'>
        <div>
        <img src={recipe.image_url} alt="" />
        <h1>{recipe.recipe_name}</h1>

        <button onClick={handleClick} >See Recipe</button>
        </div>

    </div>
  )
}

export default RecipeCard