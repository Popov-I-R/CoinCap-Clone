import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaBeer } from 'react-icons/fa'; // Така добавяме иконите от react-icons, а от сайта им можеш да избираш коя ти е харесала
import { Link } from 'react-router-dom';
import headerLogo from "./header_logo.svg"
import "./Header.css"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const drawerWidth = 240;
// navitems е за листа за изскачащото меню, мисля тук да сложим и watchlist-a. 
const navItems = ['Coins', 'Exchanges', 'Swap'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CoinCap
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box >
      {/* По този начин долу се стилизират компонентите */}
        <Button 
            style={{
                borderRadius: 35,
                backgroundColor: "rgb(24, 198, 131",
                padding: "10px 16px",
                fontSize: "12px",
                boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
            }}
            variant="contained"
        >
            Connect Wallet
        </Button>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
    
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


  const checkPage = (page) => {
    if(page === "Coins" ) {
       return  <Link className="" to='/'>Coins</Link>
    } else {
       return <Link to={page.toLowerCase()}>{page}</Link>
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ bgcolor: "white" ,color: "black"}} >
        <Toolbar>
        {/* Тук работим с линковете от масива, трябваше да сложа тази функция долу, защото иначе сме false при homePage,защото в рутера бях направил да не излиза нищо в URL-a, като е там. */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item}  sx={{ color: 'black' }}>
              {checkPage(item)}
              </Button>
            ))}
        </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* Тази иконка трябва да се смени с по-подходяща :D Сложим я за демото, че да се вижда, като я разцъкваш */}
            <FaBeer/>
          </IconButton>
          <Typography
            variant="h6"
            align="center" 
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={headerLogo}  className="logoSize" alt="Coincap Logo"></img>
          </Typography>

        {/* От тук ти почва searchbar-a  */}
          <Box sx={{border: "1px solid black"}}>
          <Search>
            <SearchIconWrapper>
                          {/* Това за иконака важи и тук  */}
            <FaBeer />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />

          </Search>
          </Box>
          {/* Този бокс е за connect wallet-a  */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
            style={{
                borderRadius: 35,
                backgroundColor: "rgb(24, 198, 131",
                padding: "10px 16px",
                fontSize: "12px",
                boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
            }}
            variant="contained"
        >
            Connect Wallet
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
