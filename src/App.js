import React from 'react';
import theme from './theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
 appBar:{
    backgroundColor:"#fff"
 },
 hero:{
    backgroundImage:`linear-gradient(rgba(0,0,0,0.5),
    rgba(0,0,0,0.5)),
    url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60')`,
    height:'500px',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'#fff',
    fontSize:'4rem',
    [theme.breakpoints.down('sm')]:{
      height:300,
      fontSize:'3em',
    }
 },
 blogsContainer:{
  paddingTop:theme.spacing(3)
 },
 blogTitle:{
  fontWeight:800,
  paddingBottom:theme.spacing(3),
 },
 card:{
   maxWidth:'100%',
 },
 media:{ //img 
   height:240
 },
 cardActions:{
   display:'flex',
   margin:'0 10px',
   justifyContent:'space-between',
 },
 author:{
   display:'flex',
 }
}));

function App() {
  const classes=useStyles();
  return (
    <div>
    <ThemeProvider theme={theme}>
      <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h6" color='primary'>
              Blog
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>React Blog</Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
              Articles
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}> 
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemons
                        </Typography>
                        <Typography variant="subtitle2" color='textSecondary' component="p">
                          May 14, 2020
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon/>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}> 
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemons
                        </Typography>
                        <Typography variant="subtitle2" color='textSecondary' component="p">
                          May 14, 2020
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon/>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}> 
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemons
                        </Typography>
                        <Typography variant="subtitle2" color='textSecondary' component="p">
                          May 14, 2020
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon/>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}> 
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"/>
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          Guy Clemons
                        </Typography>
                        <Typography variant="subtitle2" color='textSecondary' component="p">
                          May 14, 2020
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon/>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
        </Container>
      </ThemeProvider>
</div>

  );
}

export default App;
