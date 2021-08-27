import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


export default function AddProduct() {
    const [product_name, setproduct_name] = useState()
    const [product_price, setproduct_price] = useState()
    const [image, setimage] = useState()
    const product_id = useSelector(state => state.product.product_id)
    const list_product = useSelector(state => state.product.list_product)
    const dispatch = useDispatch()

    async function addProductAction(body) {
        axios.post('/add', body)
    }
    async function getdata(body) {
        axios.get('http://localhost:4000/getdata01').then((res) => {
            dispatch({
                type: 'GET_DATA',
                payload: res
            })
        })
    }


    const isChangeName = (event) => {
        setproduct_name(event.target.value)
    }
    const isChangePrice = (event) => {
        setproduct_price(event.target.value)
    }
    const isChangeImage = (event) => {
        setimage(event.target.value)
    }
    const handleClick = () => {
        addProductAction({ product_name: product_name, product_price: product_price, image: image });
        getdata()
    }

    return (
        <div className="container px-5 my-5">
            <form id="" data-sb-form-api-token="API_TOKEN" >
                <div className="mb-3">
                    <label className="form-label" htmlFor="productName">Product Name</label>
                    <input onChange={(event) => isChangeName(event)} name='product_name' className="form-control" id="productName" type="text" placeholder="Product Name" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="productName:required">Product Name is required.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="productPrice">Product Price</label>
                    <input onChange={(event) => isChangePrice(event)} name="product_price" className="form-control" id="productPrice" type="text" placeholder="Product Price" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="productPrice:required">Product Price is required.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="image">Image</label>
                    <input onChange={(event) => isChangeImage(event)} name='image' className="form-control" id="image" type="text" placeholder="Image" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="image:required">Image is required.</div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        {/* <p>To activate this form, sign up at</p>
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a> */}
                    </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <div className="d-grid">
                    <button onClick={() => handleClick()} className="btn btn-primary btn-lg disabled" id="submitButton" type="submit"  >Submit</button>
                </div>
            </form>
        </div>
        // id="submitButton" type="submit"   d-grid
    )

}
