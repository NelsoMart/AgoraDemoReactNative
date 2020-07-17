
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';     
import RouterComponent from './Router';
// import App2 from './App2';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => /* App2 */ RouterComponent);
