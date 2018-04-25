import * as React from 'react';
import Test from './components/Test';
import store from './store/configureStore';
const {getState} = store;

import {connect} from 'react-redux';

interface IPropsType  {name:string , dispatch?: any, change?:any};

class App extends React.Component<IPropsType, {}> {

  public handleClick = (actionType : string) => {
    (actionType === 'manualDis') 
      ?
        this.props.dispatch({type:"CHANGE", data: 300})
      :
        this.props.dispatch({type:"CHANGE", data: 1300})
  }

  public render() {
    return (
      <div>
        <Test originAmount={getState().originAmount}/>
        <button onClick={this.handleClick.bind(this,'manualDis')}>manualDispatch</button>
        <button onClick={this.handleClick.bind(this,'propsDis')}>propsDispatch</button>
      </div>
    );
  }
}

const mapStateToProps = (state :any, props:IPropsType) => {
  return {
    originAmount : state.originAmount
  }
};

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     change : () => dispatch({type: "CHANGE" , data : 120})
//   }
// };
export default connect<{},{}, IPropsType>(mapStateToProps )(App);