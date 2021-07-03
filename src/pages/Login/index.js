import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Logo2,Profil,Lock,Line,Google,FB,Mac} from '../../assets';
import {Button} from '../../components';
import normalize from 'react-native-normalize';

const Login = () => {
  return (
    <View style={styles.page}>
    
      <View style={styles.Logo}>
      <Logo2 />
      <Text style={styles.teks}>TOKOPAIJO</Text>
      </View>
      
      <View style={styles.form}>
        <Profil/>
        <TextInput style={styles.input} placeholder='Username' placeholderTextColor='gray'></TextInput>
      </View>
      <View style={styles.form}>
        <Lock/>
        <TextInput style={styles.input} placeholder='Password' placeholderTextColor='gray'></TextInput>
      </View>
      <Text style={styles.lupa}>Forgot Password?</Text>
      <Button/>
      <Line style={styles.line} />
      <View style={styles.logologo}>
        <FB style={styles.logobatas}/>
        <Google style={styles.logobatas}/>
        <Mac style={styles.logobatas}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.foot1}> Don't have an account?</Text>
        <Text style={styles.foot2}>  Sign Up</Text>
      </View>

    

    </View>
  
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    paddingTop:normalize(50),
    flex:1,
    backgroundColor: '#ffff',
  },
  Logo:{
      justifyContent:'center',
      alignItems:'center'
  },
  form:{
    paddingTop:normalize(10),
    elevation:5,
    alignItems:'center',
    paddingLeft:normalize(20),
    flexDirection:'row',
    marginHorizontal:normalize(40),
    borderRadius:normalize(16),
    backgroundColor: 'white',
    marginBottom : normalize(20),
  },
  teks: {

    fontFamily:'Poppins-Bold',
    fontSize: normalize(27),
    color: '#FC6828',
    paddingBottom:normalize(20),
  },
  lupa: {

    paddingBottom:normalize(10),
    textAlign:'center',
    fontFamily:'Poppins-Regular',
    fontSize: normalize(18),
    color: 'black',
    alignItems:'center',
  },
  input: {
    paddingLeft:normalize(10),
    
  },
  line:{
    marginTop:normalize(24),

  },
  logologo:{
    alignItems:'center',
    alignContent:'center',
    flexDirection:'row',
    justifyContent:'center',
  },
  logobatas:{
    margin:normalize(10),
  },
  foot1:{
    color:'#040415',
    fontFamily:'Poppins-Regular',
    marginLeft:normalize(20),
  },
  foot2:{
    fontFamily:'Poppins-Medium',
    color: '#FC6828',
    paddingRight:normalize(10),
  },
  footer:{
    paddingTop:normalize(30),
    alignItems:'center',
    alignContent:'center',
    flexDirection:'row',
    justifyContent:'center', 
  }
 
  
});
