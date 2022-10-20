import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import "./Header.css"
import Settings from './SettingsGear/Settings';
import InputSearch from './SearchBar/InputSearch';
// Icons
import headerLogo from "./header_logo.svg"
import { FaBitcoin } from 'react-icons/fa';
import { FaExchangeAlt } from "react-icons/fa"
import {FaRegNewspaper} from "react-icons/fa"
import {MdSettings} from "react-icons/md"
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import {TbExchange} from "react-icons/tb"
import {GiProgression} from "react-icons/gi"
import {MdStarBorder} from "react-icons/md"

// Mobile Select Control Start 
import MobileSelectCurrency from './MobileMenuSelectComponents/MobileSelectCurrency';
import MobileSelectLanguage from './MobileMenuSelectComponents/MobileSelectLanguage';

// Mobile select control end 

const setupHeaderMobileIcon = (name) => {
  if (name === "Coins") {
      return <FaBitcoin/>      
  } else if(name === "Exchanges"){
    return <FaExchangeAlt/> 
  } else if (name === "Swap") {
    return <TbExchange/> 
  } else if (name === "API") {
    return <FaRegNewspaper/> 
  } else if (name === "Settings") {
    return <MdSettings/> 
  } else if(name === "My Watchlist"){
    return <MdStarBorder/> 
  } else if(name === "My Portfolio"){
    return <GiProgression/> 
  }

  return false;
}

const checkPage = (page) => {
  if (page === "Coins") {
    return <Link className="Nav-Link" to='/'>Coins</Link>
  } else {
    return <Link className="Nav-Link" to={page.toLowerCase()}>{page}</Link>
  }
}

const drawerWidth = 200;
const navItems = ['Coins', 'Exchanges', 'Swap', 'Watchlist'];
const navItemsMobile = ['Coins', 'Exchanges', 'Swap','API','Settings','My Watchlist','My Portfolio'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItemsMobile.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              {/* <ListItemText primary={item} />  */}
            <ListItemButton className='Flex-Column' sx={{ textAlign: 'center'}}>
            <div className='Mobile-Icons-Header'> 
              {setupHeaderMobileIcon(item)}
            </div>
            <div className='Mobile-Links-Header'>
             {checkPage(item)}
            </div>
              {/* <ListItemText primary={item} /> */}
            </ListItemButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Button className="Connect-wallet"
              style={{
                borderRadius: 40,
                backgroundColor: "rgb(24, 198, 131",
                padding: "7px 16px",
                fontSize: "12px",
                boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
              }}
              variant="contained"
            >
              Connect Wallet
            </Button>
          </Box>
      <Divider />
      <MobileSelectCurrency/>
      <MobileSelectLanguage/>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', minHeight: "62px" }}>
      <AppBar component="nav" sx={{ display: 'flex', justifyContent: "centre", bgcolor: "white", color: "black", minHeight: "62px"}} >
        <Toolbar sx={{ margin: "0vw 6vw", minHeight: "62px"  }}>
          <Box sx={{ display: { xs: 'none', sm: 'none', md:'block' } }} >
            {navItems.map((item) => (
              <Button className='Nav-Link-container' key={item}
              style = {{
                fontSize: "12px"
              }}>
                {checkPage(item)}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'block',md: 'none' } }}>
            <InputSearch />
          </Box>
          <Typography
            className="Logo-icon"
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1, display: {sm: 'block' } }}
          >
            <Button
              style={{
                borderRadius: 30
              }}>
              <Link className="" to='/'><img className="MobileLogoSize" src={headerLogo} alt="LOGO"></img></Link>
            </Button>
          </Typography>
          <Box 
          className='Menu-button'
          onClick={(e) => {
            if (e.target.style.transform === "") {
              e.target.style.transformOrigin = "center";
              e.target.style.transform = "rotateY(360deg)";
              e.target.style.transition = "1s";
            } else {
              e.target.style.transformOrigin = "center";
              e.target.style.transform = "";
              e.target.style.transition = "1s";
            }
          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: {xs:'block', sm: 'block', md:'none' }}}
            >
              <FormatAlignJustifyIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none',md: 'block' } }}>
            <InputSearch />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none',md: 'block'  } }}
            style={{
              padding: "10px 20px"
            }}>
            <Settings />
          </Box>
          <Box sx={{ display: {  xs: 'none', sm: 'none',md: 'block'  } }}>
            <Button className="Connect-wallet"
              style={{
                borderRadius: 40,
                backgroundColor: "rgb(24, 198, 131",
                padding: "7px 16px",
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
          // BackdropProps={{ invisible: true}}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
            width: "200px",
            // disableEnforceFocus: true  => Лоша, практика, но в норигиналният сайт също е така. 
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
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
