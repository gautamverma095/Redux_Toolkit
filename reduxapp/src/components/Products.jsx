import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux"
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice'


// const fetchProducts = async () => {

//     return await fetch("https://fakestoreapi.com/products").then((res) => res.json())

// }

const Products = () => {

    // const [products, setProducts] = useState([])  
    const dispatch = useDispatch()
    const {data,status} = useSelector((state) => state.product)

    useEffect(() => {
      

        dispatch(fetchProducts())
        // fetchProducts().then((res) => {
        //     console.log(res);
        //     setProducts(res)
        // }).catch((err) => {
        //     console.log(err);
        // })


    }, [])



    const handleAdd = (product) => {

        dispatch(add(product))

    }
    return (
        <div className='productsWrapper'>

            {
                data.map((product,index) => {
                    return (

                        <div className='card' key={product.id}>
                            
                            <img src={product.image} alt="" />
                            <h4>{product.title}</h4>
                            <h5>{product.price}</h5>
                            <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
                        </div>
                    )
                })

            }
            
        </div>
    )
}

export default Products