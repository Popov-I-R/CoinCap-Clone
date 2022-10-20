import React from 'react'
import BlueBarAdaptive from './BlueBarUnderHeader/BlueBarAdaptive'
import "./Home.css"
import MainTable from './TableComponent/MainTableComponent'
import "./Home.css"

export default function Home() {

  return (

    <div className='MainWrapper'>

      <BlueBarAdaptive
        marketCap={"$1.12T"} exchangeVol={"$37.37B"} assets={"2,295"} exchanges={"73"} markets={"13,793"} btcDomIndex={"32.8%"} 
      />

      <MainTable />

    </div>
  )
}
