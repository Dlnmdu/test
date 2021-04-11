import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator,
        FlatList, Image} from 'react-native';
import ServicesFlatList from '../../components/ServicesFlatList/Index';
import Style from './Styles';




const expertsURL =  "https://stage-api.serw.io/v1/experts";

const ExpertsScreen = ()=>{

     const [isLoading, setLoading] = useState(false);
     const [data, setData] = useState([]);
     const [title, setTitle] = useState([])
    
    // useEffect(()=>{
    //     try{

    //         fetch(expertsURL)
    //         .then((response) => response.json())
    //         .then((json) => setData(json.experts))
    //         .catch((error) => alert(error))
    //         .finally(setLoading(false));

    //      }catch(e){
             
    //      }
       
    // });

    useEffect(()=>{
        fetch(expertsURL)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data.experts);
          setData(data.experts);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
      });

    return(
       <SafeAreaView >
      
           {isLoading ? <ActivityIndicator /> : <FlatList
                data={data} 
                keyExtractor={item =>item.profileId} 
                renderItem={({item}) =>(

                <View style={Style.viewStyle}>
                  <Image source={{uri:"https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg" }}
                            style={Style.imageStyle} /> 
                    <Text style={{color:'white', fontSize: 12}}>{item.name}</Text>
                    <Text style={{color:'white', fontSize: 12}}>{item.country}</Text>
                </View>


           )} 
           
           numColumns={2} />   } 

       </SafeAreaView>
    )

    return [data, isLoading]
}



export default ExpertsScreen; 
























/*<FlatList
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
           )}   
                /> */