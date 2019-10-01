import { createStore } from 'redux';

const inititalState = 0;
const countReducer = (state = inititalState, action) =>{
    switch (action.type) {
        case "INC":
            return state +1;
        case "DEC":
            return state -1;
        case "plustwo":
            return state +2;
        case "zero":
            return state = 0;
        case "multiplatetwo":
            return state *2;
        case "dividetwo":
            return state /2;
        default:
            return state
    }
}

const store = createStore(countReducer);

store.subscribe(() =>{
    document.getElementById('count').innerHTML = store.getState();
})
document.getElementById('plus').addEventListener("click", () =>{
    store.dispatch({type: 'INC'});
});
document.getElementById('minus').addEventListener("click", () =>{
    store.dispatch({type: 'DEC'});
});
document.getElementById('plustwo').addEventListener("click", () =>{
    store.dispatch({type: 'plustwo'});
});         
document.getElementById('zero').addEventListener("click", () =>{
    store.dispatch({type: 'zero'});
});
document.getElementById('multiplatetwo').addEventListener("click", () =>{
    store.dispatch({type: 'multiplatetwo'});
});
document.getElementById('dividetwo').addEventListener("click", () =>{
    store.dispatch({type: 'dividetwo'});
});