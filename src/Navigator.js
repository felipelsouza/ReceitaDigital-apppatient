import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './screens/Home'
import Pharmacies from './screens/Pharmacies'
import Recipes from './screens/Recipes'

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
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Home'
})

export default createAppContainer(mainNavigator, mainRoutes)