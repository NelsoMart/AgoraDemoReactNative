/* eslint-disable prettier/prettier */
import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';
//todo: Esta sección es para el entorno de videollamada
import React from 'react';
import Video from './components/Video';
import Home from './components/Home';

//todo: Esta sección es para el proceso de inicio de cesión
 import PantallaDeRegistro from './PantallaDeRegistro';
	import Signup from './fireComponents/Signup';   
	import Login from './fireComponents/Login';
	import RaizGoogleLogin from './LoginGoogle/RaizGoogleLogin';

//  import Dashboard from './fireComponents/Dashboard'; //! quitar

const RouterComponent = () => (   
	<Router>
		<Scene>    
		<Scene key="pantalladeregistro" component={PantallaDeRegistro} title="Bienvenido a AppMedic" initial  type={ActionConst.RESET} />
		<Scene key="signup" component={Signup} title="Crea tu cuenta" /*initial*/   type={ActionConst.RESET} /> 
		<Scene key="login" component={Login} title="Inicia cesión"  type={ActionConst.RESET} />
		<Scene key="raizgooglelogin" component={RaizGoogleLogin} title="Elegiste entrar con Google"  /*type={ActionConst.RESET}*/ />
		<Scene key="home" component={Home} title="Consulta Médica en Línea" /*initial*/ type={ActionConst.RESET} />
		<Scene key="video" component={Video} title="Video Feed" type={ActionConst.RESET} hideNavBar={true} />
		</Scene>
	</Router>
);

export default RouterComponent;
