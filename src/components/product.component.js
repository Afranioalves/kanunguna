import { Image, View, Text, StyleSheet, Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { colors } from "../styles/global.style";
import { currencyFormat } from "../utils/index.util";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';

export const ProductCard = ({
    qtdStar, productName='', 
    priceNow, priceOld, 
    discount=0, liked=false,
    image
}) =>{

    const renderStar = Array.from({ length: qtdStar }, (_, index) => (
        <Entypo name="star" size={14} color={colors.primary} key={index}/>
      ));
  
    return(
        <Pressable style={styles.container}>

            { discount != 0 ?  
                <LinearGradient  colors={['#1068B9', '#49BCF1']} style={styles.boxDiscount}>
                    <Text style={styles.text}>{discount}%</Text>
                </LinearGradient>
                : null
            }

            <View style={{position:'relative'}}>
                <Image source={image} style={styles.productImage}/>
                <Pressable style={styles.button_like}>
                    <AntDesign name={liked? 'heart':"hearto"} size={22} color={liked? '#49BCF1':"black"} />
                </Pressable>
            </View>
            
            <View style={styles.boxStars}>{ renderStar }</View>
            <View>
                <Text style={styles.productName}>
                {productName.length > 27 ? `${productName.substring(0,27)}...`:productName}
                </Text>
            </View>
            <View style={styles.boxPrice}>
                <Text style={styles.priceNow}>{currencyFormat(priceNow)}</Text>
                <Text style={styles.priceOld}>{currencyFormat(priceOld)}</Text>
            </View>
           
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'48%',
        marginBottom:24,
        position:'relative'
    },
    productImage:{
        width:'100%',
        height:134,
        objectFit:'cover',
        borderRadius:8
    },
    boxStars:{
        marginVertical:8,
        flexDirection:'row'
    },
    productName:{
        fontFamily:'Poppins-Medium'
    },
    boxPrice:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    priceNow:{
        fontFamily:'Poppins-SemiBold',
        color:colors.primary,
        fontSize:14,
        marginRight:4
    },
    priceOld:{
        fontFamily:'Poppins-Regular',
        color:'grey',
        fontSize:14,
        textDecorationLine:'line-through'
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
    }
})