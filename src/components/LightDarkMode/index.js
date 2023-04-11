import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'light Mode' : 'Dark Mode'
    return (
      <div className="container">
        <div className={`inner-container ${modeName}`}>
          <h1 className="heading">Click to change mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
