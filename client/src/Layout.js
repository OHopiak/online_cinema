import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Movies from "./component/Movies";
import MoviesDetails from "./component/MoviesDetails";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./component/Header";


const Layout = () => (
	<Router>
		<>
			<GlobalStyles/>
			<Header/>
			<Switch>
				<Route path='/' exact component={Movies}/>
				<Route path='/watch/:id' exact component={MoviesDetails}/>
			</Switch>
		</>
	</Router>
);

export default Layout;
