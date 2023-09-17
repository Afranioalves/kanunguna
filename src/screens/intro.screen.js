import { View, Text, Image, TouchableOpacity,  } from 'react-native'
import Logo from '../../assets/img/logo.png'
import { styles } from '../styles/intro.style'
import { colors } from '../styles/global.style'
import * as NavigatorBar from 'expo-navigation-bar'

const Intro = ({navigation}) =>{

    const {navigate} = navigation
    NavigatorBar.setBackgroundColorAsync(colors.primary)

    return(
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.intro_text}>
                Bem-vindo a Kanunguna, compre aqui os {`\n`} produtos da banda de forma segura, a um {`\n`} bom preço!
            </Text>
            <TouchableOpacity style={styles.button_start} onPress={()=>navigate('Sign-in')}>
                <Text style={styles.text_button_start}>INICIAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Intro