import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
const url = `https://5ff7d19c10778b0017042839.mockapi.io/api/v1/PRODUCTS?page=1&limit=10`
const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
})
    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false

        })
        axios.get(url)
    .then(response => {
        setProducts({
            loading: false,
            data: response.data,
            error: false
        })

    })
    .catch(() => {
        setProducts({
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