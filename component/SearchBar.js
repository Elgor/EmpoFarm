import React from 'react'
import Input from './Input.js'
import { EvilIcons } from '@expo/vector-icons'

import {View, StyleSheet, TextInput} from 'react-native'

const SearchBar = () => {
    return(
        <View style={style.search}>
            <EvilIcons name="search" size={24} color="black" style={style.icon}/>
            <TextInput placeholder="Cari Produk" style={style.input}/>
        </View>
    )
}

const style = StyleSheet.create({
    search: {
        flexDirection: 'row',
        backgroundColor: '#F1F1F1',
        width: 300,
        borderRadius: 6,
        marginRight: 11
    },
    icon: {
        margin: 10,
    },
})
export default SearchBar;