/* eslint-disable prettier/prettier */
import { Router, Scene, ActionConst } from 'react-native-router-flux';
//todo: Esta sección es para el entorno de videollamada
import React from 'react';
import Video from './components/Video';
import Home from './components/Home';
import Principal from './components/Principal'; //! quitar

//todo: Esta sección es para eñ proceso de inicio de cesión
import Signup from './fireComponents/Signup';
 import Login from './fireComponents/Login';
 import Dashboard from './fireComponents/Dashboard'; //! quitar

const RouterComponent = () => ( 
	<Router>
		<Scene>
		<Scene key="signup" component={Signup} title="Crea tu Cuenta" initial type={ActionConst.RESET} />
		<Scene key="login" component={Login} title="Iniar Cesión"  type={ActionConst.RESET} />
		<Scene key="dashboard" component={Dashboard} title="This is Dashboard"  type={ActionConst.RESET} />
	     	<Scene key="principal" component={Principal} title="Bienvenido a MedicApp"  type={ActionConst.RESET} />
			<Scene key="home" component={Home} title="Video llamadas Agora" /*initial*/ type={ActionConst.RESET} />
			<Scene key="video" component={Video} title="Video Feed" type={ActionConst.RESET} hideNavBar={true} />
		</Scene>
	</Router>
);

export default RouterComponent;
