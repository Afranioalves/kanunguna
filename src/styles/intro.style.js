import { StyleSheet } from "react-native";
import { colors } from "./global.style";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary
    },
    logo:{
        width:100,
        height:140,
        objectFit:'contain',
        marginBottom:24
    },
    intro_text:{
        color:"#fff",
        fontFamily:'Poppins-Regular',
        textAlign:'center',
        fontSize:14,
        lineHeight:24
    },
    button_start:{
        backgroundColor:"#fff",
        width:200,
        height:55,
        marginTop:76,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    text_button_start:{
        fontFamily:'Mukta-ExtraBold',
        fontSize:20,
        color:colors.primary
    }
})