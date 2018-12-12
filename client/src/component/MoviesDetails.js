import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/es/Paper";
import Grid from "@material-ui/core/Grid";
import VideoPlayer from "./VideoPlayer";
import {attachmentUrl} from "../utils/api";
import moment from 'moment';

const style = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    },
    video: {
        padding: theme.spacing.unit,
        // width: '100%',
        // height: '400px',
    },
    video_block: {
        display: 'flex',
        alignItems: 'center',
        margin: 10,
        fontSize: 18,
        fontWeight: 700,
        fontFamily: 'sans-serif',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    video_block_text: {
        margin: '0 0 0 10px',
        fontWeight: 100,
    }

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
                    Video player
                </Typography>
                <Grid container
                >
                    <Grid item sm={12}>
                        <Paper className={classes.video}>
                            {movie.video &&
                            <VideoPlayer video={video}
                            />
                            }

                            <Typography variant="h4"
                            >
                                {movie.name}
                            </Typography>
                            <div className={classes.video_block}>
                                Genre: <span className={classes.video_block_text}> {movie.genre}</span>
                            </div>
                            <div className={classes.video_block}
                            >
                                Date uploaded: <span
                                className={classes.video_block_text}> {moment(movie.uploaded).format('DD/MM/YY')}</span>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <pre>
					{/*{JSON.stringify(movie, null, 2)}*/}
				</pre>
            </div>
        )
    }
}

export default withStyles(style)(MoviesDetails);
