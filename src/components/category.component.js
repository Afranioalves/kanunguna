import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


export const BoxProductCategory = ({image, name}) =>{
    
    return(
        <Pressable>
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
    }
})