import React from 'react'

const Split = props => {

  const getSeconds = () => {
    return ('0' + props.split % 60).slice(-2)
  }

  const getMinutes = () => {
    return ('0' + Math.floor(props.split / 60)).slice(-2)
  }

  const highlight = (event) => {
    event.currentTarget.style.backgroundColor = 'orange'
    event.currentTarget.style.borderRadius = '5px'
  }

  return (
    <div className="SplitTime" onClick={() => props.setTimer(props.split, props.splitNumber)}>
      <span className="SplitTime_time" onClick={highlight}>{props.splitNumber + ' - ' + getMinutes() + ':' + getSeconds()}</span>
    </div>
  )
}

export default Split
