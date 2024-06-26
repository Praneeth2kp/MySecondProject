import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const SecondScreen4 = () => {
  return (
    <SafeAreaView>
      <Text style={styles.secondScreeni}>Chat</Text>
    </SafeAreaView>
  );
};
export default SecondScreen4;

const styles = StyleSheet.create({
  secondScreeni: {
    color: 'darkblue',
    fontSize: 20,
  },
});
