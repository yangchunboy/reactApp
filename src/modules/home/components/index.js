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
        // console.log(this.props);
        return (
            <h1 className="home">
                <div>test</div>
                <div onClick={this.goApp.bind(this)}>click me to app</div>
                <img src="https://chuckboy.oss-cn-hangzhou.aliyuncs.com/ratel.jpg" alt="test"/>
            </h1>
        );        
    }

    goApp() {
        const { history } = this.props;
        history.push('/app');
    }
 };


 export default App;
 