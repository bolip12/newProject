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

class KurbanListScreen extends Component {

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
            <Appbar.Content title="Kurban" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <List.Item 
              title="Domba 1" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 3,000,000"
              left={() => <Avatar.Icon size={35} icon="sheep" style={{ margin:5 }} />}
              right={() => 
                <InputSpinner
                  value={this.state.value}
                  min={0}
                  max={10}
                  type="float"
                  step={1}
                  onChange={(value) => this.setState({value: value})}
                  width={135}
                  height={40}
                  buttonFontSize={20}
                  buttonStyle={{ backgroundColor: '#ffffff' }}
                  inputStyle={{ fontSize:16, color:Theme.colors.primary}}
                  style={{ borderColor:Theme.colors.primary, borderWidth:1, height:45}}
                  buttonTextColor={Theme.colors.primary}
                  selectionColor={Theme.colors.primary}
                  colorPress={Theme.colors.primary}
                  buttonPressTextColor={'#ffffff'}
                /> }
            />
            <Divider />

            <List.Item 
              title="Domba 2" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 3,200,000"
              left={() => <Avatar.Icon size={35} icon="sheep" style={{ margin:5 }} />}
              right={() => 
                <InputSpinner
                  value={this.state.value2}
                  min={0}
                  max={10}
                  type="float"
                  step={1}
                  onChange={(value) => this.setState({value2: value})}
                  width={135}
                  height={40}
                  buttonFontSize={20}
                  buttonStyle={{ backgroundColor: '#ffffff' }}
                  inputStyle={{ fontSize:16, color:Theme.colors.primary}}
                  style={{ borderColor:Theme.colors.primary, borderWidth:1, height:45}}
                  buttonTextColor={Theme.colors.primary}
                  selectionColor={Theme.colors.primary}
                  colorPress={Theme.colors.primary}
                  buttonPressTextColor={'#ffffff'}
                /> }
            />
            <Divider />

            <List.Item 
              title="Domba 3" 
              titleStyle={{fontWeight:'bold'}}
              description="Rp. 3,500,000"
              left={() => <Avatar.Icon size={35} icon="sheep" style={{ margin:5 }} />}
              right={() => 
                <InputSpinner
                  value={this.state.value3}
                  min={0}
                  max={10}
                  type="float"
                  step={1}
                  onChange={(value) => this.setState({value3: value})}
                  width={135}
                  height={40}
                  buttonFontSize={20}
                  buttonStyle={{ backgroundColor: '#ffffff' }}
                  inputStyle={{ fontSize:16, color:Theme.colors.primary}}
                  style={{ borderColor:Theme.colors.primary, borderWidth:1, height:45}}
                  buttonTextColor={Theme.colors.primary}
                  selectionColor={Theme.colors.primary}
                  colorPress={Theme.colors.primary}
                  buttonPressTextColor={'#ffffff'}
                /> }
            />
            <Divider />

          </ScrollView>

          <Button
              mode="contained"
              icon="content-save"
              onPress={() => this.props.navigation.navigate('KurbanDetailScreen')}
              style={styleApp.Button}
          >
            Simpan
          </Button>

          <Loading isLoading={this.state.isLoading} />

        </PaperProvider>
      )
  }
}

export default KurbanListScreen;
