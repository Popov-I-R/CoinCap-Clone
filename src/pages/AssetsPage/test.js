import React from 'react'
import {useParams} from "react-router-dom";

const AssetID = () => {
    const { assetIdentificator } = useParams()
    console.log(assetIdentificator)
    return( 
        <div> 
            <h4>{assetIdentificator}</h4>
        </div>
    )
}
export default AssetID


