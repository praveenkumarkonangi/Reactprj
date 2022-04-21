import React from 'react';
import store from './Store';
import {Provider} from 'react-redux';
import Ui from './Ui';
import Navbar from './Navbar';

const App = () => {
  return (<>
    <Provider store={store}>
       
        <Navbar/>
        <Ui />
    </Provider>
  </>)
}

export default App;