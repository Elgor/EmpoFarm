import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

const Input = (props) =>{
    return(
      <View>
        <TextInput placeholder={props.placeholder}/>
      </View>
    )
}

const styles = StyleSheet.create({

})
export default Input;