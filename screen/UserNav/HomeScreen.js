import React, { Component } from 'react';
import { View, Alert, StyleSheet, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Title, Surface, Text, Divider, IconButton } from 'react-native-paper';

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
  }

  render() {
      return (
        <PaperProvider theme={Theme}>
          <Appbar.Header>
            <Appbar.Content title="Home" />
            <Appbar.Action icon="bell-ring-outline" onPress={() => this.props.navigation.navigate('PesanScreen')} />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>
          <View style={{alignSelf:'center', margin:10}}>
            <Title>Selamat Datang</Title>
          </View>
          <Divider/>


          <View style={{ flexDirection:'row', justifyContent: 'space-around'}}> 
              <IconButton
                icon="account"
                size={30}
                onPress={() => console.log('Pressed')}
              />     

              <IconButton
                icon="account"
                size={30}
                onPress={() => console.log('Pressed')}
              />      

              <IconButton
                icon="account"
                size={30}
                onPress={() => console.log('Pressed')}
              />              

              <IconButton
                icon="account"
                size={30}
                onPress={() => console.log('Pressed')}
              />      
          </View>

            

          </ScrollView>

          <Loading isLoading={this.state.isLoading} />


        </PaperProvider>
      )
  }
}


export default HomeScreen;