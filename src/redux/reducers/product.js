import { GET_PRODUCTS } from '../types'
import { shoesData } from '../../data/shoesData'
const initialState = {
    products: shoesData
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state }

        default:
            return state;
    }
}

export default productReducer