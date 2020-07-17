import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';

//? Navegación entre ventanas
import { Actions } from 'react-native-router-flux';

export class PantallaDeRegistro extends Component {


    Login_Email = () => { // este método es único porque en ambos casos se navega hascia Login
        Actions.signup(); //* login está bien aquí; no es un duplicado
    }

    Login_Facebook = () => { // este método es único porque en ambos casos se navega hascia Login
        //Actions.login(); //* login está bien aquí; no es un duplicado
        Alert.alert('¯\\_(ツ)_/¯','Nadie ha trabajado en esto aún');
    }

    Login_Google = () => { // este método es único porque en ambos casos se navega hascia Login
        Actions.raizgooglelogin(); //* login está bien aquí; no es un duplicado
    }

    render() {
        return (
            <View style={styles.Contenedor}>

               <Text style={styles.textCabecera}> Iniciar sesión mediante uno de los
                       siguientes métodos </Text>

               <TouchableOpacity //* Touchable de Email
               onPress={() => this.Login_Email()}
                    activeOpacity={0.4}
                    style={styles.TouchableLogin}
                 >
                    <Text style={{marginStart: 5, color: '#000'}}>
                       Email 
                    </Text>
              </TouchableOpacity> 

              <TouchableOpacity //* Touchable de Facebook
                    activeOpacity={0.4}
                    style={styles.TouchableLogin}
                   onPress={() => this.Login_Facebook()}
                   
                 >
                    <Text style={{marginStart: 5, color: '#000'}}>
                       Facebook 
                    </Text>
              </TouchableOpacity> 

              <TouchableOpacity //* Touchable de Google
              onPress={() => this.Login_Google()}
                    activeOpacity={0.4}
                    style={styles.TouchableLogin}
                 >
                    <Text style={{marginStart: 5, color: '#000'}}>
                       Google 
                    </Text>
              </TouchableOpacity> 

            </View>
        )
    }
}

export default PantallaDeRegistro

const styles = StyleSheet.create({
    Contenedor: {
        flex: 1,
        //alignItems: 'center',
        //marginTop: 5,
        backgroundColor: '#fff',
        margin:0,
        padding:0
        },
        TouchableLogin: {
            alignSelf: 'center',
            paddingTop: '4%',
            paddingBottom: '4%',
            marginBottom: '5%',
            marginTop: '3%',
            width: '80%',
            borderColor: 'grey',
            borderWidth: 3,
            borderRadius: 15,
            alignItems: "center",

          },
          textCabecera:{
              fontSize:19,
              alignSelf:"center",
              alignItems: "center",
              marginTop:'10%',
              marginBottom:'7%',
              alignItems: "center"
          }
})