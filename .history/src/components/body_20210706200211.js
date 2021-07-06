
import '../App.css';

import {Link} from "react-router-dom"
import clsx from 'clsx';
import Typewriter from 'typewriter-effect';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import DraftsIcon from '@material-ui/icons/Drafts';

import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import IconButton from '@material-ui/core/IconButton';

import Paper from '@material-ui/core/Paper';

import MenuIcon from '@material-ui/icons/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';

import me from "../images/b8289c2-removebg-preview.png"
import MyPDF from '../ResumeLautaroS.pdf';


function Copyright() {

  
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a color="inherit" href="https://material-ui.com/">
        
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];




export default function Body(props) {
  const [state, setState] = React.useState({

    bottom: false,
  
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]:  anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <Divider />
      {/*<DraftsIcon /> */}
      <List>
          
      <Link to="/" style={{listStyle:"none", textDecoration:"none", color:"black"}}>
          <ListItem >
            <ListItemIcon>  <HomeIcon /></ListItemIcon>
            <ListItemText primary="About me" />
          </ListItem>
          </Link> 
     
      </List>
      <List>
          
          <Link to="/ContactMe" style={{listStyle:"none", textDecoration:"none", color:"black"}}>
              <ListItem >
                <ListItemIcon>  <DraftsIcon /></ListItemIcon>
                <ListItemText primary="Contact Me" />
              </ListItem>
              </Link> 
         
          </List>
    </div>
  );

  
  const classes = useStyles();

  










  return (
    <div>
     
             
    <div className="containerPrincipal" >

    {[ 'bottom'].map((anchor) => (

    <React.Fragment key={anchor}>
  
     <Toolbar style={{backgroundColor:"white"}}>
          <IconButton>
        
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
          <MenuIcon onClick={toggleDrawer(anchor, true)} style={{marginLeft:"20px", marginTop:"20px"}}/>
          </IconButton>
          </Toolbar>
        
         
      <CssBaseline />
     
      <main >
        {/* Hero unit */}
        <div className={classes.heroContent} >


       
   
          <div className="containerrr" >
            <Typography  component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>

              <img src={me} className="me" style={{width:"280px",height:"300px", borderRadius:"50%", align:"rigth"}} />
       
           
            </Typography>
            

               <div className="textAboutMe">
               <Typewriter className="typewriter"

options={{
  strings:["Hi there!", "I'm Lautaro", "I'm a front end developer"],
  autoStart:true,
  loop:true,
}}
/>
               </div>
         
            </div>
          
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="left" className="resume" style={{marginLeft:"30px"}}>
                <Grid item>

                  <a to="/ResumeLautaroS.pdf" target="_blank" download style={{listStyle:"none", listStyleType:"none", textDecoration:"none"}} download>
                  <Button variant="contained" style={{backgroundColor:"#457b9d"}}>
                    Download My Resume
                  </Button>
                  </a>
                </Grid>
            
              </Grid>
            </div>
        
        </div>
     
      </main>
      {/* Footer */}

      <footer className={classes.footer} style={{marginTop:"0px"}}>
        <Typography variant="h6" align="center" gutterBottom>
          ME
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        <a color="inherit" href="https://github.com/lausuarez02" target="_blank">
            <GitHubIcon style={{color:"black"}} />
          
        </a>{' '}{' '}{' '}
        <a color="inherit" href="https://www.linkedin.com/in/lautaro-suarez-966224198/" target="_blank">
            <LinkedInIcon style={{color:"black"}}/>
          
        </a>{' '}
        </Typography>
        <Copyright />
      </footer>
      </React.Fragment>     


  ))}
    </div>

    
     <br/>
     <br/>
     <br/>
     </div>
  );
}