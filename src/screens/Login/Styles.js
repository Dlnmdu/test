import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    usernameInput:{
        borderWidth: 2,
        borderColor: 'black',
        width: 250,
        height: 40,
        alignSelf: 'center',
        top: 150,
        borderRadius: 3,
        color: 'black',
        padding: 10

    },

    passwordInput:{
        borderWidth: 2,
        borderColor: 'black',
        width: 250,
        height: 40,
        alignSelf: 'center',
        top: 190,
        borderRadius: 3,
        color: 'black',
        padding: 10
    },

    loginButton:{
        borderColor:'blue',
        borderWidth: 2,
        width: 100,
        height: 40,
        alignSelf :'center',
        top: 240,
        borderRadius: 3

    },

    loginButtonText:{
        color: 'blue',
        fontSize: 18,
        alignSelf: 'center',
        top: 3
    }

   
})


export default Style;