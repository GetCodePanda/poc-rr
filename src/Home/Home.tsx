import * as React from 'react';
import Layout from '../common/Layout/Layout';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';


interface IHomeProps {
    home : any,
    changeContentOne: () => Dispatch,
    changeContentTwo: () => Dispatch
}

class Home extends React.Component<IHomeProps,{}> {

    public handleClick = (contentIndex : string) => {
        (contentIndex === 'one') 
            ? this.props.changeContentOne()
            : this.props.changeContentTwo()
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
        }
    }
}

export default connect<{}, {}, IHomeProps>(mapStateToProps , mapDispatchToProps)(Home);