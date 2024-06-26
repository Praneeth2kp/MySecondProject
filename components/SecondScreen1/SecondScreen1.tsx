import {StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './SubScreens/Screen1';
import Screen2 from './SubScreens/Screen2';

const SecondScreen1 = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName="Screen1">
      <HomeStack.Screen
        name="Home1"
        component={Screen1}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Home2"
        component={Screen2}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
export default SecondScreen1;

const styles = StyleSheet.create({
  secondScreeni: {
    color: 'darkblue',
    fontSize: 20,
  },
});
