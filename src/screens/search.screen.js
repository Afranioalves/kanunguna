import { useState, useEffect } from "react"
import { Text, View, Image, Pressable, ScrollView, Animated } from "react-native"
import {HeaderSearch} from "../components/header.component"
import { StatusBar } from "expo-status-bar"
import { styles } from "../styles/home.style"
import { AntDesign } from "@expo/vector-icons"
import { BoxProductCategory } from "../components/category.component"
import {categories} from '../data/category.data'
import { ProductCard } from "../components/product.component"
import { products } from "../data/product.data"
import * as NavigatorBar from 'expo-navigation-bar'

const Search = ({navigation})=>{

    const {navigate} = navigation

    const [value, setValue] = useState('')

    const searchProducts = products.filter((p)=> p.name.toString().toUpperCase().indexOf(value.toUpperCase()) > -1);
    const total = searchProducts.length

    NavigatorBar.setBackgroundColorAsync('#fff')

    
    const handleGetProducts = () =>{
        return searchProducts.map((product, index)=>{
            return(
                <ProductCard
                    key={index} 
                    qtdStar={product.stars}
                    productName={product.name}
                    priceNow={product.priceNow}
                    priceOld={product.priceOld}
                    discount={product.discount}
                    liked={product.liked}
                    image={product.image}
                />
            )
        })
    }

    const tab = navigation.getParent()

    useEffect(()=>{
        tab.setOptions({tabBarStyle:{display: 'none'}})
    },[])
    
    return(
        <View style={styles.container}>
           <HeaderSearch navigation={navigation} value={value} setValue={setValue}/>
            <ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    scrollEventThrottle={16}
                >
            
                <View style={{paddingHorizontal:16, marginTop:-12, marginBottom:16}}>
                    <Text style={[styles.title_section]}>{value.length == 0 ? null : `${total} resultados` } </Text>
                </View>
                <View style={styles.contentProduct}>
                    {value.length == 0 ? null : handleGetProducts()}
                </View>
                        
                
            </ScrollView>
        </View>
    )
}

export default Search