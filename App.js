import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './app/screen/home'
import Authentication from './app/screen/authentication/index'
import Register from './app/screen/authentication/register'

const screensDefination = {
  Authentication: { screen:  Authentication },
  Register: { screen:  Register },
  Home: { screen: Home }
}

const RootStack = createStackNavigator(screensDefination)

const App = createAppContainer(RootStack)

export default App
