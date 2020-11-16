import React from 'react'
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'

const MainIcon = (props) =>{
    return(
        <TouchableOpacity>
            <Image source={{uri: props.imageUri, height: 50, width: 50}}/>
            <Text style={styles.iconText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconText: {
        color: 'green',
        textAlign: 'center'
    },

})

export default MainIcon