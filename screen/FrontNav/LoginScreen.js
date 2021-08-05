import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Provider as PaperProvider, Text, Appbar, Button, TextInput, Portal, Modal, ActivityIndicator } from 'react-native-paper';
import { showMessage } from "react-native-flash-message";
import ValidationComponent from 'react-native-form-validator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import supabase from '../../config/supabase';
import Theme from '../../config/Theme';
import storeApp from '../../config/storeApp';
import styleApp from '../../config/styleApp';
import Loading from '../../component/Loading';

class LoginScreen extends ValidationComponent {

  constructor(props) {
      super(props);

      //redux variable
      this.state = storeApp.getState();
      storeApp.subscribe(()=>{
        this.setState(storeApp.getState());
      });

      //default state value
      this.state = {
        ...this.state,
       
      };
  }

  componentDidMount() {
    
  }

  

  //memanggil api untuk menyimpan data
  async onLogin() {

      storeApp.dispatch({
        type: 'LOGIN',
        payload: { isLogin:true}
      });

      showMessage({
        message: "Berhasil Login",
        type: 'success',
        icon: 'success',
      });
    }
  

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Content title="Login" />
          </Appbar.Header>

          <View style={{ marginBottom:10 }}>
            <TextInput
              label="Email"
              value={this.state.email}
              onChangeText={text => this.setState({email:text})}
              style={{marginHorizontal:10}}
            />

            <TextInput
              label="Password"
              value={this.state.password}
              onChangeText={text => this.setState({password:text})}
              secureTextEntry={true}
              style={{marginHorizontal:10}}
            />
          </View>

          <Button
              mode="contained"
              icon="login"
              onPress={() => this.onLogin()}
              style={styleApp.Button}
          >
            Login
          </Button>

          <View style={{flex:1, justifyContent:'flex-end', alignItems:'center', marginBottom:10}}>
            <Text>Belum Punya Akun ?</Text>
            <Button 
              mode='text'
              icon='account'
              onPress={() => this.props.navigation.navigate('RegisterScreen')}
              >
              Daftar
            </Button>
          </View>


          <Loading isLoading={this.state.isLoading} />
        </PaperProvider>
      )
  }
}

export default LoginScreen;
