/**
 * @format
 */
 import React from 'react';
 import {AppRegistry,LogBox} from 'react-native';
 import {Provider} from 'react-redux';
 import {persistStore} from 'redux-persist';
 import {PersistGate} from 'redux-persist/integration/react';
 import App from './App';
 import {name as appName} from './app.json';
 import store from './app/store/configureStore';
 
 const Demo = () => {
   const Persist = persistStore(store);
   return (
     <Provider store={store}>
       <PersistGate loading={<App />} persistor={Persist}>
         <App />
       </PersistGate>
     </Provider>
   );
 };
 AppRegistry.registerComponent(appName, () => Demo);
 LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
 LogBox.ignoreAllLogs();//Hide all warning notifications on front-end