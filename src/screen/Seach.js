import { Text, View,StyleSheet,TextInput,Image,ScrollView } from 'react-native'
import React, { Component } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import { data } from '../../data';
export default class Seach extends Component {
  render() {
    const {House}=data;
    return (
      <View style={styles.containerSearch}>
         <View style={styles.header}>
        <Text style={{
          fontSize: 20,
          fontWeight: 500
        }}>
          Saved Items
        </Text>
      </View>
       <View style={styles.headerSearch}>
       <View style={styles.input1Search}> 
       <Image 
                  source={require('../img/icon/search.png')} // Thay đổi đường dẫn tương ứng với hình ảnh của bạn
                  style={styles.inputIcon}
                />
       <TextInput
        style={styles.inputSearch}
        placeholder="Search"
        keyboardType="text"
        value={Text}
      />
       </View>
       </View>
       <ScrollView style={styles.houseItem} >
          {House.map((house) => (
            <View key={house.id} style={styles.box}>
              <View style={styles.imgItem}>
              <Image source={house.img} style={styles.image} />
              </View>
              <View style={styles.textItem}>
              <Text style={styles.title}>{house.name}</Text>
              <Text style={styles.day}>{house.day}</Text>
              <Text style={styles.address}>{house.address}</Text>
              </View>
              <View>
              <Text style={styles.price}>{house.price}</Text>
              </View>
             
            </View>
          ))}
        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
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
  title:{
    fontWeight:'bold',
    fontSize:17,
    paddingBottom:5,
  },
  day:{
    color:'gray',
  },
  address:{
    color:'gray',
    fontWeight:'bold',
    paddingTop:5,
  },
  containerSearch:{
   flex:1, 
  },
  headerSearch:{
    paddingTop:20,
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:10,
    borderBottomColor:'#D8D8D8',
    borderWidth:1,

  },
  input1Search:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#E5E5E5',
    paddingLeft:10,
    paddingRight:10,
    
  },
  inputSearch:{
 
    height:30,
    padding:17,
    fontWeight:'bold',
    backgroundColor:'#E5E5E5',
    border:'none',
    flex:1,
    color:'#4A4A4A',
    
  },
  inputIcon:{
    width:17,
  },
  houseItem:{
    paddingLeft:20,
    paddingRight:20,
  },
  box:{
    marginTop:20,
    flexDirection:'row',
    marginBottom:20,
    height:60,
    gap:20,
  },
  image:{
  height:'100%',
  width:'90%',
  },
  imgItem:{
    flex:1,
  },
  textItem:{
    flex:1,
  },
  price:{
   flex:1,
   paddingTop:43,
  },
  textItem:{
    flex:2,
    justifyContent:'flex-end',
    height:'100%',
  }
});
