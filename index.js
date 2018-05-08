import { AppRegistry } from 'react-native';
import App from './App/Containers/App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('rn_navigation', () => App);
