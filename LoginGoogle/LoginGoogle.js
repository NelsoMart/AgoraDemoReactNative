
import React, { useEffect, useState } from 'react';  
import {  
 StyleSheet,  
 View,  
 StatusBar,  
 TouchableOpacity,  
 Text,  
 Image  
} from 'react-native';  
import { GoogleSignin, GoogleSigninButton, statusCodes }  from '@react-native-community/google-signin';// from 'react-native-google-signin';

import { firebase } from '@react-native-firebase/auth'

GoogleSignin.configure({  
 webClientId: '592148676936-cr43atf3fpig3aqknldu2t7dri0lrdds.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)  
 });  //592148676936-r6jtdef9hnpkug57bqm52mknpfu1hruq.apps.googleusercontent.com

const LoginGoogle: () => React$Node = () => { 

 const [isLoggedIn, setIsLoggedIn] = useState(false)  
 const [userInfo, setUserInfo] = useState(null)  

 useEffect(() => {  
   getCurrentUserInfo();  
 }, []);  
 const getCurrentUserInfo = async () => {  
  try {  
    const userInfo = await GoogleSignin.signInSilently();  
    console.log(userInfo);  
    setIsLoggedIn(true);  
    setUserInfo(userInfo);  
  } catch (error) {  
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {  
      // user has not signed in yet  
    } else {  
      // some other error  
    }  
  }  
};  
 
const _signIn = async () => {  
  try {  
    await GoogleSignin.hasPlayServices();  
    const userInfo = await GoogleSignin.signIn();  
    console.log(userInfo);  
    setIsLoggedIn(true);  
    setUserInfo(userInfo);  

    // create a new firebase credential with the token
const { accessToken, idToken } = await GoogleSignin.signIn()
const credential = firebase.auth.GoogleAuthProvider.credential(
  idToken,
  accessToken
)
// login with credential
await firebase.auth().signInWithCredential(credential)

  } catch (error) {  
    console.log(error);  
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {  
      // user cancelled the login flow  
    } else if (error.code === statusCodes.IN_PROGRESS) {  
      // operation (e.g. sign in) is in progress already  
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {  
      // play services not available or outdated  
    } else {  
      // some other error happened  
    }  
  }  
};  
 
const _signOut = async () => {  
  try {  
    await GoogleSignin.revokeAccess();  
    await GoogleSignin.signOut();  
    setIsLoggedIn(false);  
  } catch (error) {  
    console.error(error);  
  }  
}  
return (  
  <>  
    <StatusBar barStyle="dark-content" />  
    <View style={styles.container} >  
      {  
        !isLoggedIn ?  
          <GoogleSigninButton  
            style={{ width: 192, height: 70 }}  
            size={GoogleSigninButton.Size.Wide}  
            color={GoogleSigninButton.Color.Dark}  
            onPress={_signIn}  
          /> :  
          <>  
           <Text style={{fontSize:25, marginTop: 40, textAlign: 'center', color: '#00Bcd4'}}>
              !! HAS INICIADO SESION CON GOOGLE
                 </Text>   
            <TouchableOpacity style={styles.signOutBtn} onPress={_signOut}>  
              <Text style={styles.signOutBtnText}>Signout</Text>  
            </TouchableOpacity>  
          </>  
      }  
    </View>  
  </>  
);  
};  
 
const styles = StyleSheet.create({  
container: { flex: 1, justifyContent: "center", alignItems: "center" },  
signOutBtn: {  
  backgroundColor: "#556688",  
  padding: 10,  
  borderRadius: 10  
},  

Contenedor: {
  flex: 1,
  alignItems: 'center',
  marginTop: 5,
  backgroundColor: '#fff'
},
signOutBtnText: {  
  color: "white"  
}  
});  
 
export default LoginGoogle;  