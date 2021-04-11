import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    
    drawerText:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 50
    },

    LogoutButtonView:{
        top: 550,
        flexDirection: 'column',
       
        //borderWidth: 1,
       // borderColor: 'black',
        marginHorizontal: 10,
        width: 250,
        height: 50
        
    },

    loginButtonText:{
       
        fontSize: 24,
        fontWeight: 'bold',
        left: 25,
        top:7
    },

    loginButtonIco:{
        bottom:20,
        alignSelf: 'flex-start'
    }

})


export default Style;