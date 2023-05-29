import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from './Cardstyle';





const  card = ({urun}) => {
 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image_container}> 
  <Image  style={styles.image} 
  source={{   uri: urun.imgURL }} /></View>
       <View style={styles.textcontainer}>
          
           <Text style={styles.marka}>{urun.title}</Text>
           <Text style={styles.fiyat}>{urun.price} </Text>
           <Text style={styles.stock}> {urun.inStock ?"": "STOCKTA YOK"} </Text>
         
        </View>
        
 </SafeAreaView>
 
 );
}



export default card;