import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/es/Paper";
import Grid from "@material-ui/core/Grid";
import VideoPlayer from "./VideoPlayer";
import {attachmentUrl} from "../utils/api";

const style = theme => ({
	root: {
		padding: theme.spacing.unit * 2,
	},
	video: {
		padding: theme.spacing.unit,
		// width: '100%',
		// height: '400px',
	},
});

class MoviesDetails extends React.Component {
	state = {
		movie: '',
	};

	componentDidMount() {
		const {id} = this.props.match.params;
		this.callApi('/api/movies/' + id)
			.then(movie => this.setState({movie}))
			.catch(err => console.log(err));
	}

	callApi = async (url) => {
		const response = await fetch(url);
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
	};

	render() {
		const {movie} = this.state;
		const {classes} = this.props;
		const video = attachmentUrl('movies', movie.video);
		return (
			<div className={classes.root}>
				<Typography gutterBottom variant="h3">
					{movie.name}
				</Typography>
				<Grid container>
					<Grid item sm={12}>
						<Paper className={classes.video}>
							{movie.video &&
							<VideoPlayer video={video}/>
							}
						</Paper>
					</Grid>
				</Grid>
				<pre>
					{JSON.stringify(movie, null, 2)}
				</pre>
			</div>
		)
	}
}

export default withStyles(style)(MoviesDetails);
