import {combineReducers}from 'redux'
import { CounterReducr } from './Reduser'

const Rootreducder = combineReducers({
    count:CounterReducr
});
export default Rootreducder;