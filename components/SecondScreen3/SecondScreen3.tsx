import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const SecondScreen3 = () => {
  return (
    <SafeAreaView>
      <Text style={styles.secondScreeni}>Cart</Text>
    </SafeAreaView>
  );
};
export default SecondScreen3;

const styles = StyleSheet.create({
  secondScreeni: {
    color: 'darkblue',
    fontSize: 20,
  },
});
