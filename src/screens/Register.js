import React, { Component } from 'react'
import { 
    Text, 
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

import bg from '../../assets/imgs/pat-bg.png'
import logo from '../../assets/imgs/logo-dark.png'
import commonStyles from '../commonStyles'

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.background}>
                    <Image source={logo} style={styles.logo}></Image>
                    <TextInput
                    onChangeText={userName => this.setState({userName})}
                    placeholder="Nome"
                    style={styles.loginUS}
                    autoCorrect={false}>
                    </TextInput>
                    <TextInput
                    onChangeText={userCpf => this.setState({userCpf})}
                    placeholder="CPF"
                    style={styles.loginUS}
                    autoCorrect={false}>
                    </TextInput>
                    <TextInput
                    onChangeText={userSus => this.setState({userSus})}
                    placeholder="Cartão SUS"
                    style={styles.loginUS}
                    autoCorrect={false}>
                    </TextInput>
                    <TextInput
                    onChangeText={userSexo => this.setState({userSexo})}
                    placeholder="Sexo"
                    style={styles.loginUS}
                    autoCorrect={false}>
                    </TextInput>
                    <TextInput
                    onChangeText={userEmail => this.setState({userEmail})}
                    placeholder="Email"
                    style={styles.loginUS}
                    autoCorrect={false}>
                    </TextInput>
                    <TextInput
                    onChangeText={userPassword => this.setState({userPassword})}
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={styles.loginUS}
                    autoCorrect={false}>
                    </TextInput>
                        <TouchableOpacity style={styles.pressButton} onPress={this.login}>
                            <Text style={styles.textBtn}>Acessar</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },  
    loginUS: {
        backgroundColor: commonStyles.colors.secondary,
        width: '90%',
        marginBottom: 15,
        color: '#000',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },
    pressButton: {
        backgroundColor: '#4F4F4F',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    textBtn: {
        color: commonStyles.colors.secondary,
        fontSize: 18
    },
    backgroud: {
        flex: 1,
        height: '100%'
    },
})