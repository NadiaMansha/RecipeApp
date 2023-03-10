import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Categories = () => {
    const [type,setType]=useState('Italian')
    const categoryHandler=(value)=>{
     setType(value)
         console.log(type)
    }
    const [typeRecipies,setTypeRecipies]=useState([])
    useEffect(()=>{
        const fetchTypeRecipies=async()=>{
         const response=await fetch(`https://api.spoonacular.com/recipes/random?number=12&apiKey=${
            process.env.REACT_APP_API_KEY
         }&cuisine=${type}`)
            const data=await response.json()
            setTypeRecipies(data.recipes)
            console.log(data.recipes)
        }
        fetchTypeRecipies()
    },[type])
    const recipiesArray=typeRecipies?.map((recipie)=>{
    
        const ingredientsArray=recipie?.extendedIngredients.map(ingredient=>{
            return(
                <ul>
                    <li>{ingredient.original}</li>
                </ul>
            )
        })
        const instructions=recipie?.instructions
        
             
              
        // regex pattern to match HTML tags
        const htmlPattern = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
        
        // parse HTML tags and convert to plain text
        const parseInstructions = (text) => {
          const plainText = text.replace(htmlPattern, "");
          return plainText
        };
        
        
            const summary1=parseInstructions(recipie.summary)
            const plainSummary=summary1.replace(/&quot;/g,'"')
            const shortenedText = plainSummary.substring(0, 200) + "..."
            return( 
                <Link to={`${recipie.id}`}>
               
                <div className='recipie-container'>
                  <h3>{recipie.title}</h3>
                    <img  
                    className='recipies-container-img'
                    src={recipie.image} alt="recipies" />
                    <p >
                        {shortenedText}
                    </p>
                </div>
               </Link>
            )
        
        })
       
  return (
    <>
    <h1>Categories</h1>
    <div className='button-container'>
        
        <button className="link-button"
        onClick={()=>categoryHandler('italian')}
        >
            Italian
        </button>
        <button className="link-button"
        onClick={()=>categoryHandler('Mexican')}
        >
            Mexican
        </button>
        <button className="link-button"
        onClick={()=>categoryHandler('American')}
        >
            American
        </button>
        <button className="link-button"
        onClick={ ()=>categoryHandler('Indian') }
        >
            Indian
        </button>
        <button className="link-button"
        onClick={()=>categoryHandler('Chinese')}
        >
            Chinese
        </button>
        <button className="link-button"
        onClick={()=>categoryHandler('Japanese')}
        >
            Japanese
        </button>
        <button className="link-button"
        onClick={()=>categoryHandler('British')}
        >
            British
        </button>
        <button className="link-button"
        onClick={()=>categoryHandler('French')}
        >
            French
        </button>
        </div>
        <div className='all-recipies-container' >
            {recipiesArray}
        </div>
    </>
  )
}

export default Categories