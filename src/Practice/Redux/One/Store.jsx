import {createStore} from 'redux';
// import CounterReducr from './Reducer/Reducer';
import rootReducder from './Reducer/rootReducer'
const store = createStore(rootReducder);

export default store;