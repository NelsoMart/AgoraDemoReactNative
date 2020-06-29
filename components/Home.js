/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';    
import { View, StyleSheet, Text, TextInput, AsyncStorage,
  TouchableOpacity, Alert, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

import requestCameraAndAudioPermission from './permission';

import firebase from '../fireDatabase/firebase'; //? Para el Login

class Home extends Component {       

  constructor(props) {          
    super(props);

    this.state = {
      AppID: 'dfbf465dc527467ab5cd363b7ba5d2c5',                    //Set your APPID here
      ChannelName: 'Escribe...',                                  //Set a default channel or leave blank
      uid: null, //? este valor es introducido en Async storage DESDE AQUÍ cuando la única pantalla que se llena es la de Login, obviando la pantalla 'Signup'
      ValAsyncStFinal: null, //todo: Obtendrá el valor guardado en Async Storage en la pantala de registro 'Signup.js'
      ValAsyncStFromLogin:  null,
      displayName: null
    };

    try{ //! Obteniendo nombre de usuario guardado desde Signup; debe ser 'key'
      AsyncStorage.getItem('key').then((value) =>{ // "value" contendrá los datos de la BD llamada 'database_from'
          this.setState({
            ValAsyncStFinal:  JSON.parse(value) // pasamos a list los elementos de la BD y los convertimos a JSON
             // list:  value // forma primitiva
          })
      })
   } catch(err){
      console.log(err)
   }

   try{ //! Obteniendo nombre de usuario guardado DESDE AQUÍ; debe ser 'clave'
      AsyncStorage.getItem('clave').then((value) =>{ // "value" contendrá los datos de la BD llamada 'database_from'
          this.setState({
            ValAsyncStFromLogin:  JSON.parse(value) // pasamos a list los elementos de la BD y los convertimos a JSON
             // list:  value // forma primitiva
          })
      })
   } catch(err){
      console.log(err)
   }


    
    if (Platform.OS === 'android') {                    //Request required permissions from Android
      requestCameraAndAudioPermission().then(_ => {
        console.log('requested!');
      });
    }
  }


  signOut = () => {
    firebase.auth().signOut().then(() => {
     // this.Go_Login //? así no funciona
      Actions.login(); //todo: debe ser así
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  


  /**
  * @name handleSubmit
  * @description Helper function to handle data on submit click
  */
  handleSubmit = () => { //! método del botón de efectuar llamada
    let AppID = this.state.AppID;
    let ChannelName = this.state.ChannelName;
    if (AppID !== '' && ChannelName !== '') {
      Actions.video({ AppID, ChannelName }); //! "Action.algo" es la navegación entre ventanas, llamada 'react-native-router-flux'
    }
  }

  userToken = async (user) => { //todo: para insertar el nombre del usuario en el almacenamiento local, al pasar por Login
    try { //? Guardando valor que se obtiene de 'firebase.auth().currentUser', después de iniciar cesión
       await AsyncStorage.setItem("clave", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

 
  render() {   

           if(this.props.correo == null || this.props.correo == ''){ // si no pasa por Login
          //return null
        // Alert.alert('nada',this.state.ValAsyncStFromLogin); //? este valor no va a existir si la app se desinstaló y el usuario ya no se registró, sino que sólo inició cesión
        
        
           } 
           else {
              this.state = { 
                 displayName: firebase.auth().currentUser.displayName,
                 uid: firebase.auth().currentUser.uid,
                 AppID: 'dfbf465dc527467ab5cd363b7ba5d2c5',          //? Set your APPID here
                 ChannelName: 'Escribe...',                  //? Set a default channel or leave blank
                 ValAsyncStFinal: '', //todo: Obtendrá el valor guardado en Async Storage en la pantala de registro 'Signup.js'
                 ValAsyncStFromLogin:  '',
              }
            // Alert.alert('algo',this.props.correo)   
           
            this.userToken(this.state.displayName);


            // Alert.alert('algo',this.state.ValAsyncStFromLogin,this.state.ValAsyncStFinal);  
        
       
            

    // this.state = { 
    //   displayName: firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid,
     
    // }

   }

    return ( //! Formulario de inicio

      <View style={{flex:1}}> 

     {this.state.corrreo!=null||this.state.corrreo!='' && //? cuando inició cesión
       <View style={{alignSelf:'flex-end'}} >
      <Text style={{color:'grey', marginRight:'5%'}}>Bienvenido: {this.state.displayName}</Text> 
      </View>} 

      {/* {this.state.ValAsyncStFromLogin=='' && this.state.corrreo !=''? //? si nombre de usuario se obtuvo DESDE AQUÍ y se almacena en AsyncStorage, cada vez que se inicia seción, y se saca cuando ya no se inicie seción
        null
       :
       <View style={{alignSelf:'flex-end'}} >
      <Text style={{color:'grey', marginRight:'5%'}}>Bienvenido: {this.state.ValAsyncStFromLogin}</Text> 
      </View>}  */}

      {/* {this.state.ValAsyncStFinal=='' && this.state.corrreo !=''? //? El nombre de usuario se obtiene de desde Signup,  y se almacenó en AsyncStorage.
        null
       :
       <View style={{alignSelf:'flex-end'}} >
      <Text style={{color:'grey', marginRight:'5%'}}>Bienvenido: {this.state.ValAsyncStFinal}</Text> 
      </View>}  */}

      
      
      <View style={styles.container} >
      
        <Text style={styles.formLabel}>App ID</Text>
        <TextInput
           editable = {false}
          style={[styles.formInput, {color:'green'}]}  
          onChangeText={(AppID) => this.setState({ AppID })}
          value={this.state.AppID}
        />
        <Text style={styles.formLabel}>Nombre del Canal</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={(ChannelName) => this.setState({ ChannelName })}
          value={this.state.ChannelName}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            title="Iniciar LLamada!"
            onPress={this.handleSubmit}
            style={styles.submitButton}
          >
            <Text style={{ color: '#ffffff' }}> Iniciar Videollamada </Text>
          </TouchableOpacity>

        </View>  
     </View>
    
     <View style={{marginBottom:2}}>
     <Button
        
          color="grey"
          title="Cerrar Cesión"
          onPress={() => this.signOut()}
        />
     </View>
   
   </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
    marginTop: 0,
    paddingTop:0,
    padding: 20,  
    flex: 1,
    backgroundColor: '#ffffff',
  },
  formLabel: {
    paddingBottom: 10,
    paddingTop: 10,
    color: '#0093E9',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  submitButton: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  formInput: {
    height: 40,
    backgroundColor: '#f5f5f5',
    color: 'grey',
    borderRadius: 4,
    paddingLeft: 20,
  },
});

export default Home;
