import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeModules} from 'react-native';

const {GetSoundModule} = NativeModules;

const Screen2 = ({route}: {route: any}) => {
  console.log(route);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  const startSound = (type: any) => {
    console.log('start sound');
    if (type === 'notif') {
      GetSoundModule.startSound('sound_alert');
    } else {
      GetSoundModule.startSound('my_alert_sound');
    }
  };
  const stopSound = () => {
    console.log('stop sound');
    GetSoundModule.stopSound();
  };
  return (
    <SafeAreaView style={styles.screen1}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icons
          name={'arrow-back-outline'}
          color={'darkblue'}
          size={20}
          onPress={goBack}
        />
        <Text style={{fontSize: 22, color: 'darkblue'}}>Home 2</Text>
      </View>
      {/* {route.params != undefined ? (
        route.params.data.filterValue.length > 0 && (
          <View>
            <View style={{marginLeft: 20, marginTop: 10}}>
              {route.params.data.filterValue &&
                route.params.data.filterValue.map((item: any, index: any) => (
                  <Text style={{fontSize: 22, color: 'darkblue'}} key={index}>
                    {item}
                  </Text>
                ))}
            </View>
          </View>
        )
      ) : ( */}
      <View>
        <Pressable onPress={startSound}>
          <Text style={{color: 'red'}}>Start Sound</Text>
        </Pressable>
        <Pressable onPress={() => startSound('notif')}>
          <Text style={{color: 'red'}}>Start Notification</Text>
        </Pressable>
        <Pressable onPress={stopSound}>
          <Text>Stop Sound</Text>
        </Pressable>
      </View>
      {/* )} */}
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  screen1: {
    margin: 10,
  },
});
