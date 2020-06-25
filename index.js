
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';  
import RouterComponent from './Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => RouterComponent);
