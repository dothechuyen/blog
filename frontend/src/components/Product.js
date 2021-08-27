import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Products(prop) {
    // const [product_id, setproduct_id] = useState()
    const product_id = useSelector(state => state.product.product_id)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({
            type: 'ADD_PRODUCT_ID',
            payload: prop.data.id,
        });
        dispatch({
            type: 'ADD_PRODUCT_NAME',
            payload: prop.data.product_name,
        });
        dispatch({
            type: 'ADD_PRODUCT_PRICE',
            payload: prop.data.product_price,
        });
        dispatch({
            type: 'ADD_PRODUCT_IMAGE',
            payload: prop.data.image,
        })
        console.log(prop.data.id);
    }
    return (
        <div class="col-3" onClick={() => handleClick()}>
            <div class="card text-left">
                <img class="card-img-top" src={prop.data.image} alt="" />
                <div class="card-body">
                    <h5 class="card-title float-left">{prop.data.product_name}</h5>
                    <h5 class="card-title float-right">{prop.data.product_price}</h5>
                </div>
            </div>
            <br />
        </div>
    )

}
