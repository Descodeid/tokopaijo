import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'
import normalize from 'react-native-normalize';



const Splash = ({navigation}) => {
    React.useEffect(() => {
      setTimeout(() => {
        navigation.replace('Login');
      }, 3000);
    });

    return (
        <View style={styles.page}>

            <Logo/>
            <Text style={styles.teks}>TOKOPAIJO</Text>
        </View>
        
    )
}

export default Splash

const styles = StyleSheet.create({
    page:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FC6828'
    },
    teks:{
        fontFamily:'Poppins-Bold',
        fontWeight:'400',
        fontSize:normalize(27),
        color:'white'
    }
})
