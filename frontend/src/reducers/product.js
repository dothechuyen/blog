const initial_state = {
    list_product: null,
    product_id: null,
    product_name: null,
    product_price: null,
    product_image: null
};

const productReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, list_product: action.payload }
        case 'ADD_PRODUCT_ID':
            return { ...state, product_id: action.payload }
        case 'ADD_PRODUCT_NAME':
            return { ...state, product_name: action.payload }
        case 'ADD_PRODUCT_PRICE':
            return { ...state, product_price: action.payload }
        case 'ADD_PRODUCT_IMAGE':
            return { ...state, product_image: action.payload }
        default: return { ...state };
    }
}
export default productReducer;