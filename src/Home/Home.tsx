import * as React from 'react';
import Layout from '../common/Layout/Layout';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';

import {push} from 'react-router-redux';

interface IHomeProps {
    home : any,
    changeContentOne: () => Dispatch,
    changeContentTwo: () => Dispatch,
    navigateToPath: (path: string, push: any)=> Dispatch
}

class Home extends React.Component<IHomeProps,{}> {

    public handleClick = (contentIndex : string) => {
        (contentIndex === 'one') 
            ? this.props.changeContentOne()
            : this.props.changeContentTwo()
    }

    public link = (path : string) => {
        this.props.navigateToPath(path, push);
    } 
    
    public render(){
        return (
            <Layout>
                <h3> { this.props.home.title } </h3>
                <p>{this.props.home.content}</p>
                <button onClick={this.handleClick.bind(this,'one')}>change content to 1</button>
                <br/>
                <br/>
                <button onClick={this.handleClick.bind(this,'two')}>change content to 2</button>

                <button onClick = {this.link.bind(this,'/')}>Home</button>
                <button onClick = {this.link.bind(this,'/about')}>About</button>
            </Layout>
        )
    }
}

const mapStateToProps = (state:any, props :any) => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeContentOne : () => {
            dispatch({
                type: "CHANGE_CONTENT_TO_CONTENT_ONE"
            })
        },
        changeContentTwo: () => {
            dispatch({
                type: "CHANGE_CONTENT_TO_CONTENT_TWO"
            })
        },
        navigateToPath: (path :string , push: any )=> {
            dispatch(push(path))
        }
    }
}

export default connect<{}, {}, IHomeProps>(mapStateToProps , mapDispatchToProps)(Home);