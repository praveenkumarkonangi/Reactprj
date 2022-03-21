import {combineReducers} from 'redux';
import CounterReducr from './Reducer'

const rootReducder = combineReducers({
    count:CounterReducr
});

export default rootReducder;