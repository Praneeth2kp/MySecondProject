import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MyTabs from './TabNavBar/MyTabs';

const App = () => {
  return (
    <View style={{height: '100%'}}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
};

export default App;
