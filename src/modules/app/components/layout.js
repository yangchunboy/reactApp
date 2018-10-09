import React, { Component } from 'react';

const Header = () => {
    return (
        <header>i am header</header>
    );
};


const Footer = () =>(
    <footer>i am footer</footer>
);


class Layout extends Component{
    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                <div>{ children }</div>
                <Footer />
            </div>
        );
    }
};


export default Layout;
