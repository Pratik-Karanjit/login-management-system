import React from 'react'
import NavBar from './Project Component/NavBar'
import Footer from './Project Component/Footer'
import CreateProduct from './Project Component/CreateProduct'
import { Outlet, Route, Routes } from 'react-router-dom'
import ShowAllProducts from './Project Component/ShowAllProducts'

const Project = () => {
  return (
    <div>

    <Routes>
        <Route path = "/" element = {<div><NavBar></NavBar><Outlet></Outlet><Footer></Footer></div>}>
            <Route index element = {<div>Home Page</div>}></Route>

            <Route path ="products" element = {<div><Outlet></Outlet></div>}>
                <Route index element = {<ShowAllProducts></ShowAllProducts>}></Route>
                <Route path = ":id" element = {<div>Show Product Details</div>}></Route>
                
                <Route path = "create" element = {<CreateProduct></CreateProduct>}></Route>
               
                <Route path = "update" element = {<div><Outlet></Outlet></div>}>
                <Route index element = {<div>Update product</div>}></Route>
                <Route path = ":id" element = {<div>Form to add product</div>}></Route>

                </Route>
            </Route>

        </Route>
    </Routes>

    </div>
  )
}

export default Project