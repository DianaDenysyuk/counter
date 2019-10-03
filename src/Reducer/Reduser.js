const inititalState = {
    count: 0
};
const reducer = (state = inititalState.count, action) =>{
    switch (action.type) {
        case "INC":
            return state + action.payload;
        case "DEC":
            return state - action.payload;
        case "plustwo":
            return state + action.payload;
        case "zero":
            return state = action.payload;
        case "multiplatetwo":
            return state * action.payload;
        case "dividetwo":
            return state / action.payload;
        default:
            return state
    }
}
export default reducer;
