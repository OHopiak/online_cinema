import React from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from "./Layout";
import {blue} from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
	typography: {
		useNextVariants: true,
	},
});

const App = () => (
	<MuiThemeProvider theme={theme}>
		<CssBaseline/>
		<Layout/>
	</MuiThemeProvider>
);

export default App;
