/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import ViewComponent from './components/ViewComponent'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => ViewComponent);
