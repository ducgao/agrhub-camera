const HOME = "Home"
const AUTHENTICATION = "Authentication"
const REGISTER = "Register"
const LOGIN = "Login"
const MAIN = "Main"

export function replaceToHome(screenInstance) {
  screenInstance.props.navigation.replace(HOME)
}

export function navigateToHome(screenInstance) {
  screenInstance.props.navigation.navigate(HOME)
}

export function navigateToRegister(screenInstance) {
  screenInstance.props.navigation.navigate(REGISTER)
}

export function navigateToAuthentication(screenInstance) {
  screenInstance.props.navigation.navigate(AUTHENTICATION)
}

export function replaceToLogin(screenInstance) {
  screenInstance.props.navigation.navigate(LOGIN)
}

export function replaceToMain(screenInstance) {
  screenInstance.props.navigation.replace(MAIN)
}

export function navigateToMain(screenInstance) {
  screenInstance.props.navigation.navigate(MAIN)
}