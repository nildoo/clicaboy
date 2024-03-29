import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

import Home from './src/screens/Home';
import Account from './src/screens/Account';
import Login from './src/screens/Login';
import Delivery from './src/screens/Delivery';
import Wallet from './src/screens/Wallet';
import Perfil from './src/screens/Perfil';
import Support from './src/screens/Support';
import StepOne from './src/screens/Steps/01';
import StepTwo from './src/screens/Steps/02';
import StepTree from './src/screens/Steps/03';
import StepFour from './src/screens/Steps/04';
import Five from './src/screens/Steps/05';

const Stack = createNativeStackNavigator();

TaskManager.defineTask('updateLocation', ({ data: { locations }, error }) => {
  if (error) {
      console.log(error) ;
      return;
  }
  console.log('Received new locations', locations);
});


function App() {

  const [loaded] = useFonts({
    'Arboria-Black': require('./src/assets/fonts/Arboria-Black.ttf'),
    'Arboria-BlackItalic': require('./src/assets/fonts/Arboria-BlackItalic.ttf'),
    'Arboria-Bold': require('./src/assets/fonts/Arboria-Bold.ttf'),
    'Arboria-BoldItalic': require('./src/assets/fonts/Arboria-BoldItalic.ttf'),
    'Arboria-Book': require('./src/assets/fonts/Arboria-Book.ttf'),
    'Arboria-BookItalic': require('./src/assets/fonts/Arboria-BookItalic.ttf'),
    'Arboria-Light': require('./src/assets/fonts/Arboria-Light.ttf'),
    'Arboria-LightItalic': require('./src/assets/fonts/Arboria-LightItalic.ttf'),
    'Arboria-Medium': require('./src/assets/fonts/Arboria-Medium.ttf'),
    'Arboria-MediumItalic': require('./src/assets/fonts/Arboria-MediumItalic.ttf'),
    'Arboria-Thin': require('./src/assets/fonts/Arboria-Thin.ttf'),
    'Arboria-ThinItalic': require('./src/assets/fonts/Arboria-ThinItalic.ttf'),
  })

  if(!loaded){
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Delivery' component={Delivery} />
        <Stack.Screen name='Wallet' component={Wallet} />
        <Stack.Screen name='Perfil' component={Perfil} />
        <Stack.Screen name='Support' component={Support} />
        <Stack.Screen name='StepOne' component={StepOne} />
        <Stack.Screen name='StepTwo' component={StepTwo} />
        <Stack.Screen name='StepTree' component={StepTree} />
        <Stack.Screen name='StepFour' component={StepFour} />
        <Stack.Screen name='Five' component={Five} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default () => {
  return (
    <GestureHandlerRootView style={{ display: 'flex', flex: 1 }}>
        <App />
    </GestureHandlerRootView>
  );
};