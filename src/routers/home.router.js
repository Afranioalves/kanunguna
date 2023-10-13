import { createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../screens/home.screen";
import Search from "../screens/search.screen";
import Details from "../screens/details.screen";

const Stack = createNativeStackNavigator()

const HomeStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false,
            }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Search" component={Search}/>
            <Stack.Screen name="Detail" component={Details}/>  
             
            
        </Stack.Navigator>
    )
}

export default HomeStack