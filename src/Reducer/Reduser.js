const inititalState = {
    count: 0,
    btnZero: "Zero",
    btnPlus: "Plus",
    btnMinus: "Minus",
    btnPlusTwo: "Plus Two",
    btnMultiplateTwo: "Duble",
    btnDivideTwo: "Divide Two"
};
const reducer = (state = inititalState, action) =>{
    switch (action.type) {
        case "INC":
            return state.count + action.inc;
        case "DEC":
            return state.count - action.dec;
        case "plustwo":
            return state.count + action.plustwo;
        case "zero":
            return state.count = action.zero;
        case "multiplatetwo":
            return state.count * action.multiplatetwo;
        case "dividetwo":
            return state.count / action.dividetwo;
        default:
            return state
    }
}
export default reducer;
