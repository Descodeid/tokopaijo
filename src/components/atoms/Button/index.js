import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import normalize from 'react-native-normalize'

const Button = () => {
    return (
        <TouchableOpacity style={styles.Button}>
            <Text style={styles.teks}>LOGIN</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    Button:{
        padding:normalize(10),
        backgroundColor:'#FC6828',
        textAlign:'center',
        borderRadius:normalize(12),
        marginHorizontal:normalize(50),
    },
    teks :{
       textAlign:'center',
            fontFamily:'Poppins-Medium',
            fontSize: normalize(22),
            color: '#ffff',
    }

})


