import { useState } from "react"
import { Text, View, Image, Pressable, ScrollView, Animated } from "react-native"
import Header from "../components/header.component"
import { StatusBar } from "expo-status-bar"
import { styles } from "../styles/home.style"
import { AntDesign } from "@expo/vector-icons"
import { BoxProductCategory, CardCategory } from "../components/category.component"
import {categories} from '../data/category.data'
import { ProductCard } from "../components/product.component"
import { products } from "../data/product.data"
import * as NavigatorBar from 'expo-navigation-bar'


const Category = ({navigation})=>{

    const {navigate} = navigation

    NavigatorBar.setBackgroundColorAsync('#fff')

    const handleGetCategories = () =>{
        return categories.map((cat)=><CardCategory image={cat.image} name={cat.name} key={cat.id} navigate={navigate}/>)
    }
    
    return(
        <View style={styles.container}>
           <Header navigation={()=>navigation.goBack()} title="Categorias" navigate={navigate}/>
            <ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    scrollEventThrottle={16}
                >
               
                {handleGetCategories()}
                
            </ScrollView>
        </View>
    )
}

export default Category