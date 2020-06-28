// components/dashboard.js

import React, { Component } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

import firebase from '../fireDatabase/firebase'; //? Para el Login

//? Navegación entre ventanas
import { Actions } from 'react-native-router-flux';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      // this.Go_Login //? así no funciona
      Actions.login(); //todo: debe ser así
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  Go_Login = () => { 
    Actions.login(); //* login está bien aquí; no es un duplicado
}

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});