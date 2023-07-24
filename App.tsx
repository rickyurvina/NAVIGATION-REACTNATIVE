import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/views/HomeScreen';
import UsScreen from './src/views/UsScreen';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer

      >
        <Stack.Navigator initialRouteName='Home'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          // options={{
          //   title: 'Welcome',
          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle:{
          //     fontWeight: 'bold',
          //   },
          //   headerTitleAlign: 'center',
          // }}
          />
          <Stack.Screen
            name="Us"
            component={UsScreen}
            options={({ route }) => ({
              title: route.params.person1.name,
            })}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
