import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductListFunc from "./components/ProductListFunc";
import ProductCreate from "./components/ProductCreate";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/create" element={<ProductCreate/>}/>
                    <Route path="/products" element={<ProductListFunc/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;