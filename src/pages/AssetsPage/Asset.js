import React from 'react'
import {useParams} from "react-router-dom";
import BlueBarForDetailsOfCoin from './BlueBarForDetailsOfCoin/BlueBarForDetailsOfCoin';

const AssetID = () => {
    const { assetIdentificator } = useParams()
    
    return( 
        <div> 
        <BlueBarForDetailsOfCoin></BlueBarForDetailsOfCoin>
            <h4>{assetIdentificator}</h4>
        </div>
    )
}
export default AssetID


