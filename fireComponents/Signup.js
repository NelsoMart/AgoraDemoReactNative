// components/signup.js

import React, { Component } from 'react';

import { StyleSheet, Text, View, ScrollView, AsyncStorage,
  TextInput, Button, Alert, ActivityIndicator } from 'react-native';

import firebase from '../fireDatabase/firebase'; //? Para el Login

//? Navegación entre ventanas
import { Actions } from 'react-native-router-flux';

//? Para el textInput de contraseña
import PasswordInputText from 'react-native-hide-show-password-input';


export default class Signup extends Component {
  
  constructor() {
    super();

    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false,
      myPassword: '', //para el textInput
    }

  }

  userToken = async (displayName) => { // para insertar el nombre del usuario en el almacenamiento local.
    try {
       await AsyncStorage.setItem("key", JSON.stringify(displayName));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    const {displayName} = this.state;

    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('¡Debes llenar todos los campos!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        Alert.alert('Usuario registrado exitosamente!')
        console.log('Usuario registrado exitosamente!')
        this.setState({
          isLoading: false,
          // displayName: '', //? se vacíaba porque había otra navegación
          // email: '',       //? se vacíaba porque había otra navegación
          // password: ''     //? se vacíaba porque había otra navegación
        })
        // this.Go_Login
        this.userToken(displayName);
        console.log(displayName);
        Actions.login();
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  Go_Login = () => { // este método es único porque en ambos casos se navega hascia Login
      Actions.login(); //* login está bien aquí; no es un duplicado
  }


  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <ScrollView>
      <View style={styles.container}>  
        <TextInput
          style={styles.inputStyle}
          placeholder="Nombre"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        <TextInput
          style={styles.inputStyle}   
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        {/* <TextInput  
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true} 
        />  */}

         <PasswordInputText 
         style={{marginBottom:'15%'}}
            value={this.state.password}
            placeholder="Contraseña"
            maxLength={15}
             onChangeText={  (val) =>this.updateInputVal(val, 'password')  }
                />  

                
        <Button
          color="#3740FE"
          title="Regístrate"
          onPress={
           () => this.registerUser()
            // this.Go_Login
            }
        />

        <Text 
          style={styles.loginText}
          onPress={this.Go_Login}>
       ¿Ya registrado? Haz clic aquí para ingresar
        </Text>   
      </View>
      </ScrollView>                       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});