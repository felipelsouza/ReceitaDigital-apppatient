import React, { Component } from 'react'
import { ScrollNavigator, NavigatorContent, NavigatorBox, Title, Icon, ViewNavigator } from './styled'
import { indicator, deposit, transfer} from '../../assets/home'

class BottomNavigator extends Component {
  state = {
    menuItems: [
      { name: 'Minhas Receitas', source: indicator, nav: 'Recipes' },
      { name: 'Farmácias', source: deposit, nav: 'Pharmacies' },
      { name: 'Perfil', source: transfer, nav: 'Profile' },
    ],
  }
  
  renderMenusItems = ({ name, source, nav }, index) => (
    <NavigatorBox key={`${name}-${index}`} onPress={() => this.props.navigation.navigate(nav)}>
      <Icon height={40} width={40} source={source} />
      <Title>{name}</Title>
    </NavigatorBox>
  )

  render() {
    const { menuItems } = this.state

    return (
      <NavigatorContent>
        <ScrollNavigator
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <ViewNavigator >
            {menuItems.map(this.renderMenusItems)}
          </ViewNavigator>
        </ScrollNavigator>
      </NavigatorContent>
    )
  }
}

export default BottomNavigator