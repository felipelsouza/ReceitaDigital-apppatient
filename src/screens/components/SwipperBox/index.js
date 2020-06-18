import React, { Component } from 'react'
import { ScrollNavigator, NavigatorContent, NavigatorBox, Title, Icone, ViewNavigator, Swiper } from './styled'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { Badge } from 'react-native-elements'
import { Left, Right, Body, Button, Thumbnail, Content, Card, CardItem } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPills } from '@fortawesome/free-solid-svg-icons'
import api from '../../../services/api'
import moment from 'moment'

class SwipperBox extends Component {
    async componentDidMount() {
        await api.get('/receitasPaciente')
            .then(res => this.setState({ items: res.data }))
        const arr = this.state.items
        var items = arr.map(function (prods) {
            return prods
        })
        console.log(items)
        this.setState({data: items})
    }   
    state = {
        data: null
      }
  
      updateSearch = search => {
        this.setState({ search });
      }
      
      renderItem = ({ item }) => (
        
        <Content style={styles.container}>
          <Card style={styles.card}>
            <CardItem cardBody>
              <FontAwesomeIcon icon={ faPills }></FontAwesomeIcon>
              <Text style={[{fontFamily: 'Ubuntu-Regular'}, {fontSize: 13}]}> {item.MEDICAMENTO_RECEITA}</Text>
            </CardItem>
            <CardItem>
              <Left>
                  <Badge textStyle={{fontFamily: 'Ubuntu-Medium'}} value={item.STATUS_RECEITA} status={ item.STATUS_RECEITA === 'Disponível' ? "success" : "error" }/>
              </Left>
              <Body>
                  <Text></Text>
              </Body>
              <Right>
                <Text style={[styles.text, {fontSize: 10}]} note>{moment(item.DATA_RECEITA).locale('pt-br').format('DD/MM/YYYY')}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      );
        

render() {
      return (
        <Swiper>
            <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                onEndReached={this.loadRepositories}
                onEndReachedThreshold={0.1}
                ListFooterComponent={this.renderFooter}
            />
        </Swiper>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  card: { 
      padding: 10,
  },
  text: {
    fontFamily: 'Ubuntu-Light'
  }
})

export default SwipperBox