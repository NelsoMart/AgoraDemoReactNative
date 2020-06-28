import React, { PureComponent, Component } from 'react';
// import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

//? Navegación entre ventanas
import { Actions } from 'react-native-router-flux';

export class Principal extends PureComponent {

      /**
  * @name entrar
  * @description Helper function to handle data on submit click
    **/
   
    entrar = () => { 
        // let AppID = this.state.AppID;
        // let ChannelName = this.state.ChannelName;
          Actions.home(); 
      }

    render() {
        return (
            <View style= {{flex:1}}>
                <Text style={{marginTop:20, alignSelf:"center"}}
                > Pronto aquí irá la pantalla de registro de usuarios </Text>
                <TouchableOpacity 
                title="Ingrear a Home"
                onPress={this.entrar}
                style={styles.TouchableOpacityStyle} 
                 
                >
                    <Text style={styles.TextStyle}>
                        Ingresar
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Principal

const styles = StyleSheet.create({

    TouchableOpacityStyle: {
        alignSelf: 'center',
        paddingTop: '3%',
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 7,
        marginTop: 15,
        width: '90%',
        // position: 'absolute',
        backgroundColor: '#00bcd9',
      },

      TextStyle: {
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
      },

})


/*
import React, { PureComponent, Component } from 'react';
// import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

// import { TouchableOpacity } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../fireComponents/login';
import Signup from '../fireComponents/signup';
import Dashboard from '../fireComponents/dashboard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' },
         {headerLeft: null} 
       }
      />
    </Stack.Navigator>
  );
}

export default function Principal() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
*/
