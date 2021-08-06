import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Portal, Modal, DataTable, Button, IconButton, Divider, Avatar } from 'react-native-paper';
import InputSpinner from "react-native-input-spinner";

import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import styleApp from '../../../config/styleApp';

import dateFormatDB from '../../../component/dateFormatDB';
import Loading from '../../../component/Loading';

class HewanKurbanScreen extends Component {

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
            <Appbar.Action icon="arrow-left" onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Hewan Kurban" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <List.Item 
              title="Domba 1" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 3,000,000"
              left={() => <Avatar.Icon size={35} icon="sheep" color="green" style={{ backgroundColor:'white', borderColor:Theme.colors.primary, borderWidth:1, color:Theme.colors.primary, margin:5}} />}
              
            />
            <Divider />

            <List.Item 
              title="Domba 2" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 3,200,000"
              left={() => <Avatar.Icon size={35} icon="sheep" color="green" style={{ backgroundColor:'white', borderColor:Theme.colors.primary, borderWidth:1, color:Theme.colors.primary, margin:5}} />}
              
            />
            <Divider />

            <List.Item 
              title="Domba 3" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 3,500,000"
              left={() => <Avatar.Icon size={35} icon="sheep" color="green" style={{ backgroundColor:'white', borderColor:Theme.colors.primary, borderWidth:1, color:Theme.colors.primary, margin:5}} />}
              
            />
            <Divider />

            <List.Item 
              title="Sapi 1" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 13,000,000"
              left={() => <Avatar.Icon size={35} icon="cow" color="green" style={{ backgroundColor:'white', borderColor:Theme.colors.primary, borderWidth:1, color:Theme.colors.primary, margin:5}} />}
              
            />
            <Divider />

            <List.Item 
              title="Sapi 2" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 15,000,000"
              left={() => <Avatar.Icon size={35} icon="cow" color="green" style={{ backgroundColor:'white', borderColor:Theme.colors.primary, borderWidth:1, color:Theme.colors.primary, margin:5}} />}
            />
            <Divider />

          </ScrollView>

          <Button
              mode="contained"
              icon="plus"
              onPress={() => this.props.navigation.navigate('HewanKurbanInsertScreen')}
              style={styleApp.Button}
          >
            Tambah
          </Button>

          <Loading isLoading={this.state.isLoading} />

        </PaperProvider>
      )
  }
}

export default HewanKurbanScreen;
