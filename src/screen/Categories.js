import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { data } from '../../data';
const Catagories = () => {
  const { Categories } = data;
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Text style={{
          fontSize: 20,
          fontWeight: 500
        }}>
          Catagories
        </Text>
      </View>
      <View style={styles.test} >
        <ScrollView>
          {Categories.map((category) => (
            <View key={category.id} style={styles.box}>
              <Image source={category.img} style={styles.image} />
              <Text style={styles.text}>{category.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E1DEDE',
    height: 70
  },
  image: {
    height: 150,
  },
  test: {
    padding: 10,
    marginTop: 10,
    paddingBottom: 185
  },
  box: {
    position: 'relative',
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    color: 'white',
    padding: 5,
    fontSize: 20,
    fontWeight: '700'
  },
})

export default Catagories;
