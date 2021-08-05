import React, { Component } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Provider as PaperProvider, Text, Appbar, Button, TextInput, Portal, Modal, HelperText, Divider } from 'react-native-paper';
import { showMessage } from "react-native-flash-message";
import { Picker } from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimeInput from '../../../component/dateTimeInput';
import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import styleApp from '../../../config/styleApp';
import Loading from '../../../component/Loading';

class PembayaranInsertScreen extends ValidationComponent {

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
        
        tanggal: new Date(),
      };
  }


  //memanggil api untuk menyimpan data
  async onSubmit() {

      this.props.navigation.navigate('PembayaranKurbanScreen')

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
            <Appbar.Content title="Login" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <HelperText style={{marginHorizontal:10, marginTop:10}}>Kategori</HelperText>
            <Picker
              selectedValue={this.state.bank}
              onValueChange={(itemValue, itemIndex) => this.setState({bank:itemValue})}
              style={{margin:10}}
              mode='dropdown'
            >
              <Picker.Item label="Pilih Bank" value="" />
              <Picker.Item key={1} label='BCA' value='BCA' />
              <Picker.Item key={2} label='Mandiri' value='Mandiri' />
              <Picker.Item key={3} label='BNI' value='BNI' />
            </Picker>
            <Divider style={{ marginHorizontal: 10 }} />

            <TextInput
              label="Nominal"
              value={this.state.nominal}
              onChangeText={text => this.setState({nominal:text})}
              keyboardType="numeric"
              style={styleApp.TextInput}
            />

            <DateTimeInput
              title="Tanggal Bayar"
              value={this.state.tanggal}
              mode="date"
              onChangeDate={(date) => this.setState({tanggal:date})}
            />
            <Divider style={{ backgroundColor: 'grey', marginHorizontal: 10 }}/>

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

export default PembayaranInsertScreen;
