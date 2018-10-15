/**
 * @author chuck
 * @date 2018/10/11
 * 
 */

import React, {
  Component
} from 'react';
import Loadable from 'react-loadable';
import Loading from '../common/loading';


  const LoadableComponent = Loadable({
      loader: () => import('./containers/index.js'),
      loading() {
        return <Loading />
      }
    });
    
    class LoadablePage extends Component {
      render() {
        return <LoadableComponent />;
      }
    }
export default LoadablePage;


