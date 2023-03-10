import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Ingredients = () => {
  const [ingredients, setIngredients] = useState('')
  const [recipies, setRecipies] = useState([])
  const getRecipie = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      process.env.REACT_APP_API_KEY
    }ingredients=${ingredients}&number=12`)
    const data = await response.json()
    setRecipies(data)
  }
  console.log(recipies)
  const recipiesArray=recipies?.map((recipie)=>{
    return( 
        <Link to={`${recipie.id}`}>
       
        <div className='recipie-container'>
          <h3>{recipie.title}</h3>
            <img  
            className='recipies-container-img'
            src={recipie.image} alt="recipies" />

        </div>
       </Link>
    )

})


  return (
    <div
    className='ingredients-container'
    >
      <h1>Enter ingredients that you have and get a recipe</h1>
      <input
      name='ingredients'
      value={ingredients}
      onChange={(e)=>setIngredients(e.target.value)}
       type="text" placeholder="Enter ingredients separated by comma" />
      <button
      onClick={ getRecipie }
      className="link-button"
      >Search</button>
        <div className='all-recipies-container' >
       
       {recipiesArray}

   </div> 

       </div>
          
        
  

     
  )
}

export default Ingredients