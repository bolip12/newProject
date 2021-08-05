import React, { Component } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, Button, TextInput, HelperText, Portal, Modal, ActivityIndicator, Dialog, IconButton, Title, Subheading, Paragraph } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { showMessage } from "react-native-flash-message";
import ValidationComponent from 'react-native-form-validator';
import supabase from '../../config/supabase.js';

import Theme from '../../config/Theme';
import styleApp from '../../config/styleApp';
import storeApp from '../../config/storeApp';
import Loading from '../../component/Loading';

class RegisterScreen extends ValidationComponent {

  constructor(props) {
      super(props);

      //redux variable
      this.state = storeApp.getState();
      storeApp.subscribe(()=>{
        this.setState(storeApp.getState());
      });

      this.state = {
        ...this.state,
        
      };
  }

  componentDidMount() {
   
  }


  async onRegister() {
    
    this.props.navigation.navigate('LoginScreen');                       
  
  }

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Action icon="arrow-left" onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Daftar" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>
            <TextInput
              label="Nama"
              value={this.state.nama}
              onChangeText={text => this.setState({nama:text})}
              style={styleApp.TextInput}
            />

            <TextInput
              label="NIK"
              value={this.state.nik}
              onChangeText={text => this.setState({nik:text})}
              style={styleApp.TextInput}
            />

            <TextInput
              label="Alamat"
              value={this.state.alamat}
              onChangeText={text => this.setState({alamat:text})}
              style={styleApp.TextInput}
            />
            

            <TextInput
              label="Email"
              value={this.state.email}
              onChangeText={text => this.setState({email:text})}
              style={styleApp.TextInput}
            />
            

            <TextInput
              label="Sandi"
              value={this.state.sandi}
              onChangeText={text => this.setState({sandi:text})}
              secureTextEntry={true}
              style={styleApp.TextInput}
            />
            
            <TextInput
              label="Referensi"
              value={this.state.referensi}
              onChangeText={text => this.setState({referensi:text})}
              style={styleApp.TextInput}
            />
          </ScrollView>
          
          <Button
              mode="contained"
              icon="check"
              onPress={() => this.onRegister()}
              style={styleApp.Button}
          >
            Daftar
          </Button>
          

          <Loading isLoading={this.state.isLoading} />
        </PaperProvider>
      )
  }
}

export default RegisterScreen;
