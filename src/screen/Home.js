import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { data } from '../../data';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
const Home = () => {
  const { Categories, House } = data;
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <View>
          <Image style={{
            width: 50,
            height: 50,
          }}
            source={require('../img/categories/avatar.png')}
          />
        </View>
        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: 500
          }}>
            Home
          </Text>
        </View>
        <View style={{
          flexDirection: "row",
          gap: 10
        }}>
          <Image
            source={require('../img/icon/Add.png')}
          />
          <Image
            source={require('../img/icon/Map.png')}
          />
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: 'white' }} >
        <Text style={styles.title}>
          Categories
        </Text>
        <ScrollView horizontal={true}>
          {Categories.map((category) => (
            <View key={category.id} style={styles.box}>
              <Image source={category.img} style={styles.image} />
              <Text style={styles.text}>{category.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 5, backgroundColor: 'white' }} >
        <Text style={styles.title}>House</Text>
        <ScrollView
          contentContainerStyle={styles.box1}>
          {House.map((house) => (
            <View style={styles.column} key={house.id}>
              <Image source={house.img} style={styles.img} />
              <Text style={styles.name}>{house.name}</Text>
              <Text style={styles.des}>{house.address}</Text>
            </View>
          ))}
          <View style={{
            width: "100%",
            alignItems: 'center',
          }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Show all (7)</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
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
  },
  box: {
    borderWidth: 1,
    borderColor: '#E4E2E2',
    borderRadius: 5,
    margin: 5,
    width: 200,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  title: {
    padding: 10,
    fontSize: 22,
    color: '#000',
    fontWeight: '700'
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: '500'
  },
  name: {
    fontSize: 16,
    fontWeight: '500'
  },
  des: {
    fontSize: 14,
    color: "#888"
  },
  box1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    width: '50%',
    padding: 10,
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#20C065',
    borderRadius: 5,
    width: '90%',
  },
  buttonText: {
    color: '#20C065',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default Home;
