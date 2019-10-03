import React from 'react';
import { connect } from 'react-redux';
import { INC, DEC, plustwo, zero, multiplatetwo, dividetwo } from '../../Actions/Actions'

const Counter = ({ count, INC, DEC, plustwo, zero, multiplatetwo, dividetwo }) => {
    return(
        <React.Fragment>
            <div id="count" className="btn">{count}</div>
            <button id="plus" onClick={INC} className="btn btn-outline-success">Plus</button>
            <button id="minus" onClick={DEC} className="btn btn-outline-danger">Minus</button>
            <button id="plustwo" onClick={plustwo} className="btn btn-outline-info">Plus Two</button>
            <button id="zero" onClick={zero} className="btn btn-outline-info">Zero</button>
            <button id="multiplatetwo" onClick={multiplatetwo} className="btn btn-outline-info">Redouble</button>
            <button id="dividetwo" onClick={dividetwo} className="btn btn-outline-info">Divide Two</button>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        INC: () => {
            const count = 1;
            dispatch(INC(count));
        },
        DEC: () => {
            const count = 1;
            dispatch(DEC(count));
        },
        zero: () => {
            const zeroCounter = 0;
            dispatch(zero(zeroCounter));
        },
        plustwo: () => {
            const count = 2;
            dispatch(plustwo(count))
        },
        multiplatetwo: () => {
            const count = 2;
            dispatch(multiplatetwo(count));
        },
        dividetwo: () => {
            const count = 2;
            dispatch(dividetwo(count));
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Counter);
