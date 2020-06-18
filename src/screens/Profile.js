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
import { HomeContainer } from './components/Profile/styled'

import { Container, Header, Content, Tab, Tabs, Left, Body, Title, Right } from 'native-base';

import commonStyles from '../commonStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/imgs/logo.png'

import moment from 'moment'
import 'moment/locale/pt-br'

export default class Home extends Component {
    render() {
        const name = 'Samuel'
        return (
            <HomeContainer >
                <Header androidStatusBarColor="#1cc391" style={styles.header2}>
                <Left style={styles.left}>
                    <FontAwesomeIcon style={styles.icon} icon={ faChevronLeft }/>
                </Left>
                <Right style={styles.right}>
                    <FontAwesomeIcon style={styles.icon2} icon={ faBell }/>
                </Right>
                </Header>
                <View style={styles.container}>

                    <View style={styles.header} androidStatusBarColor="#1cc391"></View>
                    <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>Samuel Ximenes</Text>
                            <View style={styles.row}>
                                <Text style={styles.info}>Receitas            </Text>
                                <Text style={styles.info}>Avaliações</Text>
                            </View>
                            <View style={styles.row2}>
                                <Text style={styles.description}>5                 </Text>
                                <Text style={styles.description}>5</Text>
                            </View>

                            {/* <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={{fontFamily: 'Ubuntu-Medium'}}>Opcion 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={{fontFamily: 'Ubuntu-Medium'}}>Opcion 2</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </HomeContainer>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1cc391",
        height: 200,
    },
    header2: {
        backgroundColor: "#1cc391",
        height: 50
    },
    left:{
        height: 10,
    },
    right:{
        height: 10,
    },
    name: {
        marginLeft: -60,
        fontFamily: 'Ubuntu-Medium'
    },
    row: {
        paddingTop: 50,
        alignItems: 'center',
        alignContent: "space-between",
        flexDirection: 'row',
    },
    row2: {
        paddingTop: 30,
        paddingBottom: 50,
        alignItems: 'center',
        alignContent: "space-between",
        flexDirection: 'row',
    },
    icon: {
        color: 'white',
        marginLeft: 10
    },
    icon2: {
        color: 'white',
        marginRight: 10
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,

    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 16,
        color: "#1cc391",
        marginTop: 10
    },
    description: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 25,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "white",
    },
})