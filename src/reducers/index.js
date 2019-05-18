import { combineReducers } from 'redux';
import ListReducer from './ListReducer';
import MainScreenReducer from './MainScreenReducer';

export default combineReducers({
    inventoryList: ListReducer,
    mainScreen: MainScreenReducer
});
