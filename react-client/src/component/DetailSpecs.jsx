import React from 'react'

class DetailSpecs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
    this.selectText = this.selectText.bind(this)
    this.renderText = this.renderText.bind(this)
  }

  selectText() {
    this.setState({
      selected: !this.state.selected
    })
  }

  renderText() {
    if (this.state.selected) {
      return (
      <div className="detailParagraph">
        <h4>Title</h4>
        <p>This is a sentence</p>
      </div>
      )
    } else {
      return (
      <div className="specBulletpoints">
        <li>Details</li>
        <li>Details</li>
      </div>
      )
    }
  }
  render() {
    return(
      <div>
        <div className="detailSpecBox">
          <div className="detailBox" onClick={this.selectText}>
            <a className="detailText">
              Product Details
            </a>
          </div>
          <div className="specBox" onClick={this.selectText}>
            <a className="specText">
              Specification
            </a>
          </div>
        </div>
        {this.renderText()}
      </div>
    )
  }
}

export default DetailSpecs