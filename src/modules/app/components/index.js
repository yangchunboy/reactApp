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
        const result = await api({ 
            method: 'get',
            uriName: 'getIp',
        });
        console.log(result);
        this.setState({
            ip: result.body,
        });
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
 