/**
 * 用于存放单个功能的actions
 *  @author chuck
 *  @date  2018/06/12
 * 
 */

import { ADD_PRODUCT, REMOVE_PRODUCT } from './type';

const addProduct = ({ name, amount, id }) => {
    return {
        type: CHANGE_PRODUCT,
        payload: { name, amount, id },
    };
};

const removeProduct = ({ name }) => {
    return {
        type: REMOVE_PRODUCT,
        payload: { name },
    };
};

export default {
    addProduct,
    removeProduct,
};