import { Image, View, Text, StyleSheet, Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { colors } from "../styles/global.style";
import { currencyFormat } from "../utils/index.util";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';

export const StoreCard = ({storeName='', image, navigate, liked, productQtd}) =>{

  
    return(
        <Pressable style={styles.container} onPress={()=>navigate('Store-profile')}>

            <View style={styles.contentImage}>
                <Image source={image} style={styles.storeImage}/>
                <Pressable style={styles.button_like}>
                    <AntDesign name={liked? 'heart':"hearto"} size={22} color={liked? '#49BCF1':"black"} />
                </Pressable>
            </View>
            
            <View>
                <Text style={styles.storeName}>
                    {storeName.length > 27 ? `${storeName.substring(0,27)}...`:storeName}
                </Text>
            </View>
            <View style={styles.boxQtd}>
                <Text style={styles.qtd}>{productQtd}</Text>
                <Text style={styles.desc}>produtos</Text>
            </View>
           
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'48%',
        marginBottom:24,
        position:'relative',
       
    },
    storeImage:{
        width:'100%',
        height:134,
        objectFit:'contain',
        borderRadius:8
    },
    boxStars:{
        marginVertical:8,
        flexDirection:'row'
    },
    storeName:{
        fontFamily:'Poppins-SemiBold',
        fontSize:15,
        marginTop:12
    },
    boxQtd:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    qtd:{
        fontFamily:'Poppins-SemiBold',
        color:colors.primary,
        fontSize:14,
        marginRight:4
    },
    desc:{
        fontFamily:'Poppins-Regular',
        color:'grey',
        fontSize:14,
    },
    boxDiscount:{
        height:35,
        width:60,
        position:'absolute',
        zIndex:1,
        top:16,
        borderTopRightRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontFamily:'Mukta-SemiBold',
        fontSize:14,
        color:"#fff"
    },
    button_like:{
        width:42,
        height:42,
        backgroundColor:'#fff',
        borderRadius:100,
        alignSelf:'flex-end',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:-16,
        right:12,
        elevation:6,
        shadowColor:'rgba(0,0,0,0.3)'
    },
    contentImage:{
        backgroundColor:'#fff',
        width:'100%',
        height:134,
        borderRadius:8
    }
})