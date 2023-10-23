import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionic from 'react-native-vector-icons/Ionicons'
import Home from './src/screen/Home';
import Categories from './src/screen/Categories';
import Saved from './src/screen/Saved';
import Seach from './src/screen/Seach';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer >
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === "Categories") {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === "Saved") {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === "Search") {
          iconName = focused ? 'search' : 'search-outline';
        }
        return <Ionic name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
    <Tab.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
    <Tab.Screen name="Search" component={Seach} options={{ headerShown: false }} />
  </Tab.Navigator>
</NavigationContainer>

  );
}


