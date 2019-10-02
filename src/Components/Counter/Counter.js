import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, btnZero, btnPlus, btnMinus, btnPlusTwo, btnMultiplateTwo, btnDivideTwo }) => {
    return(
        <React.Fragment>
            <div id="count" class="btn">{count}</div>
            <button id="plus" class="btn btn-outline-success">{btnPlus}</button>
            <button id="minus" class="btn btn-outline-danger">{btnMinus}</button>
            <button id="plustwo" class="btn btn-outline-info">{btnPlusTwo}</button>
            <button id="zero" class="btn btn-outline-info">{btnZero}</button>
            <button id="multiplatetwo" class="btn btn-outline-info">{btnMultiplateTwo}</button>
            <button id="dividetwo" class="btn btn-outline-info">{btnDivideTwo}</button>
        </React.Fragment>
    )
}

const mapStateToProps = ({ count, btnZero, btnPlus, btnMinus, btnPlusTwo, btnMultiplateTwo, btnDivideTwo}) => {
    return {
        count: count,
        btnZero: btnZero,
        btnPlus: btnPlus,
        btnPlusTwo: btnPlusTwo,
        btnMinus: btnMinus,
        btnMultiplateTwo: btnMultiplateTwo,
        btnDivideTwo: btnDivideTwo,
    }
}

export default connect (mapStateToProps)(Counter);
