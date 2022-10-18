import * as React from 'react'
import "./Settings.css"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SettingsContainer from './SettingsContainer';
import AddIcon from '@mui/icons-material/Add';
import setIcon from "./setIcon.png"
import { useState } from 'react';



const style = {
    position: 'absolute',
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    p: 4,
};


export default function Settings() {

    // const [style, setStyle] = useState(styleToUpdate);

    // const mediaQuerySmaller = '(max-width: 700px)';
    // const mediaQueryBigger = '(min-width: 710px)';
    // const mediaQueryListSmaller = window.matchMedia(mediaQuerySmaller);
    // const mediaQueryListBigger = window.matchMedia(mediaQueryBigger);

    // mediaQueryListSmaller.addEventListener('change', event => {
    //     setStyle({
    //         position: 'absolute',
    //         top: "35%",
    //         left: "0%",
    //         transform: "translate(-50%, -50%)",
    //         width: 350,
    //         p: 4,
    //     })
    // })

    // mediaQueryListBigger.addEventListener('change', event => {
    //     setStyle({
    //         position: 'absolute',
    //         top: "35%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //         width: 350,
    //         p: 4,
    //     })
    // })

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className="Settings-gear-container">
                <a className="Settings-gear-btn"
                    onClick={handleOpen}>
                    <i className="fa-solid fa-gear"></i>
                </a>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}
                    className="Modal-settings">
                    <Box className="Settings-modal-box" sx={style}>
                        <div className="Close-settings-div">
                            <div className="setLogoDiv">
                                <img className="settings-logo" src={setIcon} alt="settings" ></img>
                                <h1>Settings</h1>
                            </div>

                            <AddIcon
                                onClick={handleClose}
                                className='Close-settings-btn'
                                sx={{ fontSize: 40 }} />

                        </div>
                        <hr></hr>
                        <div>
                            <SettingsContainer />
                        </div>
                    </Box>

                </Fade>

            </Modal>
        </div>
    );
}