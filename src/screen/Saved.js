import { Text, View, Image, ScrollView, StyleSheet ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { data } from '../../data';
export default class Saved extends Component {
  render() {
    const {House} = data;
    return (
      <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{
          fontSize: 20,
          fontWeight: 500
        }}>
          Saved Items
        </Text>
      </View>
        <View style={{ flex: 5, backgroundColor: 'white' }} >
          <ScrollView
            contentContainerStyle={styles.box1}>
            {House.map((house) => (
              <View style={styles.column} key={house.id}>
                <Image source={house.img} style={styles.img} />
                <Text style={styles.name}>{house.name}</Text>
                <Text style={styles.des}>{house.address}</Text>
                <Text style={styles.star}>{house.star}</Text>
              </View>
            ))}
            <View style={{
              width: "100%",
              alignItems: 'center',
            }}>
            </View>
          </ScrollView>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  star:{
    fontSize: 24,
    color: "#20C065"
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