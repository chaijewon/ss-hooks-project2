import React,{useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
// action => event
function reducer(state,action){
  switch(action.type)
  {
    case 'INCREMENT':
      return {value:state.value+1}
    case 'DECREMENT':
      return {value:state.value-1}
    default:
      return state;
  }
}
/*
      dispatch({type:'INCREMENT'})
               ================== action.type (함수)
      reducer(state,action)
      {
           case 'INCREMENT':
            return {value:state.value+1}
          case 'DECREMENT':
            return {value:state.value-1}
          default:
            return state;
      }
 */
function App() {
  const [state,dispatch]=useReducer(reducer,{value:0})
  return (
    <div>
      <p>현재 state의 값:{state.value}</p>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
    </div>
  );
}

export default App;
