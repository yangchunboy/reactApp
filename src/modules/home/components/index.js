/**
 * 专门写react的UI组件
 * @author chuck
 * @date 2018/06/12
 * 
 */

 import React, { Component } from 'react';
 import Test from './Test'
 import { TestContext } from '../../../context'

 class App extends Component{
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log(this)
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
                <div onClick={this.goApp.bind(this)}>click me to app</div>
                <TestContext.Provider>
                    <Test></Test>
                </TestContext.Provider>
                <img src="https://chuckboy.oss-cn-hangzhou.aliyuncs.com/ratel.jpg" alt="test"/>
            </h1>
        );        
    }

    goApp() {
        const { history } = this.props;
        history.push('/app');
    }
 };

 App.contextType = TestContext

 export default App;
 