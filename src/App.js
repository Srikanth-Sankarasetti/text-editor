import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import './App.css'

// Replace your code here

class App extends Component {
  state = {
    inputText: '',
    boldClicked: false,
    italicClicked: false,
    underClicked: false,
  }

  boldButton = () => {
    this.setState(prevState => ({
      boldClicked: !prevState.boldClicked,
    }))
  }

  italicButton = () => {
    this.setState(prevState => ({
      italicClicked: !prevState.italicClicked,
    }))
  }

  underButton = () => {
    this.setState(prevState => ({
      underClicked: !prevState.underClicked,
    }))
  }

  changeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {boldClicked, italicClicked, underClicked, inputText} = this.state
    const boldIcon = boldClicked ? 'button' : 'button-type'
    const italicButton = italicClicked ? 'button' : 'button-type'
    const underButton = underClicked ? 'button' : 'button-type'
    const bolder = boldClicked ? 'bold' : ''
    const ital = italicClicked ? 'italic' : ''
    const under = underClicked ? 'under' : ''
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="text-container">
            <h1 className="text-head">Text Editor</h1>
            <img
              className="text-image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="editor-container">
            <ul className="ul-list">
              <li>
                <button
                  data-testid="bold"
                  type="button"
                  className={boldIcon}
                  onClick={this.boldButton}
                >
                  <VscBold size={18} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-testid="italic"
                  className={italicButton}
                  onClick={this.italicButton}
                >
                  <GoItalic size={18} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-testid="underline"
                  className={underButton}
                  onClick={this.underButton}
                >
                  <AiOutlineUnderline size={18} />
                </button>
              </li>
            </ul>
            <textarea
              className={`text-area ${bolder} ${ital} ${under}`}
              value={inputText}
              onChange={this.changeInput}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
