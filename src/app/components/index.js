/**
 * 专门写react的UI组件
 * @author chuck
 * @date 2018/06/12
 * 
 */

 import React, { Component } from 'react';

 class App extends Component{
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    componentDidMount() {

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
        return (
            <h1 className="content">
                我是content
            </h1>
        );        
    }
 };


 export default App;
 