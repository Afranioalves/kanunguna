import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login.screen";
import Intro from "../screens/intro.screen";

const Stack = createNativeStackNavigator()

const AuthStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName="Intro"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Intro" component={Intro}/>
            <Stack.Screen name="Sign-in" component={Login}/>   
        </Stack.Navigator>
    )
}

export default AuthStack