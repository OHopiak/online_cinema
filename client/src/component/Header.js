import React from "react";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';

const Header = () => (
	<AppBar position="static">
		<Toolbar>
			<Link to={'/'}>
				<IconButton color="inherit" aria-label="Menu">
					<HomeIcon/>
				</IconButton>
			</Link>
		</Toolbar>
	</AppBar>

);

export default Header;
