/**
 * 将所有的reducer全部引入到这里合并
 * @author chuck
 * @date 2018/06/14
 */

 import appReducer from './modules/app/reducers/index';

 export default {
    ...appReducer,
 };

