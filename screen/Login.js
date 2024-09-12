import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView ,Image} from 'react-native';
// import { FontAwesome } from 'react-native-fontawesome'; // Install expo icons if you don't have them
import Ionicons from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {
  const navigation=useNavigation();
  const hand=()=>{
    navigation.navigate('home')
  }
  const google=()=>{
    navigation.navigate('discover')
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      
      <TouchableOpacity style={styles.backButton} onPress={hand}>
        <Ionicons name='arrow-back' size={30}/>
        
   

      
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Login with Google */}
      
      <TouchableOpacity style={styles.googleButton} onPress={google}>
        {/* <Ionicons name='logo-google' size={25}/> */}
        <Image  style={{resizeMode:'cover',height:30,width:30}} source={require('./../Images/google.png')}/>
        {/* <Image source={require('./../Images/Images/4307DC3A-3664-4E57-B8FC-73E840B45D70_4_5005_c.jpeg')}/> */}
        {/* <FontAwesome name="google" size={24} color="black" /> */}
        <Text style={[styles.socialButtonText,{color:'black'}]}>Login with Google</Text>
      </TouchableOpacity>
      

      {/* Login with Facebook */}
      <TouchableOpacity style={styles.facebookButton} onPress={() => alert('Login with Facebook pressed')}>
        <Ionicons name='logo-facebook' size={30} color={'white'}/>
        {/* <FontAwesome name="facebook" size={24} color="white" /> */}
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>
      <Text style={{marginHorizontal:13,marginBottom:10,fontWeight:450}}>Email Address</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name='mail-outline' size={25} color={'#6A5AE0'}/>
        
        {/* <FontAwesome name="envelope" size={20} color="#888" style={styles.icon} /> */}
        <TextInput
          style={styles.input}
          placeholder="Your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Text style={{marginHorizontal:13,marginBottom:10,fontWeight:450}}>Password</Text>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        {/* <FontAwesome name="lock" size={20} color="#888" style={styles.icon} /> */}
        <Ionicons name='lock-closed-outline' size={25} color='#6A5AE0'/>
        <TextInput
          style={styles.input}
          placeholder="Your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          
        />
        <Ionicons name='eye-outline' size={25} color='gray'/>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.showPasswordIcon}>
          {/* <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={20} color="#888" /> */}
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => alert('Login pressed')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => alert('Forgot password pressed')}>
        <Text style={[styles.forgotPasswordText,{fontWeight:500}]}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Terms of Service and Privacy Policy */}
      <Text style={styles.footerText}>
        By continuing, you agree to the{' '}
        <Text style={styles.link}>Terms of Services</Text> &{' '}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EFEEFC',

  },
  backButton: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal:10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop:-20
  },
  googleButton: {
    flexDirection: 'row',
    // width:'90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal:10
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0056B2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal:10
  },
  socialButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#888',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 18,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    marginHorizontal:15
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal:15
  },
  showPasswordIcon: {
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: '#6A5AE0',


    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    marginHorizontal:10,
    marginTop:10
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: '#4C2AFA',
    marginBottom: 20,
    marginTop:10
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    marginHorizontal:10,
    fontWeight:700
  },
  link: {
    color: 'black',
  },
});

export default LoginScreen;