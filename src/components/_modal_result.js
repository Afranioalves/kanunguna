import { useState, useContext } from "react";
import {
    Modal, 
   StyleSheet, 
   View,  
   Pressable, 
   Text, 
   TouchableOpacity,
} from "react-native"
import { AntDesign } from '@expo/vector-icons';

const ModalResult = ({isVisible,setVisible, type}) =>{
  
    const handleCloseModal = () =>{
        setVisible(false)
    }
    
   return(
       <Modal
           visible={isVisible}
           animationType="slide"
           transparent={true}
           statusBarTranslucent={true}
           onRequestClose={()=>setVisible(false)}
           
       >

       <View style={styles.modalContainer}>

           <View style={styles.content} onPress={()=>setVisible(false)}>
               <Pressable  onPressOut={()=>setVisible(false)} style={styles.buttonHandler}>
                   <View style={styles.line} />
               </Pressable>

               <View>
                    <AntDesign name="checkcircle" size={54} color="#009933" style={styles.icon}/>
                    <Text style={styles.title}>Producto adicionado</Text>
                    <TouchableOpacity style={styles.button_okay} onPress={()=>setVisible(false)}>
                        <Text style={styles.text_button_Okay}>Ok</Text>
                    </TouchableOpacity>
               </View>
                
           </View>
           
       </View>
       </Modal>
   )
}

export default ModalResult

const styles = StyleSheet.create({
   modalContainer: {
       flex: 1,
       backgroundColor: 'rgba(0, 0, 0, 0.6)',
       zIndex:1
   },
   content:{
       height:280,
       backgroundColor:"#fff",
       position:'absolute',
       bottom:-15,
       width:'100%',
       borderTopLeftRadius:24,
       borderTopRightRadius:24,
       //alignItems:'center',
       paddingBottom:24,
       paddingHorizontal:24
   },
   line:{
       width:60,
       height:4,
       backgroundColor:'#D9D9D9',
       borderRadius:4,
       alignSelf:'center',
   },
   buttonHandler:{
    height:40,
    paddingTop:16,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:16
},
   content_input:{

   },
   title:{
    fontSize:20,
    fontFamily:'Mukta-Bold',
    alignSelf:'center',
    marginBottom:16
   },
   input:{
        borderBottomWidth:2,
        height:50,
        width:220,
        borderColor:"#414141",
        alignSelf:'center',
        fontSize:22,
        fontFamily:'Mukta-Bold',
        paddingHorizontal:12,
        marginBottom:40
   },
   text_button_Okay:{
        color:"#fff",
        fontFamily:'Mukta-SemiBold',
        fontSize:18
   },
   icon:{
    alignSelf:'center',
    marginBottom:12,
   },
   button_okay:{
    width:'94%',
    height:55,
    backgroundColor:"#1068B9",
    borderRadius:24,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:24,
    marginBottom:24
},

  
})

