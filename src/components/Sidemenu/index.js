import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { DrawerItems } from 'react-navigation-drawer';
//import { CheckBox } from 'react-native-elements'



const SideBar = (props)=>{

    return(
       <View>
           <Text style={Style.drawerText}> React Native Evaluation</Text>

           
           <View style = {Style.LogoutButtonView}>
                <TouchableOpacity
                onPress ={()=> props.navigation.navigate('Login') } >
                   <Text style={Style.loginButtonText}> LogOut </Text>
                   <Ionicons style={Style.loginButtonIco} name="settings-sharp" size={25} />
                </TouchableOpacity>
           </View>
           
       </View>

       
    )
}

export default SideBar; 