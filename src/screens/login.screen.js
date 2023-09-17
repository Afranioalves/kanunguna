import { useState } from "react"
import { View, Text, ScrollView, Pressable, TouchableOpacity} from "react-native"
import * as NavigatorBar from 'expo-navigation-bar'
import { colors } from "../styles/global.style"
import { styles } from "../styles/login.style"
import Input from "../components/input.component"
import Social from "../components/social.component"
import Facebook from '../../assets/img/icon/facebook.png'
import Google from '../../assets/img/icon/google.png'
import Apple from '../../assets/img/icon/apple.png'


const SignIn = () =>{
    NavigatorBar.setBackgroundColorAsync(colors.background)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isShow, setIsShow] = useState(true)
    const data = {email, password}

    const handleSignIn = () =>{
        console.log(data)
    }
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content_intro}>
                    <Text style={styles.text_greeting}>Olá</Text>
                    <Text style={styles.text_welcome}>Bem-vindo a App Kanunguna, inicie aqui a{`\n`}tua senção  para começar a usar o nosso app</Text>
                </View>
                <View style={styles.content_inputs}>

                    <Input placeholder='Digite o teu email' keyboard='email-address' value={email} setValue={setEmail} isShow={isShow}/>
                    <Input placeholder='Password' isPassword={true} value={password} setValue={setPassword} isShow={isShow} setShow={setIsShow}/>

                    <Pressable style={styles.button_recover}>
                        <Text style={styles.text_recover}>Esqueceu a password ?</Text>
                    </Pressable>

                    <TouchableOpacity style={styles.button_sign_in} onPress={()=>handleSignIn()}>
                        <Text style={styles.text_sign_in}>Entrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.text_or}>- ou -</Text>  
                </View>
                <View style={styles.contentSocial}>
                        <Social icon={Facebook}/>
                        <Social icon={Apple}/>
                        <Social icon={Google}/>
                </View> 
                <Pressable style={styles.contentInfo}>
                    <Text style={styles.text_info_1}>Não tens conta ?</Text>
                    <Text style={styles.text_info_2}>Crie agora</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}

export default SignIn