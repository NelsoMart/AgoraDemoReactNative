import React, { PureComponent } from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'

// import { TouchableOpacity } from 'react-native-gesture-handler';

import { Actions } from 'react-native-router-flux';

export class Principal extends PureComponent {

      /**
  * @name entrar
  * @description Helper function to handle data on submit click
  */
    entrar = () => { 
        // let AppID = this.state.AppID;
        // let ChannelName = this.state.ChannelName;
          Actions.home(); 
      }

    render() {
        return (
            <View style= {{flex:1}}>
                <Text> Esta es la interfaz inicial de Agora </Text>
                <TouchableOpacity 
                title="Ingrear a Home"
                onPress={this.entrar}
                style={styles.TouchableOpacityStyle} 
                 
                >
                    <Text>
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
        backgroundColor: '#00bcd4',
      },

})