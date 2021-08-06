import React from 'react';

//bottom tab
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomTab = createMaterialBottomTabNavigator();

//stack
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//template
import { Provider as PaperProvider } from 'react-native-paper';
import Theme from '../config/Theme';

//screens
import HomeScreen from '../screen/UserNav/HomeScreen';
import PesanScreen from '../screen/UserNav/PesanScreen';

import AnggotaListScreen from '../screen/UserNav/Anggota/AnggotaListScreen';
import AnggotaInsertScreen from '../screen/UserNav/Anggota/AnggotaInsertScreen';

import KurbanListScreen from '../screen/UserNav/Kurban/KurbanListScreen';
import KurbanDetailScreen from '../screen/UserNav/Kurban/KurbanDetailScreen';

import PembayaranListScreen from '../screen/UserNav/Pembayaran/PembayaranListScreen';
import PembayaranKurbanScreen from '../screen/UserNav/Pembayaran/PembayaranKurbanScreen';
import PembayaranInsertScreen from '../screen/UserNav/Pembayaran/PembayaranInsertScreen';
import PembayaranUpdateScreen from '../screen/UserNav/Pembayaran/PembayaranUpdateScreen';

import SettingScreen from '../screen/UserNav/Setting/SettingScreen';
import ProfilScreen from '../screen/UserNav/Setting/ProfilScreen';
import HewanKurbanScreen from '../screen/UserNav/Setting/HewanKurbanScreen';
import HewanKurbanInsertScreen from '../screen/UserNav/Setting/HewanKurbanInsertScreen';


export default function UserNav() {
  return (
  	<PaperProvider theme={Theme}>
	    <NavigationContainer>
	      	<BottomTab.Navigator
	      		activeColor="white"
	          	inactiveColor="silver"
	          	barStyle={{backgroundColor:Theme.colors.primary}}
	          	shifting={false}
	        >

	        {/*tab anggota dengan stack list, insert & update*/}
	       	<BottomTab.Screen
						name="Home"
						options={{
							tabBarLabel: 'Home',
							tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={25} />)
						}}
					>
					{() => (<Stack.Navigator>
			                <Stack.Screen
			                  name="HomeScreen"
			                  component={HomeScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="PesanScreen"
			                  component={PesanScreen}
			                  options={{headerShown:false}}
			                />
										</Stack.Navigator>
					)}
         	</BottomTab.Screen>

	        
	        <BottomTab.Screen
						name="Anggota"
						options={{
							tabBarLabel: 'Anggota',
							tabBarIcon: ({color}) => (<MaterialCommunityIcons name="account" color={color} size={25} />)
						}}
					>
					{() => (<Stack.Navigator>
			                <Stack.Screen
			                  name="AnggotaListScreen"
			                  component={AnggotaListScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="AnggotaInsertScreen"
			                  component={AnggotaInsertScreen}
			                  options={{headerShown:false}}
			                />
										</Stack.Navigator>
					)}
         	</BottomTab.Screen>

         	<BottomTab.Screen
						name="Kurban"
						options={{
							tabBarLabel: 'Kurban',
							tabBarIcon: ({color}) => (<MaterialCommunityIcons name="sheep" color={color} size={25} />)
						}}
					>
					{() => (<Stack.Navigator>
			                <Stack.Screen
			                  name="KurbanListScreen"
			                  component={KurbanListScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="KurbanDetailScreen"
			                  component={KurbanDetailScreen}
			                  options={{headerShown:false}}
			                />
										</Stack.Navigator>
					)}
         	</BottomTab.Screen>

         	<BottomTab.Screen
						name="Pembayaran"
						options={{
							tabBarLabel: 'Pembayaran',
							tabBarIcon: ({color}) => (<MaterialCommunityIcons name="credit-card-outline" color={color} size={25} />)
						}}
					>
					{() => (<Stack.Navigator>
			                <Stack.Screen
			                  name="PembayaranListScreen"
			                  component={PembayaranListScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="PembayaranKurbanScreen"
			                  component={PembayaranKurbanScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="PembayaranInsertScreen"
			                  component={PembayaranInsertScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="PembayaranUpdateScreen"
			                  component={PembayaranUpdateScreen}
			                  options={{headerShown:false}}
			                />
			                
										</Stack.Navigator>
					)}
         	</BottomTab.Screen>

         	<BottomTab.Screen
						name="Setting"
						options={{
							tabBarLabel: 'Setting',
							tabBarIcon: ({color}) => (<MaterialCommunityIcons name="cog-outline" color={color} size={25} />)
						}}
					>
					{() => (<Stack.Navigator>
			                <Stack.Screen
			                  name="SettingScreen"
			                  component={SettingScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="ProfilScreen"
			                  component={ProfilScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="HewanKurbanScreen"
			                  component={HewanKurbanScreen}
			                  options={{headerShown:false}}
			                />
			                <Stack.Screen
			                  name="HewanKurbanInsertScreen"
			                  component={HewanKurbanInsertScreen}
			                  options={{headerShown:false}}
			                />
			                
			                
										</Stack.Navigator>
					)}
         	</BottomTab.Screen>

	    	</BottomTab.Navigator>
	    </NavigationContainer>
    </PaperProvider>
  );
}
