/**
 * 专门写react的UI组件
 * @author chuck
 * @date 2018/06/12
 * 
 */

 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';

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
            <h1 className="home">
                <Link to='/app'>i am home</Link>
            </h1>
        );        
    }
 };


 export default App;
 