import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import Login from './Login';


const LoginScreen = () => {
    const navigation=useNavigation();
    const handle=()=>{
        navigation.navigate('Login')

    }
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      
      <View style={styles.header}>
      <Image style={{position:'absolute',resizeMode:'cover',width:'100%',height:'740%'}} source={require('./../Images/solo.png')}/>
        <Image
          source={require('./../Images/App.png')} // Add your logo here
          style={styles.logo}
        />
      </View>

      {/* Illustration */}
      <View style={styles.illustration}>
        <Image
          source={require('./../Images/Illustration.png')} // Add your illustration here
          style={styles.illustrationImage}
        />
      </View>

      {/* Login Options */}
      <View style={styles.loginOptions}>
        <Text style={{marginBottom:20,fontSize:30,fontWeight:600}}>Login or Sign Up</Text>
        <Text style={styles.description}>
          Login or create an account to take a quiz, take part in challenges, and more.
        </Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={ handle}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={() => alert('Create Account Pressed')}>
          <Text style={[styles.buttonText, styles.outlineButtonText]}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert('Later Pressed')}>
          <Text style={styles.laterText}>Later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5AE0',
    // backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    
    alignItems: 'center',
    marginBottom: 10,
    
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode:'contain'
  },
  
  illustration: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-30
  },
  illustrationImage: {
    width: 300,
    height: 280,
  },
  loginOptions: {
    width: '96%',
    padding: 39,
    margin:2,
    backgroundColor: '#fff',
    borderRadius:20,
    
    alignItems: 'center',
    
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A5AE0',

    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: '#E6E6E6',

    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  outlineButtonText: {
    color: '#4C2AFA',
  },
  laterText: {
    marginTop: 15,
    fontSize: 16,
    color: '#888',
  },
});

export default LoginScreen;