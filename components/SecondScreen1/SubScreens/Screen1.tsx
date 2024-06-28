import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import {NativeModules} from 'react-native';

const Bluetooth = NativeModules['BluetoothModule'];
Bluetooth.startDiscovery()
  .then((isDiscovering: any) => {
    if (isDiscovering) {
      console.log('Bluetooth discovery started successfully');
    } else {
      console.log('Failed to start Bluetooth discovery');
    }
  })
  .catch((error: any) => {
    console.error('Error starting Bluetooth discovery', error);
  });
const HelloWorld = NativeModules['HelloWorldModule'];
HelloWorld.getHelloFromNative((msg: any) => {
  console.log(msg);
});

const Screen1 = () => {
  const [inputValue, setInputValue] = useState<any>(null);
  const [unFilteredValue, setUnFilteredValue] = useState<number[]>([]);
  const [filterValue, setFilterValue] = useState<number[]>([]);
  const navigation = useNavigation<any>();
  const filterFunction = () => {
    if (unFilteredValue.length === 0) {
      Alert.alert('Please enter a value.');
      return;
    } else {
      const filter = unFilteredValue.filter(
        (item, index, array) => array.indexOf(item) === index,
      );
      console.log(filter.sort((a, b) => a - b));
      setFilterValue(filter.sort((a, b) => a - b));
    }
  };
  const onChangeText = (text: any) => {
    if (isNaN(text)) {
      Alert.alert('Only numbers are allowed.');
      return;
    } else {
      setInputValue(text);
    }
  };
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigate2 = () => {
    if (filterValue.length > 0) {
      navigation.navigate('Home2', {data: {filterValue}});
    } else {
      navigation.navigate('Home2');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.screen1} keyboardShouldPersistTaps="always">
        <View
          style={[
            styles.buttonContainer,
            {justifyContent: 'flex-end', gap: 3},
          ]}>
          <Text
            style={[styles.header, {textAlign: 'right'}]}
            onPress={navigate2}>
            Home2
          </Text>
          <Icons
            name="arrow-forward"
            size={20}
            color={'darkblue'}
            onPress={navigate2}
          />
        </View>
        <View>
          <TextInput
            editable
            inputMode="numeric"
            value={inputValue}
            onChangeText={onChangeText}
            placeholder="Enter Value"
            placeholderTextColor={'grey'}
            style={styles.inputField}
            onSubmitEditing={() => {
              if (inputValue === null || inputValue === '') {
                Alert.alert('Please enter a value.');
                return;
              } else {
                setUnFilteredValue([...unFilteredValue, inputValue]);
                setInputValue('');
              }
            }}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setInputValue('')}>
            <Icons name="close" color={'grey'} size={25} />
          </TouchableOpacity>
        </View>
        {unFilteredValue &&
          unFilteredValue.map((item, index) => (
            <Text style={styles.arrayFontStyle} key={index}>
              {item}
            </Text>
          ))}
        <View
          style={[styles.buttonContainer, {justifyContent: 'space-around'}]}>
          <Pressable
            onPress={() => {
              if (inputValue === null || inputValue === '') {
                Alert.alert('Please enter a value.');
                return;
              } else {
                setUnFilteredValue([...unFilteredValue, inputValue]);
                setInputValue('');
              }
            }}
            style={styles.buttonStyle}>
            <Text style={styles.textstyle}>Add to Filter</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setUnFilteredValue([]);
              setFilterValue([]);
            }}
            style={styles.buttonStyle}>
            <Text style={styles.textstyle}>Clear</Text>
          </Pressable>
        </View>
        <View
          style={[styles.buttonContainer, {justifyContent: 'space-around'}]}>
          <Pressable onPress={filterFunction} style={styles.buttonStyle}>
            <Text style={styles.textstyle}>Filter Repition</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setFilterValue([]);
            }}
            style={styles.buttonStyle}>
            <Text style={styles.textstyle}>Clear</Text>
          </Pressable>
        </View>
        {filterValue && (
          <View>
            {filterValue.map((item, index) => (
              <Text style={styles.arrayFontStyle} key={index}>
                {item}
              </Text>
            ))}
            <Pressable onPress={navigate2} style={styles.buttonStyle}>
              <Text style={styles.textstyle}>Screen 2</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  screen1: {
    margin: 10,
  },
  header: {
    color: 'darkblue',
    fontSize: 20,
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: 'darkblue',
    marginTop: 10,
    padding: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textstyle: {
    textAlign: 'center',
  },
  arrayFontStyle: {
    fontSize: 22,
    color: 'darkblue',
    marginLeft: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 27,
  },
});
