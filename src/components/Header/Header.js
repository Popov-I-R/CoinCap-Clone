import React from "react";
// import PropTypes from 'prop-types';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from '@mui/material/ListItemText';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// import for modal on settings button;
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import AddIcon from "@mui/icons-material/Add";
import "./SettingsGear/Settings.css";
import SettingsContainer from "./SettingsGear/SettingsContainer";
import setIcon from "./SettingsGear/setIcon.png";

import { Link } from "react-router-dom";
import "./Header.css";
import Settings from "./SettingsGear/Settings";
import InputSearch from "./SearchBar/InputSearch";

// Icons
import headerLogo from "./header_logo.svg";
import { FaBitcoin } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { TbExchange } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { MdStarBorder } from "react-icons/md";

// Mobile Select Control Start

import MobileSelectCurrency from "./MobileMenuSelectComponents/MobileSelectCurrency";
import MobileSelectLanguage from "./MobileMenuSelectComponents/MobileSelectLanguage";
import ConnectWalletModal from "./ConnectWallet/ConnectWalletModal";

// Mobile select control end

const setupHeaderMobileIcon = (name) => {
  if (name === "Coins") {
    return <FaBitcoin />;
  } else if (name === "Exchanges") {
    return <FaExchangeAlt />;
  } else if (name === "Swap") {
    return <TbExchange />;
  } else if (name === "API") {
    return <FaRegNewspaper />;
  } else if (name === "Settings") {
    return <MdSettings />;
  } else if (name === "My Watchlist") {
    return <MdStarBorder />;
  } else if (name === "My Portfolio") {
    return <GiProgression />;
  }

  return false;
};

//styles for modal on settings bitton;
const style = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  p: 4,
};

const checkPage = (page) => {
  if (page === "Settings") {
    return <Link className="Nav-Link">Settings</Link>;
  } else {
    return (
      <Link className="Nav-Link" to={page.toLowerCase().split(" ").join("")}>
        {page}
      </Link>
    );
  }
};

const drawerWidth = 215;
const navItems = ["Coins", "Exchanges", "Swap", "My watchlist"];
const navItemsMobile = [
  "Coins",
  "Exchanges",
  "Swap",
  "API",
  "Settings",
  "My Watchlist",
  "My Portfolio",
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItemsMobile.map((item) => (
          <ListItem key={item} disablePadding>
            {item !== "Settings" ? (
              <Link
                className="List-item-link"
                to={item.toLowerCase().split(" ").join("")}
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  {/* <ListItemText primary={item} />  */}
                  <ListItemButton
                    className="Flex-Column"
                    sx={{ textAlign: "center" }}
                  >
                    <div className="Mobile-Icons-Header">
                      {setupHeaderMobileIcon(item)}
                    </div>
                    <div className="Mobile-Links-Header">{item}</div>
                    {/* <ListItemText primary={item} /> */}
                  </ListItemButton>
                </ListItemButton>
              </Link>
            ) : (
              <ListItemButton onClick={handleOpen} sx={{ textAlign: "center" }}>
                {/* <ListItemText primary={item} />  */}
                <ListItemButton
                  className="Flex-Column"
                  sx={{ textAlign: "center" }}
                >
                  <div className="Mobile-Icons-Header">
                    {setupHeaderMobileIcon(item)}
                  </div>
                  <div className="Mobile-Links-Header">{item}</div>
                  {/* <ListItemText primary={item} /> */}
                </ListItemButton>
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        sx={{
          backdropFilter: "blur(5px)",
        }}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className="Modal-settings">
          <Box className="Settings-modal-box" sx={style}>
            <div className="Close-settings-div">
              <div className="setLogoDiv">
                <img
                  className="settings-logo"
                  src={setIcon}
                  alt="settings"
                ></img>
                <h1>Settings</h1>
              </div>
              <AddIcon
                onClick={handleClose}
                className="Close-settings-btn"
                sx={{ fontSize: 40 }}
              />
            </div>
            <hr></hr>
            <div>
              <SettingsContainer />
            </div>
          </Box>
        </Fade>
      </Modal>

      <Box sx={{ display: { xs: "block", sm: "block" }, margin: "0 0 25px 0" }}>
        <ConnectWalletModal />
      </Box>
      <Divider />
      <MobileSelectCurrency />
      <MobileSelectLanguage />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", minHeight: "62px" }}>
      <AppBar
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "centre",
          bgcolor: "white",
          color: "black",
          minHeight: "62px",
        }}
      >
        <Toolbar sx={{ margin: "0vw 6vw", minHeight: "62px" }}>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                className="Nav-Link-container"
                key={item}
                sx={{ color: "black" }}
                style={{
                  fontSize: "12px",
                }}
              >
                {checkPage(item)}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
            <InputSearch />
          </Box>

          <Typography
            className="Logo-icon"
            variant="h6"
            align="center"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <Button
              style={{
                borderRadius: 30,
              }}
            >
              <Link className="" to="/">
                <img
                  className="MobileLogoSize"
                  src={headerLogo}
                  alt="LOGO"
                ></img>
              </Link>
            </Button>
          </Typography>

          <Box
            className="Menu-button"
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
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "block", sm: "block", md: "none" } }}
            >
              <FormatAlignJustifyIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <InputSearch />
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            style={{
              padding: "10px 20px",
            }}
          >
            <Settings />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <ConnectWalletModal />
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
            // disableEnforceFocus: true  
            //  Лоша, практика, но в норигиналният сайт също е така.
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;
