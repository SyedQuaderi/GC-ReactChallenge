import { createStore } from 'redux'

//Actions declarations
const INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'

//Action creator: will send to the reducers

export function increment(value){
    return {
        type:INCREMENT,
        value
    }
}

export function decrement(){
    return {
        type:DECREMENT
    }
}

//reducers will receive the actions

var counter=(state=0, action)=>{
    let numValue=parseInt(action.value);

    //console.log(action);
    switch(action.type){
        case INCREMENT:
            return state+ numValue;
           
           // break;
        case DECREMENT:
            return state -1;
           // break;
        default:
            return state;

    }

}

//Configuring Store
function configureStore() {
    const store = createStore(counter);
    return store;
}
  
export const store = configureStore();