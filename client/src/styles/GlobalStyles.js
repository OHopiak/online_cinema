import withStyles from "@material-ui/core/styles/withStyles";

const globalStyles = () => ({
	'@global':{
		a: {
			color: 'inherit',
			textDecoration: 'inherit',
		}
	}
});

export default withStyles(globalStyles)(() => '')
