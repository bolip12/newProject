import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Portal, Modal, DataTable, Button, IconButton, Divider, Avatar, Subheading, Badge } from 'react-native-paper';
import InputSpinner from "react-native-input-spinner";

import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import styleApp from '../../../config/styleApp';

import dateFormatDB from '../../../component/dateFormatDB';
import Loading from '../../../component/Loading';

class PemabayaranKurbanScreen extends Component {

  constructor(props) {
      super(props);

      //get redux variable
      this.state = storeApp.getState();
      storeApp.subscribe(()=>{
        this.setState(storeApp.getState());
      });

      this.state = {
        ...this.state,

      };
  }



  render() {

      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Pembayaran Domba 1" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <List.Item 
              title="BCA" 
              titleStyle={{fontWeight:'bold'}}
              description="2,000,000"
              left={() => <Badge style={{ backgroundColor: Theme.colors.primary, margin: 10 }} size={40}>B</Badge>}
              right={() => <Subheading style={styleApp.Subheading}>05 Ags 2021</Subheading>}
              onPress={() => this.props.navigation.navigate('PemabayaranKurbanScreen')}
            />
            <Divider />

          </ScrollView>

          <Button
              mode="contained"
              icon="plus"
              onPress={() => this.props.navigation.navigate('PembayaranInsertScreen')}
              style={styleApp.Button}
          >
            Tambah Pembayaran
          </Button>

          <Loading isLoading={this.state.isLoading} />

        </PaperProvider>
      )
  }
}

export default PemabayaranKurbanScreen;
