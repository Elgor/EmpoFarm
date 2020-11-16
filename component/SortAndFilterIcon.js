import React from 'react'
import Input from './Input.js'
import { AntDesign } from '@expo/vector-icons'
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native'

const SortAndFilterIcon = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    source={require('./../assets/icons/sort.png')}
                    style={styles.sort}
                ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    source={require('./../assets/icons/vector.png')}
                    style={styles.filter}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 5,
    },
    sort:{
        paddingLeft: 0,

    },
    filter: {
        padding: 11,
        marginTop: 4,
        marginLeft: 10,
    }
})
export default SortAndFilterIcon;
