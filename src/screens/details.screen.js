import { useEffect, useState } from 'react'
import {View, ImageBackground, Pressable, Text, ScrollView, TouchableOpacity} from 'react-native'
import { styles } from "../styles/detail.style"
import image from '../../assets/img/image2.png'
import { StatusBar } from 'expo-status-bar'
import { AntDesign, Entypo, Octicons } from '@expo/vector-icons'
import { currencyFormat } from '../utils/index.util'
import Company from '../components/card-company'
import { MaterialIcons } from '@expo/vector-icons';
import * as NavigatorBar from 'expo-navigation-bar'

const Details = ({navigation}) =>{

    NavigatorBar.setBackgroundColorAsync('#fff')
    const {navigate} = navigation

    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(2000)
    const [index, setIndex] = useState(1)

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

    const handleMinus = () =>{
        if(quantity == 1) return setQuantity(1)
        setQuantity(quantity-1)
    }

    const tab = navigation.getParent()

    useEffect(()=>{
        tab.setOptions({tabBarStyle:{display: 'none'}})
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                 <Pressable style={styles.buttonBack} onPress={()=>handleGoBack()}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                </Pressable>
                <Text style={styles.title}>Producto</Text>
                <Pressable style={styles.buttonIcon}>
                    <Octicons name="bell-fill" size={21} color="#fff" />
                </Pressable>
            </View>
            <ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    scrollEventThrottle={16}
            
                >
                <View style={styles.boxImage}>
                    <ImageBackground source={image} style={styles.productImage}/>
                </View>

            
                <View style={styles.contentInfo}>
                   
                    <View style={styles.contentRate}>
                        <View style={styles.boxStar}>
                            <AntDesign name="star" size={20} color="yellow" />
                            <Text style={styles.rate}>4.8</Text>
                        </View>
                        <View style={styles.boxPlusMinus}>
                                <Pressable style={styles.button} onPress={()=>handleMinus()}>
                                    <Text style={styles.textButton}>-</Text>
                                </Pressable>
                                <Text style={styles.total}>{quantity}</Text>
                                <Pressable style={styles.button} onPress={()=> setQuantity(quantity+1)}>
                                    <Text style={styles.textButton}>+</Text>
                                </Pressable>
                            </View>
                        
                    </View> 
                
                    <View>
                        <View style={styles.contentPrice}>
                            <Text style={styles.unit}>Preço por {quantity} unid:</Text>
                            <Text style={styles.price}>{currencyFormat(price*quantity)}</Text>
                        </View>
                            <Text style={styles.productName}>Sacola de Maça Ultra Mega</Text>
                            <View style={styles.boxButtonTab}>
                                <Pressable style={[styles.buttonTab,{borderBottomWidth:index == 1 ? 3 : 0}]} onPress={()=>setIndex(1)}>
                                    <Text style={[styles.textButtonTab, {color:index == 1 ? '#000' :'grey'}]}>Detalhes</Text>
                                </Pressable>
                                <Pressable style={[styles.buttonTab,{borderBottomWidth:index == 2 ? 3 : 0}]} onPress={()=>setIndex(2)}>
                                    <Text style={[styles.textButtonTab, {color:index == 2 ? '#000' :'grey'}]}>Descrição</Text>
                                </Pressable>
                            </View>
                       
                    </View>

                </View>
                <View style={styles.contentDescription}>
                    <Text style={styles.description}>
                            Lorem enim commodo laboris commodo ut magna. Exercitation. Velit adipisicing eiusmod enim esse culpa ex eu et ullamco consequat reprehenderit. Cupidatat qui non tempor aute fugiat veniam ea voluptate.
                    </Text>
                </View>
                <Company navigate={navigate}/>
            </ScrollView>

            <View style={styles.boxButtonCheckout}>
            
                 <TouchableOpacity style={styles.buttonAdd}>
                    <Text style={styles.textButtonCheckout}>Adicionar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBuy}>
                    <Text style={styles.textButtonCheckout}>Comprar</Text>
                </TouchableOpacity>
                
            </View>

            <StatusBar style='light'/>
        </View>
    )
}
export default Details