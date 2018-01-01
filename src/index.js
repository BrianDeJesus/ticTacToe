import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
//store.dispatch(renderClickedSpot(4, 'X'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
   , document.getElementById('root'));

registerServiceWorker();
