import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = (props) =>{
    return(
      <View style={styles.header}>
        <Text style={styles.headerText}>{props.text}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    header: {
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#3F3F3F',
      },
      headerText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 55,
        marginBottom: 19
      }
})
export default Header;