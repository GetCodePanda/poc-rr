import * as React from 'react';
import Header from '../Header/Header';

class Layout extends React.Component{
    public render(){
        return (
            <section>
                <Header/>
                {this.props.children}
            </section>
        )
    }
}

export default Layout;