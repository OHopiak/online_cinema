import React from "react";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'

const VideoPlayerOld = ({video}) => (
	<video width={'100%'} controls>
		<source src={video} type='video/mp4'/>
	</video>
);

const VideoPlayer = ({video}) => (
	<Player src={video} playsInline/>
);

export default VideoPlayer
