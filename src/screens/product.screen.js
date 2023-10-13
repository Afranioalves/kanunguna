import { useState } from "react"
import { Text, View, Image, Pressable, ScrollView, Animated } from "react-native"
import Header from "../components/header.component"
import { StatusBar } from "expo-status-bar"
import { styles } from "../styles/home.style"
import { AntDesign } from "@expo/vector-icons"
import { BoxProductCategory, SubCategory } from "../components/category.component"
import {categories} from '../data/category.data'
import { ProductCard } from "../components/product.component"
import { products } from "../data/product.data"
import * as NavigatorBar from 'expo-navigation-bar'

const Product = ({navigation})=>{

    const {navigate} = navigation

    NavigatorBar.setBackgroundColorAsync('#fff')

    const [row, setRow] = useState(0)


    const handleGetSubCategories = () =>{
        return categories[0].subCategory.map((sub, index)=>{
        return(
            <SubCategory 
                name={sub.name} 
                key={sub.id} 
                backgroundColor={index==row?'#0395FF':'#fff'}
                color={index==row?'#fff':'grey'}
                setIndex={()=>setRow(index)}
             />
        )
        })
    }
    
    const handleGetProducts = () =>{
        return products.slice(6).map((product, index)=>{
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
           <Header navigation={()=>navigation.goBack()} title="Produtos" navigate={navigate}/>
            <ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    scrollEventThrottle={16}
                    
                >
               
                <View style={styles.contentCategory}>
                        <ScrollView contentContainerStyle={styles.scrollCategory} horizontal showsHorizontalScrollIndicator={false}>
                            {handleGetSubCategories()}
                        </ScrollView>
                        <View style={{paddingHorizontal:16, marginTop:16, marginBottom:16}}>
                            <Text style={styles.title_section}>{products.length} items</Text>
                        </View>
                        <View style={styles.contentProduct}>
                           {handleGetProducts()}
                        </View>
                        
                </View>
            </ScrollView>
        </View>
    )
}

export default Product