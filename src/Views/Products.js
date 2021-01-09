import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function Products() {
const { id } = useParams()
const url = `https://5ff7d19c10778b0017042839.mockapi.io/api/v1/PRODUCTS/${id}`
const [product, setProduct] = useState({
    loading: false,
    data: null
})
    useEffect(() => {
        setProduct({
            loading: true,
            data: null,

        })
        axios.get(url)
    .then(response => {
        setProduct({
            loading: false,
            data: response.data
        })

    })
    }, [url])

    if(product.loading){
        return(
            <p>...loading</p>
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