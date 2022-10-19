import React from 'react'
import "./SettingsContainer.css"
import { CheckBox } from '@mui/icons-material';
import { Form } from 'react-bootstrap';
import MobileSelectLanguage from '../MobileMenuSelectComponents/MobileSelectLanguage';
import MobileSelectCurrency from '../MobileMenuSelectComponents/MobileSelectCurrency';

export default function SettingsContainer() {


    return (
        <div className="Settings-Container">
            <div className="Setting-item">
                <Form className="Dark-theme-form">
                    <label >Dark theme</label>
                    <input  type="checkbox" name="Dark theme"></input>
                </Form>
            </div>
            <hr ></hr>
            <div className="Setting-item">
                <Form className="Flesh-price-form">
                    <label >Flash Price Indicators</label>
                    <input type="checkbox" name="Flash Price Indicators" ></input>
                </Form>
            </div>
            <hr ></hr>
            <div className="Setting-item Select-settings-item-container">
                <MobileSelectCurrency className="Select-decktop-version" />
            </div>
            <hr></hr>
            <div className="Setting-item Select-settings-item-container">
                <MobileSelectLanguage className="Select-decktop-version"/>
            </div>



        </div>
    );
}