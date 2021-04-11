

import * as React from 'react';
import { View, Text,DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login/Index';
import TabNavigation from './src/screens/Navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App(props,{ navigation}) {
 
  return (
    <NavigationContainer nitialRouteName = 'Login'>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} 
          options={{
            headerShown:false
          }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='tabNav' component={TabNavigation}
          options={{
            title: ''}} 
          //   headerLeft: () => (
              
          //       <MaterialIcons name="menu" size={40} onPress={()=>{
          //        navigation.dispatch(DrawerActions.toggleDrawer())
          //       }} />
              
            // )}} 
          /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;