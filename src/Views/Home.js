import React, { useEffect, useState } from 'react'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'


function Home() {
const url = `https://5ff7d19c10778b0017042839.mockapi.io/api/v1/PRODUCTS?page=1&limit=10`

    let products = useAxiosGet(url)

    let content = null

    if(products.error) {
        content =
            <p>There was an error please refresh the page</p>
        
    }

    if(products.loading){
        content =
            <Loader></Loader>
        
    }

    if(products.data) {
        content =
            products.data.map((product) => 
                <div key={product.id}>
                    <ProductCard 
                        product = { product }
                    />

                </div>
            )
        
    }

    
    return(
        <div>
            <h1 className="font-bold text-2xl mb-3" >Best Sellers</h1>

            { content }
            
        </div>

    )

}

export default Home