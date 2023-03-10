import React, { useEffect, useState } from 'react'
import { json, Link, Outlet, useFetcher, useLoaderData } from 'react-router-dom'




const Recipies = () => {
    
    const [query,setQuery]=useState('Pizza')
    const [recipies,setRecipies]=useState([])


    const  getRecipies=async ()=>{
        console.log(query)
   
        const response=await fetch(` https://api.spoonacular.com/recipes/complexSearch?number=12&apiKey=${
            process.env.REACT_APP_API_KEY
        }&query=${query}`
        ,
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
                }
                })
        const data=await response.json()
        console.log(data)
       return data
    }
        
   /*     const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5ce446c630msha11cc8eca976dd2p172f34jsn98f5f0ca3894',
            'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    const response=await  fetch(`https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}&offset=15`, options)
        const data=await response.json()
        return data
    } */

    
useEffect(()=>{
    getRecipies()
    .then((data)=>{
        setRecipies(data.results) }
    )
    .catch(error=>console.log(error))
},[query])

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
    <>
    <div id="search">
    <input type="search" name="query" 
         placeholder='Search Recipies'
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
        
         />
    </div>
     
        
      <div className='all-recipies-container' >
        
        {recipiesArray}

    </div> 
    </>
  )

}

export default Recipies