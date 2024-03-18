import axios from 'axios'
import React, { useEffect, useState } from 'react'

//Things done in this file
//API hit
//gives data
//display the given data


const ShowAllProducts = () => {

    let [products,setProducts] = useState([])
    let getProducts = async() => {
        try {
            let output = await axios({
                method: 'GET',
                url: "https://project-dw.onrender.com/api/vi/products",
                
            })
    
            setProducts(output.data.data.results)
        } catch (error) {
            console.log(error.message)
        }
      
    }

    //we cannot use async keyword inside useEffect 
    //its a rule
    //so we made a function and called it inside of useEffect
    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div>ShowAllProducts</div>
  )
}

export default ShowAllProducts