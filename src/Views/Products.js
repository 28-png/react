import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Products() {
const { id } = useParams()
const url = `https://5ff7d19c10778b0017042839.mockapi.io/api/v1/PRODUCTS/${id}`

let product = useAxiosGet(url)

    if(product.error) {
        return(
            <p>There was an error please refresh the page</p>
        )
    }

    if(product.loading){
        return(
            <Loader></Loader>
        )
    }

        
        
    
    if(product.data) {
        return(
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                <img
                    src={product.data.imageUrl[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <div className="text-xl font-bold mb-3">
                {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
            </div>
           
        )
    }

    return(
        <div>

        </div>

    )

}

export default Products