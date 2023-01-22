import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  incrementNumber = () => {
    const {count} = this.state
    this.setState({count: Math.floor(Math.random() * 101)})
  }

  render() {
    const {count} = this.state
    let text1
    if (count % 2 === 0) {
      text1 = 'Even'
    } else {
      text1 = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="box">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {text1}</p>
          <button type="button" onClick={this.incrementNumber}>
            Increment
          </button>
          <p className="para1">*Increase by Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
