import React, {useEffect} from 'react';
import AppNavigator from './navigations/AppNavigator';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import configStore from './store/redux_store_config';

const App= () => {

  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  const store= configStore()

  return (
    <Provider store= {store}>
      <AppNavigator/>
    </Provider>
    
  )
};

export default App;
