import React from 'react'
import Lottie from  'react-lottie'
import * as loading from  '../assets/loading.json'
import './Loading.scss'

const defaultOptions = {
  loop: true,
  autoplay: true,
  speed: 2,
  animationData: loading.default,
  rendererSettings: {
    preserveAspecRatio: 'xMidYMid slice'
  }
}

class Loading extends React.Component {
  render () {
    return (
      <div className="loading">
        <Lottie options={defaultOptions} height={250} />
      </div>
    )
  }
}

export default Loading