import { StyleSheet, View, Image, Text, Pressable } from "react-native"
import image from '../../assets/img/product_1.png'
import { products } from "../data/product.data"
import { ProductCard } from "./product.component"
import { AntDesign } from '@expo/vector-icons';

const Company = ({navigate}) =>{

       
    const handleGetProducts = () =>{
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
                />
            )
        })
    }
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={image} style={styles.img}/>
                <Pressable onPress={()=>navigate('Stores',{ screen: 'Store-profile' })}>
                    <View style={styles.boxName}>
                        <Text style={styles.name}>Ango Mart</Text>
                        <AntDesign name="arrowright" size={22} color="black"/>
                    </View>
                  
                    <Text style={styles.rank}>28.000 Avaliações positivas</Text>
                </Pressable>
            </View>
            <View style={styles.line}/>
            <Text style={styles.title}>Mais produtos da loja</Text>
            <View style={styles.contentProduct}>
                {handleGetProducts()}
            </View>
    
        </View>
    )
}

export default Company

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginTop:12,
       
      
    },
    content:{
        paddingTop:16,
        alignItems:'center',
        flexDirection:'row',
        gap:12,
        paddingHorizontal:16,
    },
    img:{
        width:60,
        height:60,
        borderRadius:50,
    },
    name:{
        fontSize:16,
        fontFamily:'Poppins-SemiBold',
    },
    rank:{
        fontFamily:'Mukta-Medium',
        color:'grey',
        marginTop:-4,
    },
    line:{
        height:1,
        backgroundColor:'#f1f1f1',
        width:'100%',
        marginTop:16
    },
    title:{
        fontFamily:'Poppins-SemiBold',
        marginHorizontal:16,
        marginTop:24,
        fontSize:14,
        marginBottom:16
       
    },
    contentProduct:{
        paddingHorizontal:16,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    boxName:{
        flexDirection:'row',
        gap:12,
    }
})