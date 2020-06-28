// components/login.js

import React, { Component } from 'react';

import { StyleSheet, Text, View, TextInput, ScrollView,
         Button, Alert, ActivityIndicator } from 'react-native';

import firebase from '../fireDatabase/firebase'; //? Para el Login

//? Navegación entre ventanas
import { Actions } from 'react-native-router-flux';

//? Para el textInput de contraseña
import PasswordInputText from 'react-native-hide-show-password-input';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      // nombre: '', //era para intentar enviar el nombre de usuario a pantalla Home
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {

    // let nombreUsuario = this.state.nombre;

    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        // this.Go_Dasboard
        // Actions.dashboard();
        // Actions.home({nombreUsuario});
        Actions.home();
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  Go_Signup = () => { 
    Actions.signup(); 
}
  
Go_Dasboard = () => { 
  Actions.dashboard(); 
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
        /> */}

        <PasswordInputText 
            style={{marginBottom:'15%'}}
            value={this.state.inputStyle}
            placeholder="Contraseña"
            maxLength={15}
             onChangeText={  (val) =>this.updateInputVal(val, 'password')  }
                />     

        <Button
          color="#3740FE"
          title="Ingresar"
          onPress={() => this.userLogin()}
        />   

        <Text 
          style={styles.loginText}
          onPress={this.Go_Signup}>     
             ¿No tienes cuenta? Haz clic aquí para registrarte
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