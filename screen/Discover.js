import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native';

const DiscoverScreen = () => {
  const navigation=useNavigation();
  const end=()=>{
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      {/* Top section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={end}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Discover</Text>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        {/* <FontAwesome name="search" size={18} color="#888" style={styles.searchIcon} /> */}
        <Ionicons name='search-outline' size={25}/>
        <TextInput 
          placeholder="Quiz, categories, or friends" 
          placeholderTextColor="#888" 
          style={styles.searchInput} 
        />
      </View>

      {/* Scrollable content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Picks */}
        <View style={[styles.section]}>
          <Image style={{width:'100%',resizeMode:'stretch'}} source={require('./../Images/Card.png')}/>
        </View>

        {/* Top rank of the week */}
        <View style={styles.inn}>
          <View style={styles.dot}>
            <Text style={{fontSize:20,fontWeight:600}}>Top rank of the week</Text>
            <Image style={{width:'100%',resizeMode:'stretch'}} source={require('./../Images/Brandon.png')}/>
            <View style={{marginTop:20}}>
            <Text style={{fontSize:20,fontWeight:600}}>Categories</Text>
            </View>
            <View style={styles.end}>
              <Image source={require('./../Images/Categories.png')}/>
              <Image source={require('./../Images/Categories-2.png')}/>
            </View>


            </View>
         

         
        </View>

        {/* Categories */}
        
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          {/* <FontAwesome name="home" size={24} color="#888" /> */}
          <Ionicons name='home-outline' size={25} color='gray'/>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <FontAwesome name="search" size={24} color="#888" /> */}
          <Ionicons name='search-outline' size={25}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
         <AntDesign name='plus' size={25} color='white'/>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <FontAwesome name="bar-chart" size={24} color="#888" /> */}
          {/* <AntDesign name='' size={25}/> */}
          <EvilIcons name='chart' size={29} color='gray'/>
        </TouchableOpacity>
        <TouchableOpacity>
          {/* <FontAwesome name="user" size={24} color="#888" /> */}
          <AntDesign name='user' size={25} color='gray'/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5AE0',
  },
  header: {
    backgroundColor: '#6A5AE0',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    flexDirection: 'row',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 40,
    marginTop:15
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    gap:10,
    marginHorizontal:20
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#333',
    fontSize: 16,
  },
  section: {
    // flex:1,
    paddingHorizontal:15,
    marginTop:10,
    // width:'100%'
    
  },
 
 inn:{
  // flex:1,
  backgroundColor:'white',
  height:'190%',
  width:'100%',
  marginTop:30,
  borderTopLeftRadius:30,
  borderTopRightRadius:30

 },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4C2AFA',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 40,
  },
  dot:{
    margin:22
  },
  end:{
    flexDirection:'row',
    marginTop:15,
    gap:35
  }
});

export default DiscoverScreen;