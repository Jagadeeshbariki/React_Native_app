import React from 'react';
import { Button, View, StyleSheet, Text, ScrollView, Image, Pressable, Modal, SafeAreaView, FlatList, RefreshControl} from 'react-native';
import axios from 'axios';


const HomePage = () => {

    const [DATA, SetDATA] = React.useState('');
    const [ModalVisible, setModalVisible] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');

   const openModel =(product)=>{
     setModalVisible(true)
     setSelectedProduct(product)
   }

    const fnclick=()=>{
        alert("Welcome to Jagadeesh Bazar")
        
        // Fetching the details from the API 
        axios.get('https://dummyjson.com/products')
        .then((response)=>{
            SetDATA(response.data)
            
        })
        .catch(()=>{
            SetDATA('');
            // alert("Something Went Wrong")
        })
        .finally(()=>{

        })
    }

// Filtering the data based the searching one




  return (
    <ScrollView>
   <View style={styles.GetButton}>
    <Button title='Get Products' color='#f194ff' onPress={fnclick} />

{/* Here I am writing the modal details which will show the all the details of the products  */}
    <Modal
        animationType='fade'
        transparent={true}
        visible={ModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!ModalVisible);
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <SafeAreaView>
                <Text style={styles.ModalHeading}>{selectedProduct?.title}</Text>
                <View style={styles.ModelImg}>
                    {
                        selectedProduct?.images.map((img, ind)=>{
                            return <View key={ind} style={styles.ImgContainer}>
                                <Image key={ind} style={{width:'100%', height:'100%', borderRadius:10}} source={{uri:img}}/>
                            </View>
                        })
                    }
                </View>
                <Text style={{fontSize:20, color:'white'}}>Price: Rs.{selectedProduct?.price}/-</Text>
                <Text style={{fontSize:20, color:'white'}}>Discount Percenage: {selectedProduct?.discountPercentage} %</Text>
                <Text style={{fontSize:17, color:'white'}}>Product Brand Name: {selectedProduct?.brand}</Text>
                <Text style={{fontSize:17, color:'white'}}>Category: {selectedProduct?.category}</Text>
                <Text style={{fontSize:17, color:'white'}}>Stock: {selectedProduct?.stock}</Text>
                <Text style={{fontSize:17, color:'white'}}>Rating: {selectedProduct?.rating}</Text>
                <Text style={{fontSize:15, color:'#000000'}}>Product Description: {selectedProduct?.description}</Text>
            </SafeAreaView>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!ModalVisible)}>
                        <Text>Close</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
    <View style={styles.PFrame}>
    {
        DATA && DATA.products.map((obj, ind)=>{
            return (
                <Pressable key={ind} onPress={()=>openModel(obj)}>
                    <View  style={styles.ProductFrame}> 
                    
                        <Text style={styles.ProductHeading}>{obj.title}</Text>
                        <Image source={{uri: obj.thumbnail }} style={styles.ProductImg} />
                        <Text >Price: Rs.{obj.price}/-</Text>
                        <Text >Discount: {obj.discountPercentage}%</Text>
                        <Text>Brand:{obj?.brand}</Text>
                        <Text> Category:{obj?.category}</Text>
                        <Text> Stock: {obj?.stock}</Text>
                        <Text> Product Rating: {obj?.rating}</Text>
                    </View>
                </Pressable>
            )
        })
    }
    </View>
   </View>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    PFrame:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    ProductFrame:{
        width:160,
        height:270,
        backgroundColor:'#50a1a6',
        margin:5,
        padding:5,
        borderTopEndRadius:30,
        borderBottomLeftRadius:30,
        marginHorizontal:10,
    },
    ProductHeading:{
        marginVertical:5,
        alignContent:'center',
        backgroundColor:'#fff000',

    },
    ProductImg:{
        width:150,
        height:100,
        borderRadius:10,
    },
    PText:{
        paddingLeft:10,
    },
    centeredView:{ //Style for the Model one
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor:'#c4589d'
    },
    modalView:{

    },
    ModalHeading:{
        fontSize:20,
        backgroundColor:'#f5b562',
        padding:10,
        margin:10,
    },
    ModelImg:{
        width:300,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        flexWrap:'wrap'
    },
    ImgContainer:{
        width:80,
        height:90,
        margin:10,
        borderRadius:10,

    },
    buttonClose:{
        backgroundColor:'#2196F3',
        alignItems:'center'
    }
})

export default HomePage;
