import { useState } from "react"
import { Text, View, Image, Pressable, ScrollView, Animated } from "react-native"
import Header from "../../components/header.component"
import { StatusBar } from "expo-status-bar"
import { styles } from "../../styles/store.style"
import { AntDesign } from "@expo/vector-icons"
import { BoxProductCategory } from "../../components/category.component"
import {categories} from '../../data/category.data'
import { StoreCard } from "../../components/store.component"
import { stores } from "../../data/store.data"
import * as NavigatorBar from 'expo-navigation-bar'

const Store = ({navigation})=>{

    const {navigate} = navigation

    NavigatorBar.setBackgroundColorAsync('#fff')

    const handleGetStore = () =>{
        return stores.map((store, index)=>{
            return(
                <StoreCard
                    key={index} 
                    storeName={store.name}
                    image={store.image}
                    navigate={navigate}
                    productQtd={store.products}
                />
            )
        })
    }
    
    return(
        <View style={styles.container}>
           <Header navigate={navigate} title="Lojas"/>
            <ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    scrollEventThrottle={16}
                >
            
                    <View style={{paddingHorizontal:16, marginTop:-10, marginBottom:16}}>
                        <Text style={styles.title_section}>Nossas Lojas - 008</Text>
                    </View>
                    <View style={[styles.contentProduct, {marginTop:0}]} >
                        {handleGetStore()}
                    </View>   
               
            </ScrollView>
            <StatusBar style="auto"/>
        </View>
    )
}

export default Store