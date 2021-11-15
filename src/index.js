import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const descriptions = {
  'Q': 'Heater 1',
  'W': 'Heater 2',
  'E': 'Heater 3',
  'A': 'Heater 4',
  'S': 'Clap',
  'D': 'Open HH',
  'Z': 'Kick n\'Hat',
  'X': 'Kick',
  'C': 'Closed HH'
}

const sounds = {
  'Q': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  'W': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  'E': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  'A': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  'S': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  'D': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  'Z': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  'X': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  'C': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
}

class DrumMachine extends React.Component {

  state = {
    active: true,
    text: ''
  }


  someAction(option) {
    if (this.state.active === true) {
      const myValue = descriptions[option];
      const mySound = sounds[option]
      document.getElementById(option).style.background = "red"

      this.setState(() => {
        return {
          text: myValue
        }
      }
      )

      const audio = new Audio(mySound)
      audio.play()

      setTimeout(function () {
        document.getElementById(option).style.background = "#6F5C5C"
      }, 200)

    }


  }

  handlePick(e) {
    console.log(e.target.id)
    const option = e.target.id;
    this.someAction(option);
  }

  componentDidMount() {
    console.log('componentDidMount')
    document.addEventListener("keydown", (e) => {
      console.log(e.key.toUpperCase())
      this.someAction(e.key.toUpperCase())
    });
  }

  keyDown = (e) => {
    console.log(e.key)
    this.someAction(e.key.toUpperCase())
  }

  power = () => {
    this.setState(() => {
      return {
        active: !this.state.active,
      }
    })
  }

  render() {

    return (<div id="drum-machine">
      <div>
        <h1 className="header__title">DRUM MACHINE</h1>
        <p style={{ padding: '0 20px' }}>This is one of the Front End Libraries projects of freeCodeCamp.
          The project's goal is to build a drum machine with the functionality indicated in the user stories: <br />
          <a href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine" rel="noreferrer" target="_blank">
            https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine.</a></p>
      </div>

      <div className="container">
        <div id="pad">
          <table>
            <tbody >
              <tr><td id="Q" className="drum-pad" onClick={this.handlePick} onKeydown>Q
                <audio src={this.state.url} autoPlay></audio></td><td id="W" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>W</td><td id="E" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>E</td></tr>
              <tr><td id="A" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>A</td><td id="S" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>S</td><td id="D" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>D</td></tr>
              <tr><td id="Z" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>Z</td><td id="X" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>X</td><td id="C" className="drum-pad" onClick={this.handlePick} onKeyDown={this.KeyDown}>C</td></tr>
            </tbody>
          </table>
        </div>
        <div id="controls">
          <div style={{ paddingLeft: '45%' }} onClick={this.power}>
            Power
            <div id="cPower" style={{ width: '4.6rem', eight: '1.6rem', background: 'black', cursor: 'pointer' }}>
              <div style={{ width: '50%', display: 'inline-block', color: this.state.active ? 'transparent' : 'white' }}>off</div>
              <div style={{ width: '50%', display: 'inline-block', color: this.state.active ? 'white' : 'transparent' }}>on</div>
            </div>
          </div>
          <div id="display" style={{ paddingTop: '30%', paddingLeft: '15%' }}>
            <div style={{ width: '80%', height: '40px', textAlign: 'center', background: '#6F5C5C', paddingTop: '15px', color: 'white' }}>{this.state.active ? this.state.text : this.setState({ text : '' })}</div>
          </div>

        </div>
      </div>
      <div id="footer"></div>
    </div>
    )
  }
}


ReactDOM.render(
  <DrumMachine />,
  document.getElementById('root'))
