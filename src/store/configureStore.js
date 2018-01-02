import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import boardReducer from '../reducers/boardReducer';
import turnReducer from '../reducers/turnReducer';
import gameOverReducer from '../reducers/gameOverReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            board: boardReducer,
            currentTurn: turnReducer,
            gameEnding: gameOverReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};