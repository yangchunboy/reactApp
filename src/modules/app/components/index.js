/**
 * 专门写react的UI组件
 * @author chuck
 * @date 2018/06/12
 * 
 */

 import React, { Component } from 'react';
 import api from '../../../api/index';

 class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ip: '0.0.0.0',
        };
    }

    componentWillMount() {

    }

    async componentDidMount() {
        // debugger;
        // console.log(this.props.context);
        // const result = await api({ 
        //     method: 'get',
        //     urlName: 'getIp', 
        // });
        // console.log(result);
        // this.setState({
        //     ip: result,
        // });
        setTimeout(() => {
            console.log('success');
        }, 1000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillReceiveProps() {

    }

    componentWillUnmount() {

    }
    
    render() {
        const { ip } = this.state;
        return (
            <div>
                <h1 className="content">
                    我是content
                </h1>
                <div>{ip}</div>
            </div>
        );        
    }
 };

 export default App;
 