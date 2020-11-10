import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
    this.timerId = null;
    this.startGame = false;
    this.startTimer = this.startTimer.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }
  startTimer() {
    this.timerId = setInterval(() => {
      var second = this.state.time;
      this.setState({ time: second + 1 });
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.timerId);
  }
  handleStart() {
    this.startTimer();
    this.startGame = true;
  }
  handleKeyDown(event) {
    if (!this.startGame) return;
    let newx = this.state.x;
    let newy = this.state.y;
    if (newx === 250 && newy === 250) this.stopTimer();
    if (newx === 250 && newy === 250) return;
    if (event.keyCode === 39) {
      newx += 5;
    } else if (event.keyCode === 37) {
      newx -= 5;
    } else if (event.keyCode === 38) {
      newy -= 5;
    } else if (event.keyCode === 40) {
      newy += 5;
    }
    this.setState({
      x: newx,
      y: newy
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <>
        {/* <div className="ballProvider"> */}
        <div
          className="ball"
          style={{ left: `${this.state.x}px`, top: `${this.state.y}px` }}
        ></div>
        <button onClick={this.handleStart} className="ballProvider">
          Start Game
        </button>

        <div className="heading-timer">{this.state.time}</div>
        <div className="hole" style={{ left: "250px", top: "250px" }}></div>
        {/* </div> */}
      </>
    );
  }
}

export default Timer;
