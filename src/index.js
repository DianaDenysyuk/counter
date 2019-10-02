import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Counter from './Components/Counter/Counter';
import reducer from './Reducer/Reduser';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const storeMy = createStore(reducer);

class App extends React.Component {
    render() {
        return(
            <Provider store={storeMy}>
                <Counter />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
