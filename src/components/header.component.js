import {Text, View, TextInput, StyleSheet, Pressable, Animated} from 'react-native'
import { colors } from '../styles/global.style'
import { Feather, Octicons } from '@expo/vector-icons';

const Header = ({scrollY}) =>{

    const diffClamp = Animated.diffClamp(scrollY,0,50)

    const translateY = diffClamp.interpolate({
        inputRange:[0, 50],
        outputRange:[0, -50],
        //extrapolate:'clamp'
    })
    const height = diffClamp.interpolate({
        inputRange:[0, 150],
        outputRange:[150, 50],
        //extrapolate:'clamp'
    })
    const opacity = diffClamp.interpolate({
        inputRange:[0, 50],
        outputRange:[1, 0],
        
    })
    const marginBottom = diffClamp.interpolate({
        inputRange:[0, 1],
        outputRange:[4, 0],
    })
  

    return(
        <Animated.View 
            style={[styles.container,
            {
              
                height,
              
               
            }
            ]}
        >

            <Animated.View style={[styles.header]}>
                <Pressable style={styles.buttonIcon}>
                    <Feather name="menu" size={26} color="#fff" />
                </Pressable>
                <Text style={styles.app_name}>Kanunguna</Text>
                <Pressable style={styles.buttonIcon}>
                    <Octicons name="bell-fill" size={21} color="#fff" />
                </Pressable>
                
            </Animated.View>
            <Animated.View style={[styles.button_search,{opacity,transform:[{ translateY }]}]}>
                <Feather name="search" size={22} color="#939393" style={styles.icon_search}/>
                <Text style={styles.text}>O que você precisa ?</Text>
            </Animated.View>
            
        </Animated.View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.second,
        //height:150,
        paddingTop:48,
        paddingHorizontal:16,
        marginBottom:24
       
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonIcon:{
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
    },
    app_name:{
        fontSize:20,
        fontFamily:'Poppins-SemiBold',
        color:"#fff"
    },
    button_search:{
        marginTop:32,
        height:55,
        backgroundColor:'#fff',
        borderRadius:30,
        paddingHorizontal:24,
        flexDirection:'row',
        alignItems:'center',
        gap:16,
        /*elevation:12,
        shadowColor:'rgba(0,0,0,0.3)'*/
    },
    text:{
        color:"#939393",
        fontFamily:'Poppins-Medium',
    },
    icon_search:{
    
    }
})