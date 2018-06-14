import { initState } from '../../config/config';
import { CHANGE_PRODUCT } from '../actions/type';

const products = (state=initState, action) => {
    console.log('**********************', state);
    const { type, payload } = action;
    switch(type) {
        case 'CHANGE_PRODUCT': 
            const oldState = Object.assign({}, state);
            oldState.products.push(payload)
            return oldState;
        default: return state;
    }
};

export default {
    products,
};

