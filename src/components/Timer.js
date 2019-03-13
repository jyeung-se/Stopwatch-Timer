import React, { Component } from 'react'
import SplitList from './SplitList'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state={
      currentTime: 0,
      active: false,
      splits: []
    }
  }

  toggleTimer = () => {
    if (this.state.active === false) {
      this.setState({
        active: true
      })
      this.startTimer()
    }
    if (this.state.active === true) {
      this.addSplitToList()
    }
  }

  startTimer = () => {
    this.timeIncrement = setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime + 1
      })
    }, 1000)
  }

  addSplitToList = () => {
    this.setState({
      splits: [...this.state.splits, this.state.currentTime]
    })
  }

  // stopTimer = () => {
  //   this.setState({
  //     active: false
  //   })
  //   clearInterval(this.timeIncrement)
  // }

  resetTimer = () => {
    this.setState({
      active: false,
      currentTime: 0,
      splits: []
    })
    clearInterval(this.timeIncrement)
  }

  getSeconds = () => {
    return ('0' + this.state.currentTime % 60).slice(-2)
  }

  getMinutes = () => {
    return ('0' + Math.floor(this.state.currentTime / 60)).slice(-2)
  }

  setTimer = (split, splitNumber) => {
    this.setState((prevState) => ({
      currentTime: split,
      splits: [...prevState.splits.slice(0, splitNumber)]
    }))
  }

  render(){
    return (
      <div className="Timer">
        <h1 className="DigitalClock" onClick={this.toggleTimer}>{this.getMinutes()}:{this.getSeconds()}</h1>
        <button className="ResetButton" onClick={this.resetTimer}>Reset</button>
        {this.state.splits.length > 0 ?
        <SplitList splits={this.state.splits} currentTime={this.state.currentTime} setTimer={this.setTimer} />
        :
        null}
      </div>
    )
  }
}

export default Timer
