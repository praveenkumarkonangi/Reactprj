import React from 'react';
import store from './Store';
import {Provider} from 'react-redux';
import Ui from './Ui';

const App = () => {
  return (<>
    <Provider store={store}>
        <Ui />
    </Provider>
  </>)
}

export default App;