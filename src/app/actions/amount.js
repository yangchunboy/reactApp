/**
 * 用于存放单个功能的actions
 *  @author chuck
 *  @date  2018/06/12
 * 
 */

import { ADD_AMOUNT } from './type';

const addAmount = ({ name, amount, id }) => {
    return {
        type: ADD_AMOUNT,
        payload: { amount },
    };
};


export default {
    addAmount,
};
