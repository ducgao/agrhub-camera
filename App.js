import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './app/screen/home'
import Authentication from './app/screen/authentication/index'
import Register from './app/screen/authentication/register'
import Login from './app/screen/authentication/login'

const screensDefination = {
  Authentication: { screen:  Authentication },
  Login: { screen:  Login },
  Register: { screen:  Register },
  Home: { screen: Home }
}

const RootStack = createStackNavigator(screensDefination)

const App = createAppContainer(RootStack)

export default App
