import { StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Slider } from './slider.component'
import { sliders } from '../data/slider.data'

const Sliders = () =>{

    const RenderSlider = ({item}) =>{
        return(
            <Slider image={item.image}/>
        )
    }

    return(
        <AppIntroSlider 
            data={sliders}
            renderItem={RenderSlider}
            showSkipButton={false}
            showDoneButton={false}
            showNextButton={false}
            dotStyle={styles.dots}
            activeDotStyle={styles.activeDots}
        
        />
    )

}

export default Sliders

const styles = StyleSheet.create({
    dots:{
        width:30,
        height:4,
        backgroundColor:'#CDC7C7',
        marginTop:112
    },
    activeDots:{
        width:30,
        height:4,
        backgroundColor:'#1C79C4',
        marginTop:112
    }
})