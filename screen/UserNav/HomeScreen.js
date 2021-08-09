import React, { Component } from 'react';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Title, Surface, Text, Divider, IconButton } from 'react-native-paper';
import { showMessage } from "react-native-flash-message";

import supabase from '../../config/supabase';
import Theme from '../../config/Theme';
import storeApp from '../../config/storeApp';
import Loading from '../../component/Loading';
import styleApp from '../../config/styleApp';

class HomeScreen extends Component {

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

      showMessage({
        message: "Berhasil Logout",
        type: 'success',
        icon: 'success',
      });
  }

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Content title="Home" />
            <Appbar.Action icon="power" onPress={() => this.onLogout('')} />
            {/*<Appbar.Action icon="bell-ring-outline" onPress={() => this.props.navigation.navigate('PesanScreen')} />*/}
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>


            <View style={{ flexDirection:'row', justifyContent: 'space-evenly', marginTop:20}}> 
              
              <View>
                <IconButton
                  icon="account"
                  size={40}
                  color='white'
                  style={{ backgroundColor: 'green'}}
                  onPress={() => this.props.navigation.navigate('Setting', { screen: 'ProfilScreen'})}
                />
                <Text style={{ alignSelf: 'center', fontSize:15 }} >Profil</Text>
              </View>

              <View>
                <IconButton
                  icon="format-list-numbered-rtl"
                  size={40}
                  onPress={() => console.log('Pressed')}
                  color='white'
                  style={{ backgroundColor: 'green' }}
                /> 
                <Text style={{ alignSelf: 'center', fontSize:15 }} >Tabungan</Text>  
                <Text style={{ alignSelf: 'center', fontSize:15 }} >Qurban</Text>     
              </View>

              <View>
                <IconButton
                  icon="history"
                  size={40}
                  onPress={() => console.log('Pressed')}
                  color='white'
                  style={{ backgroundColor: 'green'}}
                />   
                <Text style={{ alignSelf: 'center', fontSize:15 }} >Riwayat</Text>
                <Text style={{ alignSelf: 'center', fontSize:15 }} >Transaksi</Text>    
              </View>  

              
               
            </View>

            <View style={{ flexDirection:'row', marginTop: 25, marginHorizontal:50}}> 

              <View>
                <IconButton
                  icon="message-alert-outline"
                  size={40}
                  onPress={() => this.props.navigation.navigate('PesanScreen')}
                  color='white'
                  style={{ backgroundColor: 'green'}}
                />    
                <Text style={{ alignSelf: 'center', fontSize:15 }} >Pesan</Text>    
              </View>

              <View style={{ marginLeft:45 }}> 
                <IconButton
                  icon="account-group"
                  size={40}
                  onPress={() => this.props.navigation.navigate('Anggota', { screen: 'AnggotaListScreen'})}
                  color='white'
                  style={{ backgroundColor: 'green' }}
                />  
                <Text style={{ alignSelf: 'center', fontSize:15 }} >Anggota</Text>               
              </View>

            </View>

          </ScrollView>

          <Loading isLoading={this.state.isLoading} />


        </PaperProvider>
      )
  }
}


export default HomeScreen;