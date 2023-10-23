import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { data } from '../../data';
import { ScrollView } from 'react-native';
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
      <View style={{ flex: 5, backgroundColor: 'blue' }} >
            <Text style={styles.title}>House</Text>
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
    borderBottomColor: 'gray',
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
  title:{
    padding:10,
    fontSize: 22,
    color:'#000',
    fontWeight: '700'
  },
  text: {
    padding:10,
    fontSize: 20,
    color:'#000',
    fontWeight:'500'
  },
});

export default Home;
