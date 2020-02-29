import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import authReducer from './reducers/authReducer';

const root = combineReducers({
  authReducer
});

export default createStore(root, applyMiddleware(promise));
