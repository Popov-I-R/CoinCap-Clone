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
import { Link } from 'react-router-dom';
import headerLogo from "./header_logo.svg"
import "./Header.css"
import Settings from './SettingsGear/Settings';
import InputSearch from './SearchBar/InputSearch';
import { useState } from 'react';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';


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

  const checkPage = (page) => {
    if (page === "Coins") {
      return <Link className="Nav-Link" to='/'>Coins</Link>
    } else {
      return <Link className="Nav-Link" to={page.toLowerCase()}>{page}</Link>
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ display: 'flex', justifyContent: "centre", bgcolor: "white", color: "black" }} >
        <Toolbar sx={{ margin: "0vw 6vw" }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }} 
              style = {{
                fontSize: "11px"
              }}>
                {checkPage(item)}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <InputSearch />
          </Box>

          <Typography
            className="Logo-icon"
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            <Button
              style={{
                borderRadius: 30
              }}>
              <Link className="" to='/'><img className="logoSize" src={headerLogo} alt="LOGO"></img></Link>
            </Button>
          </Typography>

          <Box 
          className='Menu-button'
          onClick={(e) => {
            if (e.target.style.transform === "") {
              e.target.style.transform = "rotateY(360deg)";
              e.target.style.transition = "1s";
            } else {
              e.target.style.transform = "";
              e.target.style.transition = "1s";
            }
          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <FormatAlignJustifyIcon />
            </IconButton>
          </Box>


          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <InputSearch />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}
            style={{
              padding: "10px 20px"
            }}>
            <Settings />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
