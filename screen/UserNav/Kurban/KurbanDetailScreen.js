import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Portal, Modal, DataTable, Button, IconButton, Divider, Avatar, Badge, Subheading, TextInput, Chip, Dialog, Paragraph } from 'react-native-paper';
import InputSpinner from "react-native-input-spinner";

import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import styleApp from '../../../config/styleApp';

import dateFormatDB from '../../../component/dateFormatDB';
import Loading from '../../../component/Loading';
import FormBottom from '../../../component/formBottom.js';

class KurbanDetailScreen extends Component {

  constructor(props) {
      super(props);

      //get redux variable
      this.state = storeApp.getState();
      storeApp.subscribe(()=>{
        this.setState(storeApp.getState());
      });

      this.state = {
        ...this.state,

        formDisplay:false,
        formDisplay2:false,

        onBayarSuccess: false,


      };
  }


  toggleForm() {
      this.setState({formDisplay: !this.state.formDisplay});
  }

  toggleForm2() {
      this.setState({formDisplay2: !this.state.formDisplay2});
  }

  toggleDialog() {
    this.setState({onBayarSuccess:!this.state.onBayarSuccess});
  }

  render() {


      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Action icon="arrow-left" onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Detail" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <List.Item
              title='Domba 1'
              description='@3,000,000'
              left={props => <Badge style={{ backgroundColor:'white', borderColor:Theme.colors.primary, borderWidth:1, color:Theme.colors.primary, margin:10}} size={30}>2x</Badge>}
              right={props => <Subheading style={{ marginTop:10,fontWeight:'bold'}}>6,000,000</Subheading>}
            />
            <Divider />


            <List.Item
              title="DP Awal"
              style={{ marginVertical:5 }}
              right={() => <Chip icon="pencil" mode="outlined" style={{borderColor:Theme.colors.primary}} textStyle={{fontSize:12}} onPress={() => this.toggleForm('Diskon')}>2,000,000</Chip>}
            />
            <Divider />

             <List.Item
              title="Cicilan / Minggu"
              style={{ marginVertical:5 }}
              right={() => <Chip icon="pencil"  mode="outlined" style={{borderColor:Theme.colors.primary}} textStyle={{fontSize:12}} onPress={() => this.toggleForm2('Diskon')}>250,000</Chip>}
            />
            <Divider />

          </ScrollView>

          <Button
              mode="contained"
              icon="check"
              onPress={() => this.toggleDialog()}
              style={styleApp.Button}
          >
            Bayar
          </Button>

          <FormBottom
            title='DP Awal'
            display={this.state.formDisplay}
            onToggleForm={status => this.toggleForm()}
            formHeight="0">

              <TextInput 
                placeholder="Masukan Nominal"
                style={{ height:40, marginHorizontal:10, backgroundColor: Theme.colors.background}}
                keyboardType={'numeric'}
              />
               
            <Button 
              mode="contained"
              icon="content-save-outline" 
              onPress={() => this.toggleForm()}
              style={styleApp.Button}>
              Simpan
            </Button>

          </FormBottom>

          <FormBottom
            title='Cicilan'
            display={this.state.formDisplay2}
            onToggleForm={status => this.toggleForm2()}
            formHeight="0">

              <TextInput 
                placeholder="Masukan Nominal"
                style={{ height:40, marginHorizontal:10, backgroundColor: Theme.colors.background}}
                keyboardType={'numeric'}
              />
               
            <Button 
              mode="contained"
              icon="content-save-outline" 
              onPress={() => this.toggleForm2()}
              style={styleApp.Button}>
              Simpan
            </Button>

          </FormBottom>

          <Portal>
            <Dialog visible={this.state.onBayarSuccess} onDismiss={() => this.toggleDialog()}>
              <Dialog.Content>


                <View>
                  <Subheading>Kirim ke Rekening :</Subheading>
                  <Paragraph>1234567890 (BCA)</Paragraph>
                  <Paragraph>an. Asep Saepullah</Paragraph>

                </View>

                <View style={{ marginTop:15 }}>
                  <Subheading>Konfirmasi pembayaran :</Subheading>
                  <Paragraph>No. Hp 087777777</Paragraph>

                </View>

              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => this.props.navigation.navigate('PembayaranListScreen')}>OK, SAYA MENGERTI</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>

          <Loading isLoading={this.state.isLoading} />

        </PaperProvider>
      )
  }
}

export default KurbanDetailScreen;
