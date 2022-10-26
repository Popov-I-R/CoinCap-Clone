import React from 'react'
import {useParams} from "react-router-dom";
import BlueBarForDetailsOfCoin from './BlueBarForDetailsOfCoin/BlueBarForDetailsOfCoin';

import MainGraph from "./MainGraph";

const AssetID = () => {
    const { assetIdentificator } = useParams()
    const timePeriod = "5y"
    
    
    return( 
        <div> 
        <BlueBarForDetailsOfCoin></BlueBarForDetailsOfCoin>
        <MainGraph uuid={assetIdentificator} timePeriod={timePeriod}> </MainGraph>
            <h4>{assetIdentificator}</h4>
        </div>
    )
}
export default AssetID


