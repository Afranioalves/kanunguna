
import { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
import AuthStack from './auth.router';
import HomeStack from './home.router';



const Tab = createBottomTabNavigator();



const Route = () =>{

  const[isAuthenticated, setIsAuthenticated] = useState(true)
  
  return (
    <>
      <NavigationContainer>
        { isAuthenticated ? 
          <Tab.Navigator
              initialRouteName='Principal'
              screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'#000',
                tabBarInactiveTintColor:'#777373',
                tabBarStyle: { 
                  backgroundColor: '#fff',
                  borderTopColor:'transparent',
                  paddingVertical:12,
                  height:60,
                },
              }}
          >
                  <Tab.Screen 
                      name="Principal" 
                      component={HomeStack}
                      options={({route})=>({
                        tabBarIcon: ({size, color})=> <FontAwesome name="dashcube" size={size} color={color} />,
                        tabBarLabel:'Inicio',
                        tabBarLabelStyle:{
                          fontFamily:"Mukta-SemiBold",
                          fontSize:12
                        }
                      })}  
                  />

                  <Tab.Screen 
                      name="Alarm" 
                      component={HomeStack}
                      options={({route})=>({
                        tabBarIcon: ({size, color})=> <Ionicons name="grid" size={24} color={color} />,
                        tabBarLabel:'Produtos',
                        tabBarLabelStyle:{
                          fontFamily:"Mukta-SemiBold",
                          fontSize:12
                        }
                      })}  
                  />

                <Tab.Screen 
                      name="Export" 
                      component={HomeStack}
                      options={({route})=>({
                        tabBarIcon: ({size, color})=> <AntDesign name="heart" size={size} color={color} />,
                        tabBarLabel:'Favoritos',
                        tabBarLabelStyle:{
                          fontFamily:"Mukta-SemiBold",
                          fontSize:12
                        }
                      })}  
                  />

              <Tab.Screen 
                      name="Profile" 
                      component={HomeStack}
                      options={({route})=>({
                        tabBarIcon: ({size, color})=> <FontAwesome name="user" size={size} color={color} />,
                        tabBarLabel:'Perfil',
                        tabBarLabelStyle:{
                          fontFamily:"Mukta-SemiBold",
                          fontSize:12
                        }
                      })}  
                  />

          </Tab.Navigator> :
          <AuthStack />
        }
      </NavigationContainer>
    </>

    
       
  );
}


export default Route