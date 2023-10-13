import {Text, View, TextInput, StyleSheet, Pressable, ImageBackground, Image} from 'react-native'
import background from '../../assets/img/shop/shop8.jpg'
import { colors } from '../styles/global.style'
import { Feather, Octicons, AntDesign } from '@expo/vector-icons';

const Header = ({navigation=undefined, title='Shopprite', navigate}) =>{

    return(
        <ImageBackground style={styles.container} source={background}>

            <Pressable style={styles.buttonLike}>
                <AntDesign name="hearto" size={22} color={"black"} />
            </Pressable>
            <View style={styles.header}>

                <View style={styles.contentHeader}>
                    <Pressable style={styles.buttonIcon} onPress={()=>navigate.goBack()}>
                        <AntDesign name="arrowleft" size={26} color="#fff" />
                    </Pressable>
                    <Pressable style={styles.button_search} onPress={()=>navigate('Search')}>
                        <Feather name="search" size={22} color="#939393" style={styles.icon_search}/>
                        <Text style={styles.text}>O que você precisa ?</Text>
                    </Pressable>

                </View>

                <View style={styles.contentStore}>
                    <Image source={background} style={styles.logoStore}/>
                    <View>
                        <Text style={styles.storeName}>{title}</Text>
                        <Text style={styles.textRank}>102 Avaliações | 1200 Produtos</Text>
                    </View>
                </View>
                
            </View>
            
        </ImageBackground>
    )
}



export default Header

const styles = StyleSheet.create({
    container:{
        height:180,
        objectFit:'cover',
       
    },
    header:{
        height:180,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        paddingTop:40,
        paddingHorizontal:16,
        marginBottom:2,
    },
    buttonIcon:{
        width:35,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4
    },
    storeName:{
        fontSize:20,
        fontFamily:'Mukta-Bold',
        color:"#fff"
    },
    button_search:{
        height:45,
        backgroundColor:'rgba(255,255,255, 0.8)',
        borderRadius:30,
        paddingHorizontal:24,
        flexDirection:'row',
        alignItems:'center',
        width:'82%',
        gap:16,
        /*elevation:12,
        shadowColor:'rgba(0,0,0,0.3)'*/
    },
    text:{
        color:"#939393",
        fontFamily:'Poppins-Medium',
    },
    input:{
        height:55,
        fontFamily:'Poppins-Medium',
        width:'90%'
    },
    contentHeader:{
        flexDirection:'row',
        gap:24,
        alignItems:'center'
    },
    logoStore:{
        width:50,
        height:50,
        objectFit:'cover',
        borderRadius:100,
    },
    contentStore:{
        flexDirection:'row',
        gap:16,
        marginTop:12,
        alignItems:'center'
    },
    textRank:{
        color:"#fafafa",
        fontFamily:'Mukta-Medium',
        marginTop:-6
    },
    buttonLike:{
        width:45,
        height:45,
        backgroundColor:'#fff',
        position:'absolute',
        zIndex:10,
        right:12,
        bottom:24,
        borderRadius:50,
        alignItems:"center",
        justifyContent:'center'
    }
})