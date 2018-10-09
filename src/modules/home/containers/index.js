/**
 * 获取数据将数据传入props
 * @author chuck
 * @date 2018/06/13
 * 
 */

import React from 'react';
import { connect } from 'react-redux';

 import Home from '../components/index';

 const mapStateToProps = (state, ownProps) => {
    return {
      ...state
    }
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
  };
  
  const appConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home)

export default appConnect;
