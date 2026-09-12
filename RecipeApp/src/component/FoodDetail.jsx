
import styles from "./fooddetail.module.css"
import { useEffect, useState } from "react";
export default function FoodDetail({foodId}){
    const [food,setFood]=useState({})

    const [isLoading,setIsLoading]=useState(true)

    const URL= `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY="5896f35d22304654873a8c4a5758a719";
    useEffect(()=>{
          async  function fetchFood(){
                const res=await fetch(`${URL}?apiKey=${API_KEY}`)
                const data= await res.json()
                console.log(data);
                setFood(data)     
                setIsLoading(false)            
            }
            fetchFood()
    
        },[foodId])
    
    return(
        <div>
        <div className={styles.recipeCard}>
       <h1 className={styles.recipeName}> {food.title} </h1>
        <img className={styles.recipeImg} src={food.image} />
        
        <div className={styles.recipeDtl}>
        <span>
            <strong> ⏱️ {food.readyInMinutes} Minutes</strong>
        </span>
         <span>
            <strong> Serves {food.servings} </strong>
        </span>
         <span>
            {food.vegetarian?" 🥕 Vegetarian":" 🥩 Non-Vegetarian"}
        </span>
         <span>
            {food.vegan?"  Vegan":"  Non-Vegan"}
        </span>
        </div>
        <div>
           $ <span>{food.pricePerServing/100 } Per Head</span>
        </div>
        <h2>Ingredient</h2>
            {food.extendedIngredients?.map((item)=>(<div>
               <img  src={`https://api.spoonacular.com/cdn/ingredients_100x100/`+item.image} alt=""/>
                <h3>{item.name}</h3>
                <h3>{item.amount} {item.unit}</h3>
                
                </div>))}
            <h2>Instructions</h2>
            <div className={styles.recipe}>
            <ol>
            {isLoading?(
                <p>Loading...</p>
            ):(
                 food.analyzedInstructions[0].steps.map((step)=>
                <li>{step.step}</li>))}
            
         </ol>
        </div>
        </div>
        </div>
    )
}