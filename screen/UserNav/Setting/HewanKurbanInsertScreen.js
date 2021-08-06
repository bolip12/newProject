import React, { Component } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Provider as PaperProvider, Text, Appbar, Button, TextInput, Portal, Modal, HelperText, Divider, Subheading } from 'react-native-paper';
import { showMessage } from "react-native-flash-message";
import { Picker } from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import styleApp from '../../../config/styleApp';
import Loading from '../../../component/Loading';

class HewanKurbanInsertScreen extends ValidationComponent {

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


  //memanggil api untuk menyimpan data
  async onSubmit() {

      this.props.navigation.navigate('HewanKurbanScreen')

      showMessage({
        message: "Data berhasil disimpan",
        type: 'success',
        icon: 'success',
      });
    }
  

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Insert Hewan Kurban" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <HelperText style={{marginHorizontal:10, marginTop:10}}>Jenis</HelperText>
            <Picker
              selectedValue={this.state.jenis}
              onValueChange={(itemValue, itemIndex) => this.setState({jenis:itemValue})}
              style={{margin:10}}
              mode='dropdown'
            >
              <Picker.Item label="Pilih Jenis " value="" />
              <Picker.Item key={1} label='Domba' value='Domba' />
              <Picker.Item key={2} label='Sapi' value='Sapi' />
            </Picker>
            <Divider style={{ marginHorizontal: 10 }} />

            <TextInput
              label="Nama"
              value={this.state.nama}
              onChangeText={text => this.setState({nama:text})}
              style={styleApp.TextInput}
            />

            <TextInput
              label="Berat"
              value={this.state.berat}
              right={<TextInput.Affix text="Kg" />}
              onChangeText={text => this.setState({berat:text})}
              keyboardType="numeric"
              style={styleApp.TextInput}
            />

            <TextInput
              label="Harga"
              value={this.state.harga}
              onChangeText={text => this.setState({harga:text})}
              keyboardType="numeric"
              style={styleApp.TextInput}
            />


          </ScrollView>

          <Button
              mode="contained"
              icon="content-save"
              onPress={() => this.onSubmit()}
              style={styleApp.Button}
          >
            Simpan
          </Button>


          <Loading isLoading={this.state.isLoading} />
        </PaperProvider>
      )
  }
}

export default HewanKurbanInsertScreen;
