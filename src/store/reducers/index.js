// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import api from './api';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, api });

export default reducers;
