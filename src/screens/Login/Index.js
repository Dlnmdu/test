import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './Styles';
//import { CheckBox } from 'react-native-elements'



const LoginScreen = (props)=>{

    return(
        <View style={Style.containerView}>
            <TextInput style={Style.usernameInput}
                placeholder ='Username'
                placeholderTextColor='black' />

            <TextInput style={Style.passwordInput}
                placeholder ='password'
                placeholderTextColor='black' />

            <TouchableOpacity style={Style.loginButton}
                onPress = {()=>props.navigation.navigate('tabNav')}>
                <Text style={Style.loginButtonText} >Login</Text>
            </TouchableOpacity>
           
            
        </View>
    )
}

export default LoginScreen; 