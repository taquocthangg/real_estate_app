import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Catagories = () => {
  return (
    <View styles={styles.container}>
      <Text styles={{backgroundColor:'red'}}>
        Hí hí
      </Text>
      <Text styles={{backgroundColor:'red'}}>
        Hí hí
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
  },
})

export default Catagories;
