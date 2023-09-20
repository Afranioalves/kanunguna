import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native'
import { colors } from '../styles/global.style'
import { Feather, Octicons, AntDesign } from '@expo/vector-icons';

const Header = ({navigation=undefined, title='Kanunguna', navigate}) =>{

    return(
        <View style={styles.container}>

            <View style={[styles.header]}>
                {
                    navigation != undefined ? 
                    <Pressable style={styles.buttonIcon} onPress={()=>navigation()}>
                        <AntDesign name="arrowleft" size={26} color="#fff" />
                    </Pressable> :
                    <Pressable style={styles.buttonIcon}>
                        <Feather name="menu" size={26} color="#fff" />
                    </Pressable>
                }
                
                <Text style={styles.app_name}>{title}</Text>
                <Pressable style={styles.buttonIcon}>
                    <Octicons name="bell-fill" size={21} color="#fff" />
                </Pressable>
                
            </View>
            <Pressable style={styles.button_search} onPress={()=>navigate('Search')}>
                <Feather name="search" size={22} color="#939393" style={styles.icon_search}/>
                <Text style={styles.text}>O que você precisa ?</Text>
            </Pressable>
            
        </View>
    )
}


export const HeaderSearch = ({navigation=undefined, title='Kanunguna', value, setValue}) =>{

    const tab = navigation.getParent()

    const handleGoBack = () =>{
        tab.setOptions({tabBarStyle:{
            display: 'flex',
            backgroundColor: '#fff',
            borderTopColor:'transparent',
            paddingVertical:12,
            height:60,
        }})
        navigation.goBack()
    }

    return(
        <View style={styles.container}>

            <View style={[styles.header]}>
                {
                    navigation != undefined ? 
                    <Pressable style={styles.buttonIcon} onPress={()=>handleGoBack()}>
                        <AntDesign name="arrowleft" size={26} color="#fff" />
                    </Pressable> :
                    <Pressable style={styles.buttonIcon}>
                        <Feather name="menu" size={26} color="#fff" />
                    </Pressable>
                }
                
                <Text style={styles.app_name}>{title}</Text>
                <Pressable style={styles.buttonIcon}>
                    <Octicons name="bell-fill" size={21} color="#fff" />
                </Pressable>
                
            </View>
            <View style={styles.button_search}>
                <Feather name="search" size={22} color="#939393" style={styles.icon_search}/>
                <TextInput 
                    style={styles.input} 
                    placeholder='O que você precisa ?'
                    autoFocus={true}
                    value={value}
                    cursorColor="#0395FF"
                    onChangeText={setValue}
                    returnKeyType='done'
                />
            </View>
            
        </View>
    )
}






export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.second,
        height:150,
        paddingTop:48,
        paddingHorizontal:16,
        marginBottom:27
       
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
    input:{
        height:55,
        fontFamily:'Poppins-Medium',
        width:'90%'
    }
})