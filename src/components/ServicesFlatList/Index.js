import React from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import Style from './Styles';
//import { CheckBox } from 'react-native-elements'
import {data} from '../../screens/Services/Index';



const ServicesFlatList = ()=>{

    return(

        <View>

        <FlatList
        data={data}
        keyExtractor={({Id},index) => Id} 
        renderItem={({item}) =>(

      <View style={Style.viewStyle}>
            <Text> {item.title}, {item.type}  </Text>

            <Image source={{uri: item.bgImage}}
                style={Style.imageStyle} /> 

            <Text style={{fontWeight:'bold', fontSize: 16}}> Life Coaching from a online professional </Text>
            <Text>Price: {item.price}$</Text>
            <Text>Duration: {item.durationMinutes}</Text>
      </View>


   ) }   
   /> 
   </View>
    )
}

export default ServicesFlatList; 