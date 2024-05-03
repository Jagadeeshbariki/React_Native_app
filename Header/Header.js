import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {

  // Header Section Starts Here

  return (
    <View style={styles.HeadContainer}>
      <Text style={styles.HeadText}>J</Text>
      <Text style={styles.heading}>Jagadeesh Bazar</Text>
      <Text style={styles.HeadText}>J</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    heading:{
        color:'white',
        textAlign:'center',
        padding:20,
        fontSize:20,
        
    },

    HeadContainer:{
      backgroundColor:'green',
      marginTop:25,
      display:'flex',  //I have used the flex to aling all the text elments in row
      flexDirection:'row',
      justifyContent:'space-between'
    },
    HeadText:{
      fontSize:30,
      padding:20,
      backgroundColor:'#f0111f'
    }
})

export default Header;
