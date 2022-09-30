import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//importamos la librería que me permite trabajar con íconos
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title:'Inicio',tabBarIcon:({color,size})=>(
          <Ionicons name="home" color={'orange'} size={20}/>
        )}}
        />        
        <Tab.Screen
        name="Settings"
        component={SettingScreens}
        options={{title:'Settings',tabBarIcon:({color,size})=>(
          <Ionicons name="construct-outline" color={'orange'} size={20}/>
        )}}
        /> 
        <Tab.Screen
        name="Contacts"
        component={ContactsScreens}
        options={{title:'Contáctenos',tabBarIcon:({color,size})=>(
          <Ionicons name="chatbox-ellipses-outline" color={'orange'} size={20}/>
        )}}
        /> 
        <Tab.Screen
        name="Shop"
        component={ShopScreens}
        options={{title:'Tienda',tabBarIcon:({color,size})=>(
          <Ionicons name="card-outline" color={'orange'} size={20}/>
        )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//Creamos el componente HomeScreen que usamos en el Tab:Screen

function HomeScreen() {
  return(
    <View style={styles.container}>
      <Text>Inicio</Text>
    </View>
  )
}

function SettingScreens() {
  return(
    <View style={styles.container}>
      <Text>Settings</Text>
    </View>
  )
}

const ContactsScreens =()=>{
  return(
    <View  style={styles.container}>
      <Text>Contáctenos</Text>
    </View>
  )
}

const ShopScreens =()=>{
  return(
    <View  style={styles.container}>
      <Text>Tienda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
