/**
 * 获取数据将数据传入props
 * @author chuck
 * @date 2018/06/13
 * 
 */

import React from 'react';
import { connect } from 'react-redux';

 import App from '../components/index';

 const mapStateToProps = (state, ownProps) => {
    console.log('1111111111111111111111111', state);
    return {
      ...state
    }
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('222222222222222222222222');
    return {
      onChange: () => {
        dispatch(changeProduct({ name: 'chuck', amount: 99, id: 'e' }));
      }
    }
  };
  
  const appConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App)

export default appConnect;
