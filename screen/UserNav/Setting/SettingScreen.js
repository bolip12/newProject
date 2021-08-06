import React from 'react';
import { ScrollView, FlatList, View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Colors, Badge, Divider, Button, Text, Subheading, Chip, TouchableRipple } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from "react-native-flash-message";

import supabase from '../../../config/supabase.js';
import storeApp from '../../../config/storeApp';
import theme from '../../../config/Theme.js';
import styleApp from '../../../config/styleApp.js';

class Setting extends React.Component {

  constructor(props) {
    super(props);

    this.state = storeApp.getState();  
    storeApp.subscribe(()=>{
      this.setState(storeApp.getState());
    });

    this.state = {
        ...this.state,
    }
  }

  componentDidMount() {
  }

  onLogout() {

    storeApp.dispatch({
        type: 'LOGIN',
        payload: { isLogin:false}
      });
  }

  render() {
    return (
      <PaperProvider theme={theme}>

        <Appbar.Header>
          <Appbar.Content title="Setting" />
        </Appbar.Header>

        <ScrollView style={styleApp.ScrollView}>

          <List.Item
            title="Profil"
            onPress={() => this.props.navigation.navigate('ProfilScreen')}
            left={props => <List.Icon {...props} icon="account" color={theme.colors.primary}/>}
            right={props => <List.Icon {...props} icon="arrow-right" color={theme.colors.primary} />}
            
          />
          <Divider />
          <List.Item
            title="Hewan Kurban"
            onPress={() => this.props.navigation.navigate('HewanKurbanScreen')}
            left={props => <List.Icon {...props} icon="sheep" color={theme.colors.primary} />}
            right={props => <List.Icon {...props} icon="arrow-right" color={theme.colors.primary} />}
            
          />
          <Divider />
         
          <List.Item
            title="Logout"
            onPress={() => this.onLogout()}
            left={props => <List.Icon {...props} icon="logout" color={theme.colors.primary}/>}
            right={props => <List.Icon {...props} icon="arrow-right" color={theme.colors.primary} />}
            
          />
          <Divider />

        </ScrollView>

      </PaperProvider>
    );
  }
};


export default Setting;