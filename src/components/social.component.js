import { Pressable, Image, StyleSheet } from "react-native"

const Social = ({icon}) =>{
    return(
        <Pressable style={styles.button}>
            <Image source={icon}/>
        </Pressable>
    )
}

export default Social

const styles = StyleSheet.create({
    button:{
        width:65,
        height:60,
        borderRadius:6,
        borderWidth:1,
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center'
    }
})