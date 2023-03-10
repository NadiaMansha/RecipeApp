import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const Recipie = ({}) => {
    const {id}=useParams()
    console.log(id)
    const [recipie,setRecipie]=useState(null)
    const [instructions,setInstructions]=useState(null)
    const [summary,setSummary]=useState(null)

    useEffect(()=>{
        const fecthREcipie= async()=>{
            const data=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${
                process.env.REACT_APP_API_KEY
            }`)
            const recipie=await data.json()
            setRecipie(recipie)
            setInstructions(parseInstructions(recipie.instructions))
            setSummary(parseInstructions(recipie.summary))
            console.log(recipie)
        }
        fecthREcipie()
    },[id])
     


     // regex pattern to match HTML tags
              const htmlPattern = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
      
        // parse HTML tags and convert to plain text
        const parseInstructions = (text) => {
          const plainText = text.replace(htmlPattern, "");
          return plainText
        };
      
    
    
      const ingredientsArray=recipie?.extendedIngredients?.map(ingredient=>{
        return(
            <ul>
                <li>{ingredient.original}</li>
            </ul>
        )
    })
      
      
  return (
    <div className='recipie'>
        <h3>{recipie?.title}</h3>
        <img src={recipie?.image} alt="recipies" />
        <p>
          <b>Ingredinets:</b>  
            {ingredientsArray}
        </p>
        <p>
            <b>Instructions:</b> 
            {instructions}
        </p>
        <p>
            <b> Summary:</b>
           
            {summary}
        </p>
    </div>
  )
}

export default Recipie