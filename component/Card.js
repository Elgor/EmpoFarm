import React from 'react'
import { Text, Image, StyleSheet, FlatList} from 'react-native'

const Card = (props) =>{

    return( 
        <View style={StyleSheet.card}>
            <View style={StyleSheet.cardContent}>
                <FlatList>

                </FlatList>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    card: {

    },
    cardContent: {

    }
})

export default Card