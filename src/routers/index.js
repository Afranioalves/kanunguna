
import { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import AuthStack from './auth.router';
import HomeStack from './home.router';



const Tab = createBottomTabNavigator();



const Route = () =>{

  const[isAuthenticated, setIsAuthenticated] = useState(false)
  
  return (
    <>
      <NavigationContainer>
        { isAuthenticated ? 
          <Tab.Navigator
              initialRouteName='Principal'
              screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'#3580FF',
                tabBarInactiveTintColor:'#4D4D4E',
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
                        tabBarLabel:'Home',
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
                        tabBarIcon: ({size, color})=> <AntDesign name="clockcircle" size={24} color={color} />,
                        tabBarLabel:'Lembrete',
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
                        tabBarIcon: ({size, color})=> <MaterialCommunityIcons name="file-export" size={size} color={color} />,
                        tabBarLabel:'Exportar',
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