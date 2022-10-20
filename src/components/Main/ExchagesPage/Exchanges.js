import React from 'react'
import BlueBarAdaptive from '../HomePage/BlueBarUnderHeader/BlueBarAdaptive'


export default function Exchanges() {
  return (
    <div>
      <BlueBarAdaptive
        marketCap={"$1.12T"} exchangeVol={"$37.37B"} assets={"2,295"} exchanges={"73"} markets={"13,793"} btcDomIndex={"32.8%"}
      />
      Exchanges
    </div>
  )
}
