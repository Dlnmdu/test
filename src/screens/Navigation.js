import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import { FontAwesome } from '@expo/vector-icons';
//import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreen from './Home/Index';
//import ExplporeScreen from './Explore/Index';
import ProfileScreen from './Profile/Index';
import LoginScreen from './Login/Index';
import ExpertsScreen from './Experts/Index';
import ServicesScreen from './Services/Index';
import SideBar from '../components/Sidemenu';

  
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();





const TopTabNavigation = () => {
    return (
        <TopTab.Navigator>
          <TopTab.Screen name="Experts" component={ExpertsScreen} />
          <TopTab.Screen name="Services" component={ServicesScreen} />
        </TopTab.Navigator>
      );
}


const TabNavigation =()=>{

    return(

    <Tab.Navigator
        tabBarOptions={{
            
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
                style: {
                  //  backgroundColor: '#CE4418',
                    paddingBottom: 5,
                    
                    
                }
        }}>

        <Tab.Screen name='Home' component={HomeScreen}
             options= {{
                tabBarLabel: 'Home',
                tabBarIcon: ({focused, color, size}) => (
                    <IconAntDesign name="home" size={25} />
                    
                )}} />

        <Tab.Screen name = 'Explore' component = {TopTabNavigation}
            options= {{
                tabBarLabel: 'Explore',
                tabBarIcon: ({focused, color, size}) => (
                    <IconAntDesign name="search1" size={25} />
                    
                )}} />
         
        <Tab.Screen name='Profile' component = {ProfileScreen}
            options= {{
                tabBarLabel: 'Profile',
                tabBarIcon: ({focused, color, size}) => (
                    <FontAwesome name="user-circle-o" size={25} />
                    
                )}}/>
          
    </Tab.Navigator>

    )

}

const DrawerNavigation = () =>{
    return(
        <Drawer.Navigator drawerContent={props => <SideBar {...props} /> }>
            <Drawer.Screen name='tabnav' component={TabNavigation} />
            <Drawer.Screen name='Login' component={LoginScreen} />
        </Drawer.Navigator>
    )
}


export default DrawerNavigation;




// npm install -save react-native-vector-icons  










