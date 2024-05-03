import React from 'react';
import { View, Text } from 'react-native';

const Contact = () => {
    
    React.useEffect(()=>{
        alert("It, alert from useEffect")
    },[])
  return (
    <View style={{backgroundColor:'red', width:100, height:100}}>
        <Text style={{color:'black'}}>Hello1</Text>
        <Text>{alert("it's working")}</Text>
    </View>
  );
}

export default Contact;
