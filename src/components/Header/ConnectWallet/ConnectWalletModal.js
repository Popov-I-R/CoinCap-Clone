import React, { useState, useHash, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import {
  setIsRegistrButtonDisabled,
  setIsLoginButtonDisabled,
  setIsLogin,
} from "../../../store/disablerButtonsSlice";
import { userManager } from "../../../userManager/UserManager";

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
  const isRegistrButtonDisabled = useSelector(
    (state) => state.disabler.isRegistrButtonDisabled
  );
  const isLoginButtonDisabled = useSelector(
    (state) => state.disabler.isLoginButtonDisabled
  );
  const isLogin = useSelector((state) => state.disabler.isLogin);

  const dispatch = useDispatch();

  const changeLoginButtonCondition = (username, password) => {
    if (username && password) {
      dispatch(setIsLoginButtonDisabled(false));
    } else {
      dispatch(setIsLoginButtonDisabled(true));
    }
  };

  function changeRegistrButtonCondition(username, password, passwordRepeat) {
    let passMismatchError = document.querySelector("#passMismatchError");
    let userExistsError = document.querySelector("#userExistsError");
    userExistsError.style.display = "none";
    if (username && password && passwordRepeat) {
      dispatch(setIsRegistrButtonDisabled(false));
    } else {
      dispatch(setIsRegistrButtonDisabled(true));
    }

    if (password && passwordRepeat && password !== passwordRepeat) {
      passMismatchError.style.display = "block";
      dispatch(setIsRegistrButtonDisabled(true));
    } else {
      passMismatchError.style.display = "none";
    }
  }

  function tryRegister(username, password) {
    let userExistsError = document.querySelector("#userExistsError");
    let login = document.querySelector(".Login-container");
    let register = document.querySelector(".Registration-container");

    if (userManager.addUser(username, password)) {
      login.style.display = "block";
      register.style.display = "none";
      setRegistrUsername("");
      setRegistrPassword("");
      setRegistrPasswordRepeat("");
      userExistsError.style.display = "none";
    } else {
      setRegistrUsername("");
      dispatch(setIsRegistrButtonDisabled(true));
      userExistsError.style.display = "block";
      setTimeout(() => {
        userExistsError.style.display = "none";
      }, 4000);
    }
  }

  function tryLogin(username, password) {
    let wrongCredentials = document.querySelector(".Wrong-credentials-div");

    if (userManager.validateCredentials(username, password)) {
      // window.location.pathname = "/";
      dispatch(setIsLoginButtonDisabled(true));
      userManager.actualUser(username);
      dispatch(setIsLogin());
      handleOpen();
      setLoginUsername("");
      setLoginPassword("");
      document.querySelector(
        "div.LogRegCntnr.Login-container > div:nth-child(2)"
      ).style.pointerEvents = "none";
      document.querySelector(
        "div.LogRegCntnr.Login-container > div:nth-child(3)"
      ).style.pointerEvents = "none";
    } else {
      setLoginUsername("");
      setLoginPassword("");
      dispatch(setIsLoginButtonDisabled(true));
      wrongCredentials.style.visibility = "visible";
      setTimeout(() => {
        wrongCredentials.style.visibility = "hidden";
      }, 3000);
    }
  }

  function logout() {
    if (isLogin) {
      localStorage.removeItem("actualUser");
      dispatch(setIsLogin());
      document.querySelector(
        "div.LogRegCntnr.Login-container > div:nth-child(2)"
      ).style.pointerEvents = "all";
      document.querySelector(
        "div.LogRegCntnr.Login-container > div:nth-child(3)"
      ).style.pointerEvents = "all";
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registrUsername, setRegistrUsername] = useState("");
  const [registrPassword, setRegistrPassword] = useState("");
  const [registrPasswordRepeat, setRegistrPasswordRepeat] = useState("");

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
          backgroundColor: "rgb(24, 198, 131)",
          padding: "7px 16px",
          fontSize: "12px",
          boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
          minWidth: "150px",
        }}
        variant="contained"
      >
        {isLogin ? "Logout" : "Sign in & Sign up"}
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
              <h2>Login</h2>

              <Box
                className="Input-box Input-box-login"
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  pointerEvents: isLogin ? "none" : "all",
                }}
              >
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="log-username"
                  value={loginUsername}
                  onChange={(e) => {
                    setLoginUsername(e.target.value);
                    changeLoginButtonCondition(e.target.value, loginPassword);
                  }}
                  className="Log-reg-input-field"
                  fullWidth
                  label="Login here"
                  variant="standard"
                  autoComplete="off"
                />
              </Box>

              <Box
                className="Input-box Input-box-login"
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  pointerEvents: isLogin ? "none" : "all",
                }}
              >
                {flagForShowPassword ? (
                  <VisibilityOffIcon
                    className="show-hide-password"
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                ) : (
                  <VisibilityIcon
                    className="show-hide-password"
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                )}
                <form className="form-for-password-field">
                  <TextField
                    id="log-password"
                    value={loginPassword}
                    onChange={(e) => {
                      setLoginPassword(e.target.value);
                      changeLoginButtonCondition(loginUsername, e.target.value);
                    }}
                    className="Log-reg-input-field"
                    fullWidth
                    label="Password here"
                    variant="standard"
                    type={typeOfPasswordField}
                    autoComplete="off"
                  />
                </form>
              </Box>

              <div className="Wrong-credentials-div">
                <p className="Wrong-credentials-message" id="loginError">
                  Wrong credentials!
                </p>
              </div>

              <FormGroup>
                <FormControlLabel
                  sx={{
                    color: "#2f3640",
                    margin: "8px 0px 18px 0",
                    pointerEvents: isLogin ? "none" : "all",
                  }}
                  control={<Checkbox />}
                  label="Remember me"
                />
              </FormGroup>

              {!isLogin ? (
                <Button
                  className="Sign-in-button"
                  onClick={() => {
                    tryLogin(loginUsername, loginPassword);
                  }}
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
                  disabled={isLoginButtonDisabled}
                >
                  Sign in
                </Button>
              ) : (
                <Button
                  className="Logout-button"
                  onClick={() => {
                    logout();
                  }}
                  style={{
                    borderRadius: 10,
                    backgroundColor: "rgb(24, 198, 131)",
                    padding: "6px 12px 6px 11px",
                    fontSize: "12px",
                    boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
                    width: "100%",
                    margin: "0 0 5px 0",
                  }}
                  variant="contained"
                >
                  Logout
                </Button>
              )}

              <a
                className="Log-reg-link-a"
                onClick={() => {
                  document.querySelector(".Login-container").style.display =
                    "none";
                  document.querySelector(
                    ".Registration-container"
                  ).style.display = "block";
                  setLoginUsername("");
                  setLoginPassword("");
                }}
              >
                Don't have an account? Sign Up
              </a>
            </div>

            <div className="LogRegCntnr Registration-container">
              <h2>Registration</h2>
              <Box
                className="Input-box"
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="reg-username"
                  value={registrUsername}
                  onChange={(e) => {
                    setRegistrUsername(e.target.value);
                    changeRegistrButtonCondition(
                      e.target.value,
                      registrPassword,
                      registrPasswordRepeat
                    );
                  }}
                  className="Log-reg-input-field"
                  fullWidth
                  label="Login here"
                  variant="standard"
                  autoComplete="off"
                />
              </Box>

              <Box
                className="Input-box"
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                {flagForShowPassword ? (
                  <VisibilityOffIcon
                    className="show-hide-password"
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                ) : (
                  <VisibilityIcon
                    className="show-hide-password"
                    onClick={showHidePassword}
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                )}
                <form className="form-for-password-field">
                  <TextField
                    id="reg-password"
                    value={registrPassword}
                    onChange={(e) => {
                      setRegistrPassword(e.target.value);
                      changeRegistrButtonCondition(
                        registrUsername,
                        e.target.value,
                        registrPasswordRepeat
                      );
                    }}
                    className="Log-reg-input-field"
                    fullWidth
                    label="Password here"
                    variant="standard"
                    type={typeOfPasswordField}
                    autoComplete="off"
                  />
                </form>
              </Box>
              <Box
                className="Input-box"
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                <ReportGmailerrorredIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <form className="form-for-password-field">
                  <TextField
                    id="reg-password-repeat"
                    value={registrPasswordRepeat}
                    onChange={(e) => {
                      setRegistrPasswordRepeat(e.target.value);
                      changeRegistrButtonCondition(
                        registrUsername,
                        registrPassword,
                        e.target.value
                      );
                    }}
                    className="Log-reg-input-field"
                    fullWidth
                    label="Confirm password"
                    variant="standard"
                    type={typeOfPasswordField}
                    autoComplete="off"
                  />
                </form>
              </Box>

              <div className="Registration-messages-div">
                <p className="Wrong-credentials-message" id="passMismatchError">
                  Your passwords don't match!
                </p>
                <p className="Wrong-credentials-message" id="userExistsError">
                  Username is already taken!
                </p>
              </div>

              <Button
                id="Registration-Button"
                className="Sign-up-button"
                onClick={() => tryRegister(registrUsername, registrPassword)}
                style={{
                  borderRadius: 10,
                  backgroundColor: "rgb(24, 198, 131)",
                  padding: "6px 16px",
                  fontSize: "12px",
                  boxShadow: "rgb(0 0 0 / 40%) 0px 2px 15px -3px",
                  width: "100%",
                  margin: "10px 0 5px 0",
                }}
                variant="contained"
                disabled={isRegistrButtonDisabled}
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
                  setRegistrUsername("");
                  setRegistrPassword("");
                  setRegistrPasswordRepeat("");
                  document.querySelector("#passMismatchError").style.display =
                    "none";
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
