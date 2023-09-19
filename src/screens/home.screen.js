import { useState } from "react"
import { Text, View, Image, Pressable, ScrollView, Animated } from "react-native"
import Header from "../components/header.component"
import { StatusBar } from "expo-status-bar"
import { styles } from "../styles/home.style"
import { AntDesign } from "@expo/vector-icons"
import { BoxProductCategory } from "../components/category.component"
import {categories} from '../data/category.data'
import { ProductCard } from "../components/product.component"
import { products } from "../data/product.data"

const Home = ()=>{

    const scrollY = new Animated.Value(0)

    const handleScroll = (event)=>{
        const {contentOffset} = event;
        scrollY.setValue(contentOffset.y)
    }

    const handleGetCategories = () =>{
        return categories.slice(0,4).map((cat)=><BoxProductCategory image={cat.image} name={cat.name} key={cat.id}/>)
    }
    
    const handleGetProducts = () =>{
        return products.map((product, index)=>{
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
    
    return(
        <View style={styles.container}>
           <Header scrollY={scrollY}/>
            <Animated.ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    scrollEventThrottle={16}
                    onScroll={(e)=> handleScroll(e.nativeEvent)}
                >
                <View style={styles.contentSlider}/>

                <View style={styles.contentCategory}>

                        <View style={styles.box_info}>
                            <Text style={styles.title_section}>Categorias</Text>
                            <Pressable style={styles.button_view_all}>
                                <Text style={styles.text_view}>Ver todas</Text>
                                <AntDesign name="right" size={20} color="grey" />
                            </Pressable>
                        </View>

                        <ScrollView contentContainerStyle={styles.scrollCategory} horizontal showsHorizontalScrollIndicator={false}>
                            {handleGetCategories()}
                        </ScrollView>
                        <View style={{paddingHorizontal:16, marginTop:16, marginBottom:16}}>
                            <Text style={styles.title_section}>Produtos Recentes</Text>
                        </View>
                        <View style={styles.contentProduct}>
                           {handleGetProducts()}
                        </View>
                        
                </View>
            </Animated.ScrollView>
        </View>
    )
}

export default Home