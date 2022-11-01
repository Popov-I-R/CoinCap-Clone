import React from 'react'
import {useParams} from "react-router-dom";
import BlueBarForDetailsOfCoin from './BlueBarForDetailsOfCoin/BlueBarForDetailsOfCoin';

import MainGraph from "./MainGraph";


const AssetID = () => {
    const { assetIdentificator } = useParams();
    const timePeriod = "5y";
    const rangeSelectorEnabler= true;
    return( 
        <div> 
        <BlueBarForDetailsOfCoin></BlueBarForDetailsOfCoin>
        <MainGraph uuid={assetIdentificator} rangeSelectorEnabler={rangeSelectorEnabler} timePeriod={timePeriod}> </MainGraph>
        </div>
    )
}
export default AssetID


