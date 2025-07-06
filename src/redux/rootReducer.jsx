import { combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  todos: todoReducer,
});

export default rootReducer;
