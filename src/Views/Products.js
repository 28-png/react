import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function Products() {
const { id } = useParams()
const url = `https://5ff7d19c10778b0017042839.mockapi.io/api/v1/PRODUCTS/${id}`
const [product, setProduct] = useState(null)
    useEffect(() => {
        axios.get(url)
    .then(response => {
        setProduct(response.data)

    })
    }, [url])
    
    if(product) {
        return(
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.name}
                </h1>
                <div>
                <img
                    src={product.imageUrl[0].imageUrl}
                    alt={product.name}
                />
            </div>
            <div className="text-xl font-bold mb-3">
                {product.price}
            </div>
            <div>
                {product.description}
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