import { createNativeStackNavigator} from "@react-navigation/native-stack";

import Store from "../screens/store/index.screen";
import StoreProfile from "../screens/store/store.screen";

const Stack = createNativeStackNavigator()

const StoreStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName="Store"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="Store" component={Store}/>
            <Stack.Screen name="Store-profile" component={StoreProfile}/>  
            
        </Stack.Navigator>
    )
}

export default StoreStack