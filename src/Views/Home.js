import React from 'react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
const url = `https://5ff7d19c10778b0017042839.mockapi.io/api/v1/PRODUCTS?page=1&limit=10`
const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false
})
    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false

        })
        axios.get(url)
    .then(response => {
        setProduct({
            loading: false,
            data: response.data,
            error: false
        })

    })
    .catch(() => {
        setProduct({
            loading: false,
            data: null,
            error: true
        })
    })
    }, [url])

    let content = null
    return(
        <div>
            <h1 className="font-bold text-2xl mb-3" >Best Sellers</h1>

            { content }
            
        </div>

    )

}

export default Home