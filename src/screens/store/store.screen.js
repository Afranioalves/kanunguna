import { useState } from "react"
import { Text, View, Image, Pressable, ScrollView, Animated } from "react-native"
import Header from "../../components/_header"
import { StatusBar } from "expo-status-bar"
import { styles } from "../../styles/store.style"
import { AntDesign } from "@expo/vector-icons"
import { BoxProductCategory } from "../../components/category.component"
import {categories} from '../../data/category.data'
import { ProductCard } from "../../components/product.component"
import { products } from "../../data/product.data"
import * as NavigatorBar from 'expo-navigation-bar'
import Sliders from "../../components/_slider"


const Destaq = ({product}) =>{

    return(
        <View>
            <Sliders />
            <View style={styles.contentProduct}>
                {product()}
            </View>   
        </View>
    )
}


const Product = ({product}) =>{

    return(
        <View style={{marginTop:-24}}>
            <View style={styles.contentProduct}>
                {product()}
            </View>   
        </View>
    )
}

const Promotion = ({product}) =>{

    return(
        <View style={{marginTop:-24}}>
            <View style={styles.contentProduct}>
                {product()}
            </View>   
        </View>
    )
}



const StoreDetail = ({navigation})=>{

    const {navigate} = navigation
    const [tab, setTab] = useState(0)

    NavigatorBar.setBackgroundColorAsync('#fff')

    const handleGetProduct = () =>{
        return products.slice(0,6).map((product, index)=>{
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
    const handleGetAllProduct = () =>{
        return products.slice(0,10).map((product, index)=>{
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
    const handleGetPromotion = () =>{
        return products.slice(6,12).map((product, index)=>{
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

    const Render = [<Destaq product={handleGetProduct}/>, <Product product={handleGetAllProduct}/>, <Promotion product={handleGetPromotion}/>]
    
    return(
        <View style={styles.container}>
           <Header navigate={navigation} />
            <ScrollView
                    showsVerticalScrollIndicator={false} 
                    contentContainerStyle={styles.scrollContainer}
                    bounces={false}
                    scrollEventThrottle={16}
                >

                    <View style={styles.contentTab}>
                        <Pressable style={[styles.tab, {borderBottomWidth: tab == 0 ? 3 : 0}]} onPress={()=>setTab(0)}>
                            <Text style={[styles.title_tab,{color: tab == 0 ? '#000' :'grey'}]}>Destaque</Text>
                        </Pressable>
                        <Pressable style={[styles.tab, {borderBottomWidth: tab == 1 ? 3 : 0}]} onPress={()=>setTab(1)}>
                            <Text style={[styles.title_tab,{color: tab == 1 ? '#000' :'grey'}]}>Produtos</Text>
                        </Pressable>
                        <Pressable style={[styles.tab, {borderBottomWidth: tab == 2 ? 3 : 0}]} onPress={()=>setTab(2)}>
                            <Text style={[styles.title_tab,{color: tab == 2 ? '#000' :'grey'}]}>Promoção</Text>
                        </Pressable>
                        
                    </View>

                   {Render[tab]}
               
            </ScrollView>
            <StatusBar style="auto"/>
        </View>
    )
}

export default StoreDetail