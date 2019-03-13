import React from 'react'
import Split from './Split'

const SplitList = props => {

  const unorderedList = props.splits.map((split, index) => {
    return (
        <Split key={index} splitNumber={index + 1} split={split} currentTime={props.currentTime} setTimer={props.setTimer} />
    )
  })

  return (
    <ul className="SplitList_list">
      <header className="SplitList_header"><b>Split # - Split Time</b></header>
      {unorderedList}
    </ul>
  )
}

export default SplitList
