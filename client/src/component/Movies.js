import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import CardContent from "@material-ui/core/CardContent";

const style = () => ({
	root: {
		padding: 16,
	},
	item: {
		padding: 8,
	}
});

class Movies extends React.Component {
	state = {
		response: '',
		post: '',
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
		return (
			<Grid container className={classes.root}>
				{response && response.map(movie => (
					<Grid item sm={4} key={movie.id} className={classes.item}>
						<Card>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="body1">
										{movie.name}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		)
	}
}

export default withStyles(style)(Movies);
