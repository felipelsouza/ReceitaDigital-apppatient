import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import api from '../services/api'

export default class Recipes extends Component {
    state = {

    }

    render() {
        const today = moment().locale('pt-br').format('DD/MM/YYYY')

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.addIcon} activeOpacity={0.8}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="angle-left" size={15}
                            color={commonStyles.colors.secondary}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Receita Digital</Text>
                    <Text style={styles.title}>{today}</Text>
                </View>
                <View>
                    <Text>NOME</Text>
                    <Text>CPF</Text>
                </View>
                <View>
                    <ScrollView>
                        <Text>Medicamento</Text>
                        <Text>Dosagem</Text>
                        <Text>Obs</Text>
                    </ScrollView>
                </View>
                <View>
                    <Text>Medico</Text>
                    <Text>CRM</Text>
                    <Text>UF</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: commonStyles.colors.primaryDark,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        color: commonStyles.colors.primary,
        fontSize: 15
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

})