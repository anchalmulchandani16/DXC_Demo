import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/mainScreen';
import Routes from './routes';

const Stack = createStackNavigator();
function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.MAIN_SCREEN}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={Routes.MAIN_SCREEN}
          component={MainScreen}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation;
