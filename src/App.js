import React from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text,TextInput, TouchableOpacity } from 'react-native';
import Card from './compenent/Card/Card';
import urunliste from './urunlisteleme.json'





function App () {
    const  cardurun = ({item}) => <Card urun={item} />
    const  [text, onChangeText] = React.useState('Ara.. ');
 
 return (
     <SafeAreaView style={styles.container}>
      <Text style={styles.Baslik}>URUN LİSTELEME MİNİ APP</Text>
     <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
     <FlatList 
       keyExtractor={item=>item.id.toString()}
      data ={urunliste}
      renderItem={cardurun} 
      numColumns={2}
      />
       <Button title= "Üye olmak için tıklayınız..." 
              onPress={() => Alert.alert('Simple Button pressed')}
           />
     

     </SafeAreaView>


 );
 

}


const styles = StyleSheet.create({
    
        container : {
            flex :1,
            backgroundColor :'white',
        
        
       },
        Baslik : {
        color: '#AB47BC',
        fontWeight : 'bold',
        },
        input: {
            height: 40,
            margin: 10,
            backgroundColor: '#f8f8ff',
            color: 'black',
            padding: 10,
            borderRadius: 5,
          }

 



});

export default App;