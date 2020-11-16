import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Button} from 'react-native'



const ProductTypeBtn = (props) =>{
    let status
    return(
        <TouchableOpacity style={styles.button}>
            <View>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 34,
        marginRight: 10,
        borderWidth: 4,
        borderColor: '#5F8944'
    },
    text: {
        color: '#5F8944',
        textAlignVertical: "center",
        textAlign: "center",
        marginHorizontal: 34,
        marginTop: 3
    },

})
export default ProductTypeBtn