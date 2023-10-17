import {Alert, AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

//========FOR JS EXCEPTIONS========//
export const handleErrorOnCatchError=(e,isFatal)=>{
    console.log(e,isFatal)
    Alert.alert('Oops something went wrong')
}
const errorHandler=(e,isFatal)=>{
   handleErrorOnCatchError(e,isFatal)
}
setJSExceptionHandler(errorHandler,true)

//==========FOR NATIVE EXCEPTIONS===========//
const exceptionhandler = (exceptionString) => {
    // Show error locally on DEBUG mode
      console.log("An error happened: ", exceptionString);
      Alert.alert('error occured from native side')
  };
  setNativeExceptionHandler(
    exceptionhandler,
    false // fix WIX RNN bug on Android because Android recreates the application above the crash screen
  );

AppRegistry.registerComponent(appName, () => App);
