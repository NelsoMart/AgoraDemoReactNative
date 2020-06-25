/* eslint-disable prettier/prettier */
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import React from 'react';
import Video from './components/Video';
import Home from './components/Home';
import Principal from './components/Principal';

const RouterComponent = () => ( 
	<Router>
		<Scene>

	     	<Scene key="principal" component={Principal} title="Bienvenido a MedicApp" initial type={ActionConst.RESET} />
			<Scene key="home" component={Home} title="Video llamadas Agora" /*initial*/ type={ActionConst.RESET} />
			<Scene key="video" component={Video} title="Video Feed" type={ActionConst.RESET} hideNavBar={true} />
		</Scene>
	</Router>
);

export default RouterComponent;
