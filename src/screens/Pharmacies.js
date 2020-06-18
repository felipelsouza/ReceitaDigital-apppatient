import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'
import commonStyles from '../commonStyles'
import api from '../services/api'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Left, Right, Body, Button, Thumbnail, Content, Card, CardItem } from 'native-base';
import { Image } from 'react-native';

export default class SeekRecipe extends Component { 

    async componentDidMount() {
      await api.get('/farmacias')
          .then(res => this.setState({ items: res.data }))
      const arr = this.state.items
      var items = arr.map(function (prods) {
          return prods
      })
      var nome = arr.map(function (prods) {
        return prods.NOME
    })
      console.log(items)
      this.setState({data: items, nome: nome})
  }   
  state = {
      search: '',
      data: null
    }

    updateSearch = search => {
      this.setState({ search });
    }
    
    renderItem = ({ item }) => (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: item.author_avatar}} />
              <Body>
                <Text>{item.NOME}</Text>
                <Text note>{item.RUA}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: item.cover_image_url}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>{item.likes}</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>{item.comments}</Text>
              </Button>
            </Body>
            <Right>
              <Text note>{item.time}</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
      
    render() {
      const { search } = this.state;
      const hospital = "Receita Digital"

      return (
          <View style={styles.container}>
            <View style={styles.header}>
                  <TouchableOpacity style={styles.addIcon} activeOpacity={0.8}
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Icon name="angle-left" size={15}
                              color={commonStyles.colors.secondary}
                          />
                  </TouchableOpacity>
                  <Text style={styles.title}>{hospital}</Text>
              </View>
              <SearchBar
                  style={styles.search}
                  round
                  inputContainerStyle={{backgroundColor: 'white', color: 'black'}}
                  containerStyle={{backgroundColor: commonStyles.colors.primaryDark}}
                  placeholder="Busque Aqui"
                  onChangeText={this.updateSearch}
                  value={search}
                  onChangeText={text => {
                      this.filterList(text);
                    }}
                    onPressCancel={() => {
                      this.filterList("");
                    }}
                    onPress={() => alert("onPress")}
              />
              <FlatList
                  style={{ marginTop: 30 }}
                  contentContainerStyle={styles.list}
                  data={this.state.data}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
                  onEndReached={this.loadRepositories}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={this.renderFooter}
              />
          </View>
      );
    }
}
const styles = StyleSheet.create({
    tabHeading: {
      backgroundColor: "#1ecd99",
    },
    title: {
        color: 'white',
        marginRight: 185
    },
    header: { 
      backgroundColor: "#1cc391",
      flexDirection: 'row',
      padding: 15,
      borderBottomWidth: 1,
      borderColor: commonStyles.colors.primaryDark,
      justifyContent: 'space-between',
    },
    container: {
      flex: 1,
    },
    logo: {
        width: 40,
        height: 40,
    },
    addIcon: {
        flexDirection: 'row',
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: commonStyles.colors.primaryDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItem: {
        backgroundColor: '#FFF',
        margin: 6,
        padding: 6,
        borderRadius: 5
    },
  });