import { StyleSheet , Dimensions} from "react-native";




export default StyleSheet.create({
     container : {
        backgroundColor: "#f5f5f5",
        margin: 7,
        borderRadius: 10,
        width:180,
   
        
     },
     image_container :{
      
        marginLeft: 5,
        marginRight:5,
        
     },
     image : {
         borderColor :'white',
         borderRadius:10,
         width: Dimensions.get('window').width/5,
         height : Dimensions.get('window').height/5,
        
     },
    marka :{
        fontWeight :'bold',
        fontSize : 10,

    },
    fiyat : {
      fontStyle : 'italic',
      

    },
    stock:{
        fontSize :10,
        padding: 5,
        color: 'red',


    },
       textcontainer : {
         
        marginTop: 10,
       }



})