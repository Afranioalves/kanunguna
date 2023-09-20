import { createNativeStackNavigator} from "@react-navigation/native-stack";

import Product from "../screens/product.screen";
import Category from "../screens/categories.screen";


const Stack = createNativeStackNavigator()

const ProductStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName="Category"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="Product" component={Product}/> 
            <Stack.Screen name="Category" component={Category}/>
            
        </Stack.Navigator>
    )
}

export default ProductStack