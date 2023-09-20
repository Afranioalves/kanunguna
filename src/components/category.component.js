import {View, Text, StyleSheet, ImageBackground, Pressable, Image} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


export const BoxProductCategory = ({image, name, navigate}) =>{

    
    return(
        <Pressable onPress={()=>navigate('Products',{ screen: 'Product' })}>
            <ImageBackground source={image} style={styles.boxContent} borderRadius={8}>
                <LinearGradient 
                    style={styles.box}
                    colors={['rgba(29, 124, 198, 0.9)', 'rgba(77, 190, 236, 0.8)']}
                >

                <Text style={styles.categoryName}>{name}</Text>

                </LinearGradient>
            </ImageBackground>
        </Pressable>
    )
}

export const CardCategory = ({image, name, navigate})=>{
    return(
        <Pressable style={styles.container} onPress={()=>navigate('Product')}>
            <Text style={styles.name}>{name}</Text>
            <Image source={image} style={styles.imageCategory}/>
        </Pressable>
    )
}

export const SubCategory = ({name, backgroundColor, setIndex, color})=>{
    return(
        <Pressable style={[styles.subContent, {backgroundColor}]} onPress={()=>setIndex()}>
            <Text style={[styles.subName,{color}]}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box:{
        height:70,
        width:130,
        borderRadius:8,
        padding:12,
        justifyContent:'center',

    },
    boxContent:{
        height:70,
        width:130,
        
    },
    categoryName:{
        fontSize:16,
        color:"#fff",
        fontFamily:'Mukta-SemiBold',
        textAlign:'center',
        fontSize:16,
        lineHeight:18,
        paddingTop:4
    },
    container:{
        backgroundColor:"#fff",
        height:70,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:16,
        paddingLeft:24,
        elevation:8,
        shadowColor:'rgba(0,0,0,0.2)',
        borderRadius:8,
        marginBottom:16
    },
    imageCategory:{
        width:70,
        height:70,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        objectFit:'contain'
    },
    name:{
        fontFamily:'Mukta-Bold',
        fontSize:18
    },
    subContent:{
        paddingHorizontal:12,
        paddingVertical:4,
        //backgroundColor:'#fff',
        borderRadius:8
    },
    subName:{
        fontFamily:'Mukta-Medium',
        fontSize:16
    },

})