import React from 'react';
import store from './Store';
import {Provider} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';

const App = () => {
    const Storevalue = useSelector((state)=>{
        return state
    })
  return (<>
    <Provider store={store}>
        <pre>{JSON.stringify(Storevalue)}</pre>
        <h1>Counter ( 0 )</h1>
        <button className='m-2'>INCR</button>
        <button>DECR</button>
    </Provider>
  </>)
}

export default App;