
import React from'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//styles

//components



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '2rem',
    },
    paper: {
      paddingTop: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height:'100%'
    },
    grid: {
      overflow:'hidden',
    }
  }),
);

function Home({cityImage,weather}) {
  const classes = useStyles();
  //const city = cityImage.results.urls.full
  //style={{backgroundImage:`url(${city})`}}
  return (
    
    <div className={classes.root} >
    <Grid container spacing={3}  >
    <Grid item xs={6}>
    <Typography className={classes.title} variant="h4" noWrap>
            26,Marseille,FR
          </Typography>
      </Grid>
      <Grid item xs={12} >
        <Paper className={classes.paper}>Hello</Paper>
      </Grid>
    </Grid>
  </div>
      );
}

export default Home;