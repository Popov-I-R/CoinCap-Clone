import React from "react";
import "./BlueBarAdaptive.css"
import DesktopBlueBar from "../BlueBarUnderHeader/DesktopVersion/DesktopBlueBar";
import MobileBlueBar from "../BlueBarUnderHeader/MobileVersion/MobileBlueBar";

export default function BlueBarAdaptive({ marketCap, exchangeVol, assets, exchanges, markets, btcDomIndex }) {

    return (
        <div>
            <div className="Blue-desktop-bar-adaptive">
                <DesktopBlueBar marketCap={marketCap} exchangeVol={exchangeVol} assets={assets} exchanges={exchanges} markets={markets} btcDomIndex={btcDomIndex} />
            </div>
            <div className="Blue-mobile-bar-adaptive">
                <MobileBlueBar marketCap={marketCap} exchangeVol={exchangeVol} assets={assets} exchanges={exchanges} markets={markets} btcDomIndex={btcDomIndex} />
            </div>

        </div>
    )

}