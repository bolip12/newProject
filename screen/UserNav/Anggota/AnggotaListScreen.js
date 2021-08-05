import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider as PaperProvider, Appbar, List, Portal, Modal, DataTable, Button, IconButton } from 'react-native-paper';

import supabase from '../../../config/supabase';
import Theme from '../../../config/Theme';
import storeApp from '../../../config/storeApp';
import styleApp from '../../../config/styleApp';

import dateFormatDB from '../../../component/dateFormatDB';
import Loading from '../../../component/Loading';

class AnggotaListScreen extends Component {

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
            <Appbar.Content title="Keanggotaan" />
          </Appbar.Header>

          <ScrollView style={styleApp.ScrollView}>

            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Nama</DataTable.Title>
                <DataTable.Title>Parent</DataTable.Title>
                <DataTable.Title>No. Telp</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Rahmat</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>0877777</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Alif</DataTable.Cell>
                <DataTable.Cell>Rahmat</DataTable.Cell>
                <DataTable.Cell>0877888</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Jihan</DataTable.Cell>
                <DataTable.Cell>Rahmat</DataTable.Cell>
                <DataTable.Cell>0877999</DataTable.Cell>
              </DataTable.Row>

            </DataTable>
          </ScrollView>

          <Button
              mode="contained"
              icon="plus"
              onPress={() => this.props.navigation.navigate('AnggotaInsertScreen')}
              style={styleApp.Button}
          >
            Tambah Anggota
          </Button>

          <Loading isLoading={this.state.isLoading} />

        </PaperProvider>
      )
  }
}

export default AnggotaListScreen;
