import * as React from 'react';
import { LogBox } from 'react-native';
import FlashMessage from "react-native-flash-message";

//template
import { Provider as PaperProvider } from 'react-native-paper';
import Theme from './config/Theme';

//navigation
import FrontNav from './navigation/FrontNav';
import UserNav from './navigation/UserNav';

//storeApp
import storeApp from './config/storeApp';

LogBox.ignoreAllLogs();

class App extends React.Component {
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
				{this.state.isLogin ? <UserNav /> : <FrontNav />}
				<FlashMessage position="top" />
			</PaperProvider>
		)
	}

	
}

export default App;
