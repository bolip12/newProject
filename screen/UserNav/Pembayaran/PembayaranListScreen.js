import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Portal, Modal, DataTable, Button, IconButton, Divider, Avatar} from 'react-native-paper';
import InputSpinner from "react-native-input-spinner";

import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import styleApp from '../../../config/styleApp';

import dateFormatDB from '../../../component/dateFormatDB';
import Loading from '../../../component/Loading';

class PembayaranListScreen extends Component {

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
            <Appbar.Content title="Pembayaran" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <List.Item 
              title="Domba 1" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 6,000,000"
              left={() => <Avatar.Icon size={35} icon="sheep" style={{ margin:5 }} />}
              right={() => <IconButton icon='arrow-right' />}
              onPress={() => this.props.navigation.navigate('PembayaranKurbanScreen')}
            />
            <Divider />

          </ScrollView>

          <Loading isLoading={this.state.isLoading} />

        </PaperProvider>
      )
  }
}

export default PembayaranListScreen;
