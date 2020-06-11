import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './screens/Home'
import Pharmacies from './screens/Pharmacies'
import Recipes from './screens/Recipes'
import Login from './screens/Login'
import Register from './screens/Register'

const mainRoutes = {
    Home: {
        name: 'Home',
        screen: Home
    },
    Pharmacies: {
        name: 'Pharmacies',
        screen: Pharmacies
    },
    Recipes: {
        name: 'Recipes',
        screen: Recipes
    },
    Login: {
        name: 'Login',
        screen: Login
    },
    Register: {
        name: 'Register',
        screen: Register
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Recipes'
})

export default createAppContainer(mainNavigator, mainRoutes)