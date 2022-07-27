import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import Login from './src/screens/Login';

const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Contact' component={Contact} />
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