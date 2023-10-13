import { StyleSheet, View, Text } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export const CartIcon = () =>{
    return(
        
          <LinearGradient  colors={['#1068B9', '#49BCF1']} style={styles.container}>
                <View style={styles.boxTotal}><Text style={styles.qtd}>0</Text></View>
                <MaterialCommunityIcons name="cart" size={26} color="#fff" />
          </LinearGradient>

      
    )
}

const styles = StyleSheet.create({
    container:{
        width:50,
        height:50,
        backgroundColor:'red',
        borderRadius:80,
        alignItems:'center',
        justifyContent:'center',
        position:'relative'
    },
    boxTotal:{
        position:'absolute',
        zIndex:1,
        top:-6,
        right:-8,
        height:26,
        width:26,
        backgroundColor:'#fff',
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        elevation:8

    },
    qtd:{
        color:"#1068B9",
        fontFamily:'Mukta-Bold'
    }
})