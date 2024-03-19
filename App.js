import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home, Portfolio, Settings } from './screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOption = {
  tabBarShowLabel: false,
  headerShows: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Portfolio" component={Portfolio} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="home" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 12, color: "#16247d" }}>Home</Text>
              </View>
            )
          }
        }} />
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons name="wallet" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 12, color: "#16247d" }}>Wallet</Text>
              </View>
            )
          }
        }}/>
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="settings" size={24} color={focused ? "#16247d" : "#111"} />
                <Text style={{ fontSize: 12, color: "#16247d" }}>Settings</Text>
              </View>
            )
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
