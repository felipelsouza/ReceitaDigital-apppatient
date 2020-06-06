import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

import api from '../services/api'

export default class Recipes extends Component {
    state = {
        items: null,
        cpf: '16849849849'
    }

    async componentDidMount() {
        await api.get('/receitas')
            .then(res => this.setState({ items: res.data }))
        const arr = this.state.items
        var items = arr.map(function (prods) {
            if(prods.CPF_PACIENTE_RECEITA.data === this.state.cpf)
            return prods
        })
        this.setState({ items: items })
    }

    renderItem = ({ item }) => (
        <View>
            <Text>{item.NOME_PACIENTE_RECEITA}</Text>
            <Text>{item.MEDICAMENTO_RECEITA}</Text>
        </View>
    )

    render() {
        return (
            <FlatList
                    style={{ marginTop: 30 }}
                    data={this.state.items}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                    onEndReached={this.loadRepositories}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={this.renderFooter}
                />
        )
    }
}