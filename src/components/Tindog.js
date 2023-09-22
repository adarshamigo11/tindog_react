import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import "../components/Tindog.css";
import itemData from './ImageData';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';
import PetsIcon from '@mui/icons-material/Pets';



export default function Tindog() {
  return (
    <>
   
    
    <Box>
      {/* HEADER */}
      <Box sx={{ position: 'relative', bgcolor: '#ff4c68', height: '850px', width: '100%', zIndex: '0' }}>
        <AppBar position="static" sx={{ bgcolor: '#ff4c68', padding: '35px', paddingLeft: '80px', boxShadow: 'none', borderBottom: 'none' }}>
          <Toolbar sx={{ padding: '30px' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, marginLeft: '83px', fontWeight: 'bold' }}
            >
              <PetsIcon  />
            </IconButton>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              tindog
            </Typography>
            <Button color="inherit" sx={{ margin: '40px', fontWeight: 'bold' }}>Contact</Button>
            <Button color="inherit" sx={{ margin: '40px', fontWeight: 'bold' }}>Pricing</Button>
            <Button color="inherit" sx={{ margin: '40px', fontWeight: 'bold' }}>Download</Button>
          </Toolbar>
        </AppBar>
  {/* HEADER ENDED */}

    {/* GRID STARTED */}
        <Grid container>
          {/* Left Section */} 
          <Grid item xs={12} md={6}> 
            <div style={{ background: '#ff4c68', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h2" sx={{ textAlign: 'center', color: 'white', padding: "200px" ,fontFamily: "Montserrat-Black"}}>
                Meet the new and interesting dogs nearby
                <div style={{display:'flex'}}>
                <Button variant="contained"sx={{borderRadius:'8px',margin:'20px',backgroundColor:'grey',height:'50px',width:"150px",justifyContent:'center'}}>
                <IconButton   sx={{ margin:'2px' ,color:"white"}} >
                <AppleIcon />
                </IconButton> Download   </Button>
                <Button variant="outlined"sx={{borderRadius:'8px',margin:'20px',backgroundColor:'white',color:'black',justifyContent:'center',height:'50px',width:"150px"}}>
                <IconButton   sx={{ margin:'2px',color:"black" }} >
                <AndroidIcon/>
                </IconButton> Download   </Button>
                
                </div>
              </Typography>
            </div>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <div style={{ background: '#ff4c68', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: '-1' }}>
              <img src='https://adarshamigo11.github.io/tindog/images/iphone6.png' alt="iphone-mockup" style={{ marginTop: '300px', transform: 'rotate(30deg)', width: '350px', marginRight: "150px" }} />
            </div>
          </Grid>
        </Grid>
      </Box>
        {/* GRID ENDED */}
         

      {/* App description  START */}
      <Box
      sx={{
        bgcolor: 'white',
        height: '650px',
        width: '100%',
        position: 'relative',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <div style={{ margin: '10px 50px' , padding:'0 70px' }}>
        <Grid container spacing={30}>
          <Grid item xs={12} md={4}>
            <IconButton sx={{ color: '#ff4c68', marginLeft:'85px', width: '100px', height: '100px', fontSize: '130px',fontWeight: 'bold' }}>
              <CheckCircleOutlineIcon sx={{fontSize :'inherit'}}/>
            </IconButton>
            <p style={{ textAlign: 'center',fontSize:'30px' ,color:'black',fontFamily: "Montserrat-Black",fontWeight: 800 }}>Easy to use</p>
            <p style={{ textAlign: 'center',fontSize:'20px' ,color:'black',fontWeight:300 }}>So easy to use, even your dog could do it.</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <IconButton sx={{ color: '#ff4c68', marginLeft:'85px', width: '100px', height: '100px', fontSize: '130px',fontWeight: 'bold' }}>
              <ModeStandbyIcon sx={{fontSize :'inherit'}} />
            </IconButton>
            <p style={{ textAlign: 'center',fontSize:'30px' ,color:'black',fontFamily: "Montserrat-Black",fontWeight: 800 }}>Elite Clientele</p>
            <p style={{ textAlign: 'center',fontSize:'20px' ,color:'black',fontWeight:300 }}>We have all the dogs, the greatest dogs.</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <IconButton sx={{ color: '#ff4c68', marginLeft:'85px',width: '100px', height: '100px', fontSize: '130px',fontWeight: 'bold' }}>
              <FavoriteIcon sx={{fontSize :'inherit'}}/>
            </IconButton>
            <p style={{ textAlign: 'center',fontSize:'30px' ,color:'black',fontFamily: "Montserrat-Black",fontWeight: 800 }}>Guaranteed to work.</p>
            <p style={{ textAlign: 'center',fontSize:'20px' ,color:'black',fontWeight:300 }}>Find the love of your dog's life or your money back.</p>
          </Grid>
        </Grid>
      </div>
    </Box>
     {/* App description  END */}
      {/* App description  START */}

    <Box sx={{ position: 'relative', bgcolor: '#ff4c68', height: '600px', width: '100%', zIndex: '0', display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', }}>
    <ImageList sx={{ width: "1400px", height: 600 , borderRadius:'50px' }}>
      <ImageListItem  key="Subheader" cols={2}>
        <ListSubheader sx={{bgcolor:'#ff4c68',fontWeight:'bold',color:'whitesmoke'}}  component="div">Image gallary</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'white',
        height: '800px',
        width: '100%',
        zIndex: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'whitesmoke'
      }}
    >
      <div style={{ margin: '10px,50px' }}>
        <Typography variant='h3' sx={{ textAlign: 'center', marginTop: '20px', fontFamily: 'Georgia', fontWeight: 'bold' }}>
        Discover Tail-Wagging Deals for Your Furry Friend!
        </Typography>
        <Typography variant='body1' sx={{ textAlign: 'center', margin: '15px', fontWeight: 'lighter' }}>
        Unleash the Possibilities: Customizations Tailored to Your Pup's Unique Needs
        </Typography>
        <div style={{marginTop:'80px'}}>
        <Grid container spacing={10}>
          <Grid item xs={6} md={4}>
            <Card variant='outlined'  sx={{ maxWidth: 345, borderRadius:'20px', height: '100%', boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.7)'  }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://freepngimg.com/save/24884-free-clipart/406x240"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center'}}>
                 $0
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',fontWeight:'bold'}}>
                5 Matches Per Day.<br/>
                10 Messages Per Day<br/>
                Unlimited App Usage
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center',fontWeight:'bold' }}>
              <Button variant="outlined"  >Outlined</Button>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card variant='outlined'  sx={{ maxWidth: 345,borderRadius:'20px', height: '100%' , boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.7)' }}>
              <CardMedia
                sx={{ height: 130 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXypw0fniKHVbh0EYcheBUk7gd6Sccr4RR69PkKbOE4zKT6bUavM9sT_JBMkH1gJVNQlg&usqp=CAU"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center',fontWeight:'bold'}}>
                 $40/mo
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',fontWeight:'bold'}}>
                Unlimited Matches <br/>
                Unlimited Messages <br/>
                Unlimited App Usage<br/>
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="outlined"  >Outlined</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card variant='outlined'  sx={{ maxWidth: 345, borderRadius:'20px',height: '100%', boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.7)'  }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://cdn.xxl.thumbs.canstockphoto.com/premium-red-square-grungy-vintage-isolated-stamp-clipart-vector_csp26882257.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center',fontWeight:'bold'}}>
                $99 / mo
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',fontWeight:'bold'}}>
                Pirority Listing <br/>
                Unlimited Matches <br/>
                Unlimited Messages <br/>
                Unlimited App Usage 
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="outlined"  >Outlined</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </div>
      </div>
    </Box>
    <Box
  sx={{
    position: 'relative',
    bgcolor: 'white',
    height: '400px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // To stack child elements vertically
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4c68',
    borderRadius: '10px',
  }}
>
  <Typography
    variant="h3"
    sx={{
      fontFamily: 'Georgia',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center', // Center-align the text
      marginBottom: '20px', // Add some spacing between text and buttons
    }}
  >
    Find the True Love of Your Dog's Life Today.
  </Typography>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Button
      variant="contained"
      sx={{
        borderRadius: '8px',
        margin: '20px',
        backgroundColor: 'grey',
        height: '50px',
        width: '150px',
        justifyContent: 'center',
      }}
    >
      <IconButton sx={{ margin: '2px', color: 'white' }}>
        <AppleIcon />
      </IconButton>
      Download
    </Button>
    <Button
      variant="outlined"
      sx={{
        borderRadius: '8px',
        margin: '20px',
        backgroundColor: 'white',
        color: 'black',
        height: '50px',
        width: '150px',
        justifyContent: 'center',
      }}
    >
      <IconButton sx={{ margin: '2px', color: 'black' }}>
        <AndroidIcon />
      </IconButton>
      Download
    </Button>
  </div>
</Box>
<Box sx={{
    position: 'relative',
    bgcolor: 'white',
    height: '500px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // To stack child elements vertically
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
}}>
      
<div style={{ display: 'flex', gap: '20px' }}>
  <TwitterIcon fontSize="small"/>
  <InstagramIcon fontSize="small" />
  <FacebookIcon fontSize="small"/>
  <EmailIcon fontSize="small"/>
</div>
    <Typography variant='subtitle1' sx={{fontWeight:'bold'}}>
       ©️ Tindog {new Date().getFullYear()}
    </Typography>
    <Typography variant='subtitle1' sx={{color:'#E2DFD2'}}>
       Designed by Adarsh
    </Typography>

</Box>

    </Box>
     
   

    
    
    </>
  );
}