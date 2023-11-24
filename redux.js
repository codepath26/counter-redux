const redux = require('redux');

const counterReducer = (state ={counter : 0}, action)=>{
  if(action.type === "INCREMENT"){
    return {
      counter : state.counter + 1,
    }
  }
  if(action.type === "INCREMENT5"){
     return{
      counter : state.counter +5
     }
  }
  if(action.type === "DECREMENT"){
     return{
      counter : state.counter  -1,
     }
  }

}

const counterStore = redux.createStore(counterReducer);
const counterComponent = ()=>{
  const newState= counterStore.getState();

  console.log("we are at component")
  console.log(newState)
}

counterStore.subscribe(counterComponent);
counterStore.dispatch({type : "INCREMENT5"});