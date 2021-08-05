import React from 'react';

//stack
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//template
import { Provider as PaperProvider } from 'react-native-paper';
import Theme from '../config/Theme';

//screen
import LoginScreen from '../screen/FrontNav/LoginScreen';
import RegisterScreen from '../screen/FrontNav/RegisterScreen';

export default function FrontNav() {
  return (
  	<PaperProvider theme={Theme}>
	    <NavigationContainer>
	      	
	      	<Stack.Navigator>
              <Stack.Screen 
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown:false}}
              />
              <Stack.Screen 
                name="RegisterScreen"
                component={RegisterScreen}
                options={{headerShown:false}} 
              />
              
					</Stack.Navigator>

	    </NavigationContainer>
    </PaperProvider>
  );
}