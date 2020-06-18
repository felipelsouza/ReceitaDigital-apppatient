import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import Swiper from 'react-native-swiper'

import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import api from '../services/api'

const initialState = {
    medicaments: null,
    dosages: null,
    obs: null,
}

export default class Recipes extends Component {
    state = {
        ...initialState,
        recipes: []
    }

    async componentDidMount() {
        await api.get('/receitas/10765536641')
            .then(res => this.setState({ recipes: res.data }))
        const arr = this.state.recipes

        var meds = arr.map((function (meds) {
            return meds.MEDICAMENTO_RECEITA
        }))

        var dos = arr.map((function (dos) {
            return dos.DOSAGEM
        }))

        var obs = arr.map((function (obs) {
            return obs.OBS_RECEITA_PACIENTE
        }))

        this.setState({ medicaments: meds, dosages: dos, obs: obs })
    }

    renderRecipes() {
        const { recipes, medicaments, dosages, obs } = this.state
        const today = moment().locale('pt-br').format('DD/MM/YYYY')

        if (recipes.length === 0) {
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
                    <View
                        style={
                            styles.body,
                            {
                                flexDirection: 'column',
                                paddingHorizontal: '10%',
                                paddingVertical: '50%'
                            }}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Icon name="folder-open" size={120}
                                color={'#00FF00'}
                                style={{ opacity: 0.3 }}
                            />
                            <Text style={styles.emptyData}>Ops..</Text>
                            <Text style={styles.emptyData}>Você não tem receitas disponíveis!</Text>
                        </View>
                    </View>
                </View>
            )
        }

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
                <View style={styles.body}>
                    <View>
                        <ScrollView>
                            <Text>{medicaments}</Text>
                            <Text>{dosages}</Text>
                            <Text>{obs}</Text>
                        </ScrollView>
                    </View>
                </View>
            </View >
        )

    }

    render() {

        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                {this.renderRecipes()}
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {},
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
    body: {
        //flex: 10,
        padding: '10%'
    },
    title: {
        fontWeight: 'bold',
        color: commonStyles.colors.primary,
        fontSize: 15
    },
    emptyData: {
        fontSize: 18,
        color: commonStyles.colors.primaryDark,
        fontWeight: 'bold'
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