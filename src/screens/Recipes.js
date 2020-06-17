import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native'

import Swiper from 'react-native-swiper'

import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import api from '../services/api'

export default class Recipes extends Component {
    state = {
        recipes: [],
        doctors: [],
        cpfMed: []
    }

    async componentDidMount() {
        await api.get('/receitasPaciente/88888888888')
            .then(res => this.setState({ recipes: res.data }))

        const arr = this.state.recipes
        var cpfMed = arr.map((meds) => {
            return meds.CPF_MEDICO
        })

        this.setState({ cpfMed: cpfMed })
    }

    async renderDoc() {
        await api.get(`/users/${this.state.cpfMed}`)
    }

    renderRecipes() {
        const { recipes, doctors } = this.state

        //const med = `${medicaments}`
        //var medList = med.replace(/,/g, "\n")

        //console.log(medList)

        if (recipes.length === 0) {
            return (
                <View style={styles.container}>
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
            <View style={{ flex: 4 }}>
                <Swiper style={styles.body} showsButtons={true} key={Math.random()}>
                    {recipes.map((meds) => (
                        <View key={Math.random()}>
                            <View style={{ flexDirection: 'row', marginBottom: 16, alignItems: 'center' }}>
                                <Text style={[styles.title]}>Status da Receita:</Text>
                                <Text key={Math.random()}
                                    style={[styles.status, meds.STATUS_RECEITA === 'Disponível' ? {} : {
                                    fontWeight: 'bold',
                                    color: '#FFFFFF',
                                    fontSize: 15,
                                    backgroundColor: 'red',
                                    padding: 4}
                                ]}>{meds.STATUS_RECEITA}</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Medicamentos:</Text>
                                <ScrollView style={[styles.textArea, { height: 50 }]}>
                                    <Text key={Math.random()}>{meds.MEDICAMENTO_RECEITA}</Text>
                                </ScrollView>
                            </View>
                            <View>
                                <Text style={styles.title}>Dosagens:</Text>
                                <ScrollView style={[styles.textArea, { height: 80 }]}>
                                    <Text key={Math.random()}>{meds.DOSAGEM}</Text>
                                </ScrollView>
                            </View>
                            <View>
                                <Text style={styles.title}>Observações:</Text>
                                <ScrollView style={[styles.textArea, { height: 80 }]}>
                                    <Text key={Math.random()}>{meds.OBS_RECEITA_PACIENTE}</Text>
                                </ScrollView>
                            </View>
                            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                                <Text style={styles.title}>Vencimento da Receita:</Text>
                                <Text key={Math.random()} style={styles.title}>
                                    {moment(meds.DATA_RECEITA).locale('pt-br').format('DD/MM/YYYY')}
                                </Text>
                            </View>
                        </View>
                    ))}
                </Swiper >
            </View>
        )

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
                <View style={{ height: '90%' }}>
                    {this.renderRecipes()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    //wrapper: {},
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
        padding: '5%'
    },
    title: {
        fontWeight: 'bold',
        color: commonStyles.colors.primary,
        marginHorizontal: 16,
        fontSize: 15
    },
    status: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 15,
        backgroundColor: commonStyles.colors.primary,
        padding: 4
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
    textArea: {
        borderWidth: 1,
        borderColor: commonStyles.colors.primary,
        borderRadius: 10,
        marginHorizontal: 16,
        marginBottom: 7,
        //justifyContent: 'center',
        padding: 5,
        width: '80%'
    }
})