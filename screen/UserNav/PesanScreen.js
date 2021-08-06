import React, { Component } from 'react';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Title, Surface, Text, Divider, IconButton, Avatar, Subheading } from 'react-native-paper';

import supabase from '../../config/supabase';
import Theme from '../../config/Theme';
import storeApp from '../../config/storeApp';
import Loading from '../../component/Loading';
import styleApp from '../../config/styleApp';

class PesanScreen extends Component {

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
 

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Action icon="arrow-left" onPress={() => this.props.navigation.goBack()} />
            <Appbar.Content title="Pesan" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <List.Item
              title="Pesan 1"
            />
            <Divider />

            <List.Item
              title="Pesan 2"
            />
            <Divider />

            <List.Item
              title="Pesan 3"
            />
            <Divider />

            <List.Item
              title="Pesan 4"
            />
            <Divider />

          </ScrollView>

          <Loading isLoading={this.state.isLoading} />
        </PaperProvider>
      )
  }
}


export default PesanScreen;