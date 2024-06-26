import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SecondScreen1 from '../components/SecondScreen1/SecondScreen1';
import SecondScreen2 from '../components/SecondScreen2/SecondScreen2';
import SecondScreen3 from '../components/SecondScreen3/SecondScreen3';
import SecondScreen4 from '../components/SecondScreen4/SecondScreen4';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'darkblue',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen
        name="Home"
        component={SecondScreen1}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={SecondScreen2}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={SecondScreen3}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={SecondScreen4}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              name={focused ? 'chatbox' : 'chatbox-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;

// screenOptions={({route}) => ({
//   tabBarIcon: ({focused, color, size}) => {
//     let iconName;
//     if (route.name === 'Home') {
//       iconName = focused ? 'home' : 'home-outline';
//     } else if (route.name === 'About') {
//       iconName = focused ? 'person' : 'person-outline';
//     } else if (route.name === 'Cart') {
//       iconName = focused ? 'settings' : 'settings-outline';
//     } else if (route.name === 'Account') {
//       iconName = focused ? 'chatbox' : 'chatbox-outline';
//     }
//     return <Ionicons name={iconName || ''} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'green', // Set active tab color
//   tabBarInactiveTintColor: 'grey', // Set inactive tab color
// })}
