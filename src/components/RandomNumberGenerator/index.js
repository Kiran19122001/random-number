import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrease = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({count: number})
  }

  render() {
    const {count} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1>Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.onIncrease}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
