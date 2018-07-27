import { createSwitchNavigator,createStackNavigator} from 'react-navigation';
import AuthScreen from './screens/auth/AuthScreen';
import LogInScreen from './screens/login/LoginScreen';
import UserRegistrationScreen from './screens/userRegister/UserRegister';
import SignUpScreen from './screens/signup/SignUpScreen';
import SignUpInstructions from './screens/signUpInstructions/SignUpInstructions';
import PasswordScreen from './screens/password/PasswordScreen';
const AuthStack = createStackNavigator(
    { 
        Auth: {screen:AuthScreen},
    },
    {
        initialRouteName: 'Auth',
        navigationOptions: {
            header: null,
          }
    }
);
const LogInStack = createStackNavigator(
    { 
        LogInScreen: {screen:LogInScreen},
    },
    {
        initialRouteName: 'LogInScreen',
        navigationOptions: {
            header: null,
          }
    }
);

const RegisterUserStack = createStackNavigator(
    { 
        StaringScreen: {screen:UserRegistrationScreen},
        SignUpScreen: {screen:SignUpScreen},
        InstructionsScreen:{screen:SignUpInstructions},
        PasswordScreen:{screen:PasswordScreen}
    },
    {
        initialRouteName: 'StaringScreen',
        navigationOptions: {
            header: null,
          }
    }
);

 export const  AppNavigator = createSwitchNavigator(
    {
      Auth: {
          screen:AuthStack
      },
      RegisterUser:{
          screen:RegisterUserStack
      },
      LogIn:{
          screen:LogInStack
      }
    },
    {
      initialRouteName: 'RegisterUser',
      navigationOptions: {
        header: null,
      }
    }
  );

