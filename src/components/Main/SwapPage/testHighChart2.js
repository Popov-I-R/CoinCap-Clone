import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

export default class Container extends React.Component {
  constructor () {
    super()
    this.state = {
      chartOptions: {
        series: [{
          data: [3,18,3,44,65,83,43,101,82]
        }]
      }
    }
    // setInterval(() => this.setState({
    //     chartOptions: {
    //       series: [{
    //         data: [
    //           2,
    //           3,
    //           4
    //         ]
    //       }]
    //     }}
    //   ), 1500)
  }

  render () {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.state.chartOptions}
        />
      </div> 
    )
  }
}