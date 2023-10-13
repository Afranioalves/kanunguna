import { useState } from "react"
import { Text, View, Image, Pressable, ScrollView, Animated } from "react-native"
import Header from "../components/header.component"
import { StatusBar } from "expo-status-bar"
import { styles } from "../styles/home.style"
import { ProductCard } from "../components/product.component"
import { products } from "../data/product.data"
import * as NavigatorBar from 'expo-navigation-bar'

const Favorite = ({navigation})=>{

    const {navigate} = navigation

    NavigatorBar.setBackgroundColorAsync('#fff')

    const productsFavorites = products.filter((item)=>item.liked==true)
    const total = productsFavorites.length
    
    const handleGetProducts = () =>{
        return productsFavorites.map((product, index)=>{
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
                    navigate={navigate}
                />
            )
        })
    }
    
    return(
        <View style={styles.container}>
           <Header title="Favoritos" navigate={navigate}/>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={{paddingHorizontal:16, marginTop:-8, marginBottom:16}}>
                    <Text style={styles.title_section}>{total < 9 ?`0${total}`: total} items</Text>
                </View>
                <View style={styles.contentProduct}>
                    {handleGetProducts()}
                </View> 
            </ScrollView>
        </View>
    )
}

export default Favorite