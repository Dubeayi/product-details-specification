import React from 'react'

class DetailSpecs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: true,
      productStyle: {backgroundColor: "rgb(255, 255, 255)"},
      specificationStyle: {backgroundColor: "rgb(243, 245, 247)"},
      productText: {color: "rgb(112, 112, 112)"},
      specText: {color: "rgb(112, 112, 112)"}
    }
    this.selectProduct = this.selectProduct.bind(this)
    this.renderText = this.renderText.bind(this)
    this.selectDetail = this.selectDetail.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }

  selectProduct() {
    this.setState({
      selected: true,
      productStyle: {backgroundColor: "rgb(255, 255, 255)"},
      specificationStyle: {backgroundColor: "rgb(243, 245, 247)"},
      productText: {color: "black"},
      specText: {color: "rgb(112, 112, 112)"}
    })
    console.log(this.props.DetailSpecs.ProductDetail.Title)
  }

  selectDetail() {
    this.setState({
      selected: false,
      specificationStyle: {backgroundColor: "rgb(255, 255, 255)"},
      productStyle: {backgroundColor: "rgb(243, 245, 247)"},
      specText: {color: "black"},
      productText: {color: "rgb(112, 112, 112)"}
    })
    console.log(this.props.DetailSpecs.ProductDetail.Body)
  }

  renderText() {
    if (this.state.selected) {
      return (
      <div className="detailParagraph">
        <span>{this.props.DetailSpecs.ProductDetail.Title}</span>
        <span>{this.props.DetailSpecs.ProductDetail.Body}</span>
      </div>
      )
    } else {
      return (
      <div className="specBulletpoints">
        {this.props.DetailSpecs.ProductSpecification.map((element) => {
          return (
          <li style={{}}>{element}</li>
          )
        })}
      </div>
      )
    }
  }


  render() {
    return(
      <div>
        <div className="detailSpecBox">
          <div className="detailBox" onClick={this.selectProduct} style={this.state.productStyle}>
            <a className="detailText" style={this.state.productText}>
              Product Details
            </a>
          </div>
          <div className="specBox" onClick={this.selectDetail} style={this.state.specificationStyle}>
            <a className="specText" style={this.state.specText}>
              Specification
            </a>
          </div>
        </div>
        {this.renderText()}
        <div className="separatingBorder"/>
      </div>
    )
  }
}

export default DetailSpecs