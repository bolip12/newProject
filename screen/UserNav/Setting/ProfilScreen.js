import React, { Component } from 'react';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Title, Surface, Text, Divider, IconButton, Avatar, Subheading } from 'react-native-paper';

import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import Loading from '../../../component/Loading';
import styleApp from '../../../config/styleApp';

class ProfilScreen extends Component {

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

  componentDidMount() {
    
  }
 

  onLogout() {
      //update redux
      storeApp.dispatch({
          type: 'LOGIN',
          payload: { isLogin:false }
      });
  }

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Action icon="arrow-left" onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Profil" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

          <View style={{flex:1, alignItems:'center', marginVertical:15 }}>
             <Avatar.Icon size={100} icon="account" />
          </View>
          
          <View style={{flex:1, alignItems:'center', marginBottom:10 }}>
            <Subheading>ID 01230931874719</Subheading>
          </View>
          <Divider />
          <List.Item
            title="Asep Saepullah"
            description="Nama"
          />
          <Divider />

          <List.Item
            title="123456789"
            description="NIK"
          />
          <Divider />

          <List.Item
            title="Jln. Pesanggrahan No. 7"
            description="Alamat"
          />
          <Divider />

          <List.Item
            title="08777777777"
            description="No. Hp"
          />
          <Divider />

          </ScrollView>

          <Loading isLoading={this.state.isLoading} />
        </PaperProvider>
      )
  }
}


export default ProfilScreen;