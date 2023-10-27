import './Products.scss'

import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
    
    const[productsData,setProductsData]=useState([]);
    const[sortedArray, setSortedArray]=useState([]);

    useEffect(()=>{
        axios.get("https://api-render-tbyl.onrender.com/data")
        .then((response)=>{setProductsData(response.data);setSortedArray(response.data)})
        .catch((err)=>{setError(err);});
    },[]);

    useEffect(
        ()=>{
            console.log(productsData);
        }
    );

    function arraySortNameAscending() {
        let sorted = [...productsData].sort((a, b) => a.brand.localeCompare(b.brand));
        setSortedArray(sorted);
    }
    
    function arraySortNameDescending() {
        let sorted = [...productsData].sort((a, b) => b.brand.localeCompare(a.brand));
        setSortedArray(sorted);
    }
    
    function arraySortPriceAscending() {
        let sorted = [...productsData].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setSortedArray(sorted);
    }
    
    function arraySortPriceDescending() {
        let sorted = [...productsData].sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setSortedArray(sorted);
    }
    
    return(
        <div className='products-root'>
            
            <div className='options'>
                <button onClick={arraySortNameAscending}>A-Z</button>
                <button onClick={arraySortNameDescending}>Z-A</button>
                <button onClick={arraySortPriceAscending}>Price: Low To High</button>
                <button onClick={arraySortPriceDescending}>Price: High To Low</button>
            </div>

            <div className="products-root">
                {/*The Following Is JS Code To Iterate Over The Array Data...*/}
                {
                    sortedArray.map((dataFetched)=>{
                        return(
                            <div key={dataFetched.id} className="product-card">
                                <img src={dataFetched.image} alt="Phone Image"/>
                                <h5>{dataFetched.brand}:<span>{dataFetched.model}</span></h5>
                                <span>Price: ${dataFetched.price}</span>
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
}

export default Products;
