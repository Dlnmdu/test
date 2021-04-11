import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator,
        FlatList, Image} from 'react-native';
import ServicesFlatList from '../../components/ServicesFlatList/Index';
import Style from './Styles';



const serviceURL =  "https://stage-api.serw.io/v1/services";

const ServicesScreen = ()=>{

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([])
    
    // useEffect(()=>{

    // try{
        
    //         fetch(serviceURL)
    //             .then((response) => response.json())
    //             .then((json) => setData(json.services))
    //             .catch((error) => alert(error))
    //             .finally(setLoading(false));

    // }catch(e){p

    // }
   
    // })

    useEffect(()=>{
        fetch(serviceURL)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data.services);
          setData(data.services);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
      });
       
 
    return(
       <SafeAreaView >

           
           {isLoading ? <ActivityIndicator /> :  <FlatList
                data={data}
                keyExtractor={item =>item.serviceId} 
                renderItem={({item}) =>(

              <View style={Style.viewStyle}>
                    <Text> {item.title}, {item.type}  </Text> 
                    <View>
                        <Image source={{uri:"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"}}
                            style={Style.imageStyle} /> 
                    </View>
                    <Text style={{fontWeight:'bold', fontSize: 16}}> Life Coaching from a online professional </Text>
                    <Text>Price: {item.price}$</Text>
                    <Text>Duration: {item.durationMinutes}</Text>
              </View>
                )}  /> } 

       </SafeAreaView>
    )

    return [data, isLoading]
}



export default ServicesScreen; 













                /*
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([])
    
    useEffect(()=>{
        fetch(serviceURL)
            .then((response) => response.json())
            .then((json) => setData(json.services))
            .catch((error) => alert(error))
            .finally(setLoading(false));
    });*/