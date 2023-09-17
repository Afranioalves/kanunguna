import { View, Pressable, StyleSheet, TextInput } from "react-native"
import { Entypo } from '@expo/vector-icons';

const Input = ({isPassword = false, placeholder, keyboard='default', value, setValue, isShow, setShow}) =>{

    const handleShow = () => isShow ? setShow(false) : setShow(true);
    
    return(
        <View style={{position:'relative'}}>
            { isPassword ?
            <Pressable style={styles.button_show} onPress={()=>handleShow()}>
                <Entypo name={isShow?'eye-with-line':"eye"} size={20} color="#776F6F" style={styles.iconEye}/>
            </Pressable> : null
            }
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={setValue}
                keyboardType={keyboard}
                secureTextEntry={isShow}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input:{
        backgroundColor:'#fff',
        height:55,
        borderRadius:8,
        paddingHorizontal:16,
        fontFamily:'Poppins-Regular',
    },
    button_show:{
        position:'absolute',
        zIndex:1,
        right:0,
        top:0,
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center'
       
    }
})