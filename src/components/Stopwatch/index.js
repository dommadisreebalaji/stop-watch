// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {seconds} = this.state
    const second = Math.floor(seconds % 60)
    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  onStart = () => {
    this.timerId = setInterval(this.runTime, 1000)
  }

  runTime = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({seconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div>
          <h1 className="heading">Stopwatch</h1>
          <div className="stop-watch-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="heading">{time}</h1>
            <div className="button-container">
              <button
                className="button-start"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="button-stop"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="button-reset"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
