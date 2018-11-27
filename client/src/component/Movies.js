import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom";

const style = theme => ({
	root: {
		padding: theme.spacing.unit * 2,
	},
	item: {
		padding: theme.spacing.unit,
	},
	media: {
		height: 200,
		objectFit: 'cover',
		objectPosition: '0 20%'
	},
});

class Movies extends React.Component {
	state = {
		response: '',
	};

	componentDidMount() {
		this.callApi('/api/movies')
			.then(response => this.setState({response}))
			.catch(err => console.log(err));
	}

	callApi = async (url) => {
		const response = await fetch(url);
		const body = await response.json();
		if (response.status !== 200) throw Error(body.message);
		return body;
	};

	render() {
		const {response} = this.state;
		const {classes} = this.props;
		const posterUrl = '/api/attachments/posters/download/';
		return (
			<Grid container className={classes.root}>
				{response && response.map(movie => (
					<Grid item sm={4} key={movie.id} className={classes.item}>
						<Card>
							<Link to={`/watch/${movie.id}`}>
								<CardActionArea>
									<CardMedia
										component="img"
										src={posterUrl + movie.poster}
										alt={movie.name}
										className={classes.media}
										height={140}
										title={movie.name}
									/>
									<CardContent>
										<Typography gutterBottom variant="body1">
											{movie.name}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Link>
						</Card>
					</Grid>
				))}
			</Grid>
		)
	}
}

export default withStyles(style)(Movies);
