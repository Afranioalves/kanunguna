import { createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../screens/home.screen";

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

        </Stack.Navigator>
    )
}

export default HomeStack