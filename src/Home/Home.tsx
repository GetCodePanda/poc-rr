import * as React from 'react';
import Layout from '../common/Layout/Layout';
import {connect} from 'react-redux';

class Home extends React.Component {
    public render(){
        return (
            <Layout>
                <h3> Home Page </h3>
            </Layout>
        )
    }
}

export default connect((state:any, props :any) => {
    return {
        home: state.home
    }
 })(Home);