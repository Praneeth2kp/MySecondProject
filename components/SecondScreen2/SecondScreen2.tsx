import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const SecondScreen2 = ({route}: {route: any}) => {
  if (route.params !== undefined) {
    console.log(route);
    console.log(route.params.data.array1);
  }
  return (
    <SafeAreaView style={{margin: 10}}>
      <Text style={styles.secondScreeni}>Account Details</Text>
      {route.params !== undefined &&
        route.params.data.array1 &&
        route.params.data.array1.map((item: any, index: any) => (
          <Text style={styles.secondScreeni} key={index}>
            {item}
          </Text>
        ))}
    </SafeAreaView>
  );
};
export default SecondScreen2;

const styles = StyleSheet.create({
  secondScreeni: {
    color: 'darkblue',
    fontSize: 20,
  },
});
