import {StyleSheet,StatusBar} from 'react-native';

const Style = StyleSheet.create({
    
    viewStyle:{
        width: 45,
        height: 100,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 20,
        marginHorizontal: 20,
        left: 10,
        borderRadius: 20,
       
        top: 20,
        bottom: 20,
        flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },

    itemTxt:{
       color: 'white',
       fontSize: 8
    },
})


export default Style;