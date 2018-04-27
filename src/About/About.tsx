import * as React from 'react';
import Layout from '../common/Layout/Layout';
import { connect } from 'react-redux';

class About extends React.Component {
    public render(){
        return (
            <Layout>
                <h3> About Page </h3>
            </Layout>
        )
    }
}



export default connect((state:any, props :any) => {
    return {
        about: state.about
    }
 })(About);
