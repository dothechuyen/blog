// import './App.css';
import HeadTitle from './HeadTitle';
import Products from './Product';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import { useSelector, useDispatch } from 'react-redux'
function App() {
    const [data, setData] = useState()
    const product_id = useSelector(state => state.product.product_id)
    const list_product = useSelector(state => state.product.list_product)
    const dispatch = useDispatch()
    async function getdata() {
        axios.get('http://localhost:4000/getdata01').then((res) => {
            console.log(1223);
            dispatch({
                type: 'GET_DATA',
                payload: res
            })
        });
    }
    async function deleteProduct(body) {
        axios.delete(`http://localhost:4000/delete/${body.id}`)
    }
    useEffect(() => {
        getdata()
    }, [])

    const deletePro = () => {
        deleteProduct({ id: product_id });
        getdata();
    }
    return (
        <div>
            <HeadTitle />
            <AddProduct />
            <div class="container"><button onClick={() => deletePro()}>xoa</button>
                <div class="row">
                    {list_product && list_product.data.map((value, key) => {
                        return (
                            <Products data={value} key={key} />
                        )
                    })}
                    {/* <button onClick={() => handleUpdate()}>Update Redux</button> */}
                </div>
            </div>
        </div>
    );
}

export default App;
