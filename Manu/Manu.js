  import React,{useState} from 'react';
  import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput,SafeAreaView, Image } from 'react-native';
  import DATA from './ManuConfig.json';
  import { useNavigation } from '@react-navigation/native';
  const Manu = () => {

    const [InpText, setInputText] = React.useState('');
    const [text, setText]=React.useState('');
    const [hoveredItem, setHoveredItem] = useState(null);
    const navigation = useNavigation();
    // function for the serach
    const fnClick=()=>{
    
      setText(InpText)
      
    }

    const ManuClicked=(m)=>{  //For Navigation( It is a call back function)
      navigation.navigate(m)
      // alert(m)
    }
    

    // to handle the input changes 
      const handleInputChange=(inputText)=>{
        setInputText(inputText)
      }

    const handleMouseEnter = (item) => {
      setHoveredItem(item);
    };


    const handleMouseLeave = () => {
      setHoveredItem(null);
    };

    // reder the manu Item list here
    const renderMenuItem = ({ item }) => (
      <TouchableOpacity
        style={[
          styles.ManuList,
          hoveredItem === item && styles.hovered,
        ]}
        onPress={() => navigation.navigate(item)}
        onMouseEnter={() => handleMouseEnter(item)}
        onMouseLeave={handleMouseLeave}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    );
    
    return (
      <View style={styles.container}>
        
        <FlatList
          data={DATA.ManuList}
          renderItem={renderMenuItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
        />

        
        <SafeAreaView style={styles.SearchBar}>
          
          <TouchableOpacity  onPress={fnClick} >
            <Image source={{uri: 'https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png'}} style={styles.SearchImg}/> 
          </TouchableOpacity>
         
          <TextInput  placeholder='Search Your product' style={styles.searchInput} value={InpText} onChangeText={handleInputChange} />
            
        </SafeAreaView>
        
      </View>

    );
  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ccc',
      alignItems: 'flex-end', // Align items to the end of the container within the container

    },
    ManuList: {
      padding: 10,
    },
    hovered: {
      fontWeight:900,
      
    },
    searchInput:{
      marginVertical:5,
      height:30,
      width:320,
      color:'#fff',
    },
    SearchImg:{
      width:25,
      height:25,
      margin:5,
      padding:5,
      
    },
    SearchBar:{
      display:'flex',
      flexDirection:'row',
      backgroundColor:'#ab6666',
      borderStartStartRadius:20,
      borderEndStartRadius:20,
      marginBottom:5,
      height:40,
    }
  });
  export default Manu;
