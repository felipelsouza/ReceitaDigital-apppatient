import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Left, Right, Body, Button, Thumbnail, Content, Card, CardItem } from 'native-base'
import { Header } from 'native-base'
import { SearchBar } from 'react-native-elements'
import commonStyles from '../commonStyles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { Rating, AirbnbRating } from 'react-native-elements'

import api from '../services/api'

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
    var numero = arr.map(function (prods) {
      return prods.NUMERO
    })
    var rua = arr.map(function (prods) {
      return prods.RUA
    })
    var bairro = arr.map(function (prods) {
      return prods.BAIRRO
    })
    var estado = arr.map(function (prods) {
      return prods.ESTADO
    })
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${numero}+${rua}+${bairro},+${estado},+BR&key=AIzaSyCogydxx7_a23o2BZcSBkgrZ389Nu2kxog`)
    .then((response) => response.json())
    .then((responseJson) => {
      for (i = 0; i < responseJson.results.length; i++) {
        responseJson[i] = responseJson.results[i].geometry.location;
      }
      this.setState({ data: items, nome: nome, lat: responseJson[0].lat, lng: responseJson[0].lng,
        latlng:{
          latitude: responseJson[0].lat,
          longitude: responseJson[0].lng
        }
      })
    });
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
            <Thumbnail source={{ uri: item.LOGO }} />
            <Body>
              <Text style={styles.farmacia}>{item.NOME}</Text>
              <Text style={styles.rua} note>{item.RUA}, {item.NUMERO}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <View style={styles.container2}>
            <MapView style={styles.mapStyle}
              provider={PROVIDER_GOOGLE}
              loadingEnabled={true}
              initialRegion={{
                latitude: this.state.lat,
                longitude: this.state.lng,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0421,
              }}
            >
            <Marker
              coordinate={this.state.latlng}
            />
            </MapView>
          </View>
        </CardItem>
        <CardItem>
          <Left>
          <Rating  fractions="{1}" imageSize={20} readonly startingValue={item.RATING} style={styles.rating}>
          </Rating>
            <Text style={{fontFamily: 'Ubuntu-LightItalic', color: '#d1c92a'}}>  ({item.RATING.length.toFixed(1)})</Text>
          </Left>
          <Body>
            <Button transparent>
              <Text>{item.comments}</Text>
            </Button>
          </Body>
          <Right>
          <Text style={{fontFamily: 'Ubuntu-Light'}} note>Comentários (2)</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
        <Header androidStatusBarColor="#1cc391" style={styles.header} hasTabs>
        <FontAwesomeIcon onPress={() => this.props.navigation.navigate('Home')} style={styles.icon} icon={ faChevronLeft }/>
          <SearchBar
          style={styles.search}
          round
          placeholder="Farmácia..."
          inputContainerStyle={{ backgroundColor: 'white', color: 'black', marginTop: -4, width: 340, height: 40 }}
          containerStyle={{ backgroundColor: '#1cc391', borderBottomColor: '#1cc391', borderTopColor: '#1cc391' }}
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
        </Header>
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
  container2: {
    height: 300,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    color: 'white',
    marginRight: 185
  },
  farmacia: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 15
  },
  search: {
    alignItems: 'center'
  },  
  rua: {
    fontFamily: 'Ubuntu-LightItalic',
    fontSize: 13
  },
  header: {
    backgroundColor: "#1cc391",
    flexDirection: 'row',
    padding: 15,
    borderColor: commonStyles.colors.primaryDark,
    justifyContent: 'space-between',
  },
  icon: {
    color: 'white',
    marginLeft: 10,
    marginTop: 15,
  },
  container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#FFF',
    margin: 6,
    padding: 6,
    borderRadius: 5
  },
});