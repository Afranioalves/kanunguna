import { Image, View, StyleSheet } from "react-native"

export const Slider = ({image}) =>{
    return(
        <View style={styles.contentSlider}>
            <Image source={image} style={styles.image}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    contentSlider:{
        height:120,
        marginHorizontal:16,
        borderRadius:18
    },
    image:{
        width:'100%',
        height:120,
        borderRadius:18,
        objectFit:'cover'
    }
})