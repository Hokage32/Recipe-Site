import React from "react";
import { useState, useEffect } from "react";
import { useFormik,Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {

  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  let initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: ""
  }

  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}] )
    setName("")
    setQuantity("")
  }

  const onSubmit = (values) => {
    
    values.ingredients = ingredients
    console.log(values)
axios.post("https://recipes.devmountain.com/recipes", values)
.then((res) => {
  console.log(res.data)
})
.catch((err) => {
  console.log(err)
})

  }

  

  return (
    <section>
      <div className="tell-us">
      <h1>Tell us about your Recipe!</h1>
      </div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>{({values,handleChange,handleSubmit})=> {
        return (

        <form onSubmit={handleSubmit}>
      <div className="form">

      <div className="recipe-divs">
      <input type="text" placeholder="Recipe Name"  value={values.recipeName} onChange={handleChange} name="recipeName"/>

      <input type="text" placeholder="Image URL" value={values.imageURL} onChange={handleChange} name="imageURL"/>
      </div>


      <div className="recipe-divs">
         <label htmlFor="cook">Cook</label>
      <input type="radio" name="type"  value="Cook" id="cook" onChange={handleChange}/>

          <label htmlFor="bake">Bake</label>
      <input type="radio" name="type" value="Bake" id="bake" onChange={handleChange}/>

          <label htmlFor="drink">Drink</label>
      <input type="radio" name="type" value="Drink"id="drink" onChange={handleChange}/>
      </div>

      <div className="recipe-divs">
      <input className="input" type="text" placeholder="Prep Time" value={values.prepTime} onChange={handleChange} name="prepTime"/>

      <input className="input" type="text" placeholder="Cook Time" value={values.cookTime} onChange={handleChange} name="cookTime"/>

      <input className="input" type="text" placeholder="Serves" value={values.serves} onChange={handleChange} name="serves"/>
      </div>

      <div className="ingredients">
      <input type="text" placeholder="Ingredients" value={name} onChange={(e) => setName(e.target.value)}/>

      <input type="text" placeholder="Quantitiy" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
      </div>

      <button type="button" onClick={addIngredient}>Add Ingredient</button>

      <textarea name="instructions" id="" cols="30" rows="10" placeholder="Instructions" value={values.instructions} onChange={handleChange}></textarea> 

      

      <button type="submit" onSubmit={handleSubmit}>Submit</button>
      


      </div>
      </form>)
      
      }}</Formik>
     
    </section>
  );
};

export default NewRecipeScreen;
