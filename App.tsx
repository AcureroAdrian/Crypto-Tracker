import React, {type PropsWithChildren} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CryptoList from './src/screens/CryptoList/Index';
import AddCrypto from './src/screens/AddCrypto/Index';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/utils/theme';
import {Provider} from 'react-redux';
import store from './src/store/index';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CryptoList"
          component={CryptoList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCrypto"
          component={AddCrypto}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
export default App;
