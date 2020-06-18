import React, { Component } from 'react'
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button
} from 'react-native'
import { BottomNavigator, SwipperBox } from './components'
import { HomeContainer, SwiperContainer, Swiper } from './styled'

import {Container, Header, Content, Tab, Tabs, Left, Body, Title } from 'native-base';

import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import logo from '../../assets/imgs/logo.png'

import moment from 'moment'
import 'moment/locale/pt-br'

export default class Home extends Component {
    render() {
        const today = moment().locale('pt-br').format('dddd, D [de] MMMM')
        const name = 'Samuel'
        return (
            <HomeContainer>
                <Header androidStatusBarColor="#1cc391" style={styles.header} hasTabs>
                    <Left>
                        <Image small source={logo} style={styles.logo} />
                    </Left>
                    <Body>
                        <Title style={styles.name}>{name}</Title>
                    </Body>
                </Header>
                <SwiperContainer>
                    <SwipperBox ></SwipperBox>
                </SwiperContainer>
                <BottomNavigator navigation= {this.props.navigation}/>
            </HomeContainer>
            // <View style={styles.container}>

            //     <Tabs style={styles.home}>
            //         <Tab heading="Tab1">
            //             <View style={[ styles.container, { backgroundColor: '#ccc' } ]}>
            //                     <Text>Aba 1</Text>
            //             </View>
            //         </Tab>
            //         <Tab heading="Tab2">
            //             <View style={[ styles.container, { backgroundColor: '#673ab7' } ]}>
            //                 <Text>Aba 2</Text>  
            //             </View>
            //         </Tab>
            //         <Tab heading="Tab3">
            //             <View style={[ styles.container, { backgroundColor: '#eee' } ]}>
            //                 <Text>Aba 3</Text>             
            //             </View>
            //         </Tab>
            //     </Tabs>
            //     <View style={styles.footer}>

            //         <TouchableOpacity style={styles.addIcon} activeOpacity={0.8}
            //             onPress={() => this.props.navigation.navigate('Perfil')}>
            //             <Icon name="user" size={20}
            //                 color={commonStyles.colors.secondary}
            //             />
            //         </TouchableOpacity>
            //         <TouchableOpacity style={styles.addIcon} activeOpacity={0.8}
            //             onPress={() => this.props.navigation.navigate('Login')}>
            //             <Icon name="sign-out" size={20}
            //                 color={commonStyles.colors.secondary}
            //             />
            //         </TouchableOpacity>
            //     </View>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: { 
        backgroundColor: "#1cc391",
    },
    buttonContainer: {
        flex: 0.4,
        justifyContent: "space-between",
        top: 160
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
    logo: {
        width: 40,
        height: 40,
    },
    name: {
        marginLeft: -60,
        fontFamily: 'Ubuntu-Medium'
    },
    backgroud: {
        flex: 4
    },
    home: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
        borderBottomWidth: 1.8
    },
    title: {
        fontSize: 28,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20,
        fontWeight: "bold"
    },
    regularText: {
        color: commonStyles.colors.secondary,
        fontSize: 15
    },
    subtitle: {
        fontSize: 24,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
    },
    footer: {
        flex: 0.6,
        paddingHorizontal: 60,
        padding: 12,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: commonStyles.colors.primaryDark,
        backgroundColor: '#FFF'
    },
    addIcon: {
        flexDirection: 'row',
        width: 35,
        height: 35,
        borderRadius: 12,
        backgroundColor: commonStyles.colors.primaryDark,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        borderColor: commonStyles.colors.primaryDark,
        borderWidth: 1.8,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: commonStyles.colors.primary,
        marginBottom: 50,
        height: 65,
        width: 280,
        borderRadius: 40
    },
    regularText: {
        color: commonStyles.colors.secondary,
        fontSize: 20
    },
    tabs: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        height: 100,
        width: 80,
        marginRight: 10,
        borderRadius: 3,
        padding: 8,
        justifyContent: "space-between",
    }
})