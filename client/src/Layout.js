import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Movies from "./component/Movies";

const Layout = () => (
	<div>
		<AppBar position="static">
			<Toolbar>
				<IconButton color="inherit" aria-label="Menu">
					<MenuIcon/>
				</IconButton>
			</Toolbar>
		</AppBar>
		<Movies/>
	</div>
);

export default Layout;
