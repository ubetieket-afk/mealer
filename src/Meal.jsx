import React from 'react'
import Nav from  "./Meal_Component/Nav"
import Hero from './Meal_Component/Hero'
import Category from './Meal_Component/Category'
import Footer from './Meal_Component/Footer'
import "./assets/meal.css"

import { useState,useEffect } from 'react'

const Meal = () => {
    //To send request we ned 3 states
    //the first state will contain the data, store what we are fetching from the API
    // the state to track error in the server
    // A state to track if the app is loading or not

    const [categories,setCategories] = useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);

    // a funtion to contain fetch api

    function fetch_meal(){
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(res){return res.json})
        .then(function(data){
            // if data comes back update our states
            setCategories(data.categories)
            setError(false)
            setLoading(false)
        })
        .catch(function(){
            setCategories([]);
            setError(true)
            setLoading(false);
        })
    }
    // to communicate with external system we use useEffect hook
    useEffect(function(){
        fetch_meal()
    },[])



  return (
    <div>
        <Nav />
        <Hero />
        <Category loading={loading} error={error} categories={categories}  />
        <Footer />
    </div>
  )
}

export default Meal
