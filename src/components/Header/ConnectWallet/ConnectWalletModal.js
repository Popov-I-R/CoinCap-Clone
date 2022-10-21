import React, { useState } from "react";
import "./ConnectWalletModal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./ConnectWalletModal.css";
import { TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import LockIcon from "../../Icons/Lock-Icon-PNG-Graphic-Cave.png";
import DollarsBackground from "./backgroundDollars.png";
import { useDispatch, useSelector } from "react-redux";
import { setWalletModalOpen } from "../../../store/ModalsDrowerSlice";

const style = {
  position: "absolute",
  maxWidth: 460,
  height: 400,
  backgroundImage: `url(${DollarsBackground})`,
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function ConnectWalletModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  // const drowerModalSlice = useSelector(
  //   (state) => state.drowerModalSlice.walletModalOpen
  // );
  // const dispatch = useDispatch();

  // const toOpenToClose = (e) => {
  //   dispatch(setWalletModalOpen());
  // };

  const [typeOfPasswordField, setTypeOfPasswordField] = useState("password");
  const [flagForShowPassword, setFlagForShowPassword] = useState(true);
  const showHidePassword = () => {
    setFlagForShowPassword(!flagForShowPassword);

    if (flagForShowPassword) {
      setTypeOfPasswordField("text");
    } else {
      setTypeOfPasswordField("password");
    }
  };

  return (
    <>
      <Button
        className="Connect-wallet-button"
        onClick={handleOpen}
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} className="Modal-connect-wallet">
          <Box className="Wallet-modal-box" sx={style}>
            <div className="Wallet-modal-box-header">
              <img className="Lock-icon" src={LockIcon} alt="lockIcon"></img>
            </div>

            <div className="LogRegCntnr Login-container">
              <h2>Sign in</h2>
              <Box
                className="Login-container-box"
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="log-username"
                  className="Log-reg-input-field"
                  fullWidth
                  label="Login here"
                  variant="standard"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                {flagForShowPassword ? (
                  <VisibilityOffIcon
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                ) : (
                  <VisibilityIcon
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                )}
                <TextField
                  id="log-password"
                  className="Log-reg-input-field"
                  fullWidth
                  label="Password here"
                  variant="standard"
                  type={typeOfPasswordField}
                />
              </Box>

              <FormGroup>
                <FormControlLabel
                  sx={{ color: "#2f3640", margin: "15px 0px 10px 0" }}
                  control={<Checkbox />}
                  label="Remember me"
                />
              </FormGroup>

              <Button
                className="Sign-in-button"
                style={{
                  borderRadius: 10,
                  backgroundColor: "rgb(24, 198, 131)",
                  padding: "6px 14px",
                  fontSize: "12px",
                  boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
                  width: "100%",
                  margin: "0 0 5px 0",
                }}
                variant="contained"
              >
                Sign in
              </Button>

              <a
                className="Log-reg-link-a"
                onClick={() => {
                  document.querySelector(".Login-container").style.display =
                    "none";
                  document.querySelector(
                    ".Registration-container"
                  ).style.display = "block";
                }}
              >
                Don't have an account? Sign Up
              </a>
            </div>

            <div className="LogRegCntnr Registration-container">
              <h2>Sign up</h2>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="reg-username"
                  className="Log-reg-input-field"
                  fullWidth
                  label="Login here"
                  variant="standard"
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                {flagForShowPassword ? (
                  <VisibilityOffIcon
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                ) : (
                  <VisibilityIcon
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                )}
                <TextField
                  id="reg-password"
                  className="Log-reg-input-field"
                  fullWidth
                  label="Password here"
                  variant="standard"
                  type={typeOfPasswordField}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <ReportGmailerrorredIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="reg-password-repeat"
                  className="Log-reg-input-field"
                  fullWidth
                  label="Confirm password"
                  variant="standard"
                  type={typeOfPasswordField}
                />
              </Box>

              <Button
                className="Sign-up-button"
                style={{
                  borderRadius: 10,
                  backgroundColor: "rgb(24, 198, 131)",
                  padding: "6px 14px",
                  fontSize: "12px",
                  boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
                  width: "100%",
                  margin: "20px 0 5px 0",
                }}
                variant="contained"
              >
                Sign up
              </Button>

              <a
                className="Log-reg-link-a link-to-sign-in"
                onClick={() => {
                  document.querySelector(".Login-container").style.display =
                    "block";
                  document.querySelector(
                    ".Registration-container"
                  ).style.display = "none";
                }}
              >
                Do you have an account?? Sign In
              </a>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
