import React from 'react'
import data from './MockImages.jsx'
import SocialMediaGetThisImageFrame from './SocialMediaModalGetThisImage.jsx'

class SocialMediaModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rightVisibility: {visibility: "hidden"},
      leftVisibility: {visibility: "hidden"},
      imageIndex: 0,
      position: 0,
      transform: "translate3d(0%, 0px, 0px)"
    }

    this.slideCarouselRight = this.slideCarouselRight.bind(this)
    this.slideCarouselLeft = this.slideCarouselLeft.bind(this)
  }

  slideCarouselLeft() {
    console.log('clicked')
    if (this.props.data.GetThisLook[(this.state.imageIndex - 1)]) {
      this.state.position += 100
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        imageIndex: (this.state.imageIndex - 1)
      })
    } else if (this.state.imageIndex === 0) {
      this.state.position += (-100 * (this.props.data.GetThisLook.length - 1))
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        imageIndex: (this.props.data.GetThisLook.length - 1)
      })
    }
  }

  slideCarouselRight() {
    console.log(this.props.data.GetThisLook.length)
    if (this.props.data.GetThisLook[this.state.imageIndex + 1]) {
      this.state.position -= 100
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        imageIndex: (this.state.imageIndex + 1)
      })
    } else if (this.state.imageIndex === (this.props.data.GetThisLook.length - 1)) {
      this.setState({
        transform: `translate3d(0%, 0px, 0px)`,
        imageIndex: 0,
        position: 0
      })
    }
  }

  render() {
    return (
      <div >
        <div className="SocialMediaModal" style={this.props.clickModal} >
          <div className="SocialMediaModalContainer">
            <div className="SocialMediaModalImageContainer">

                <button className='SocialMediaModalCarouselLArrow' onClick={this.props.modalIndexDown} style={this.props.modalLeftVisibility}>
                  <svg fill="white" stroke="black" height="100%" viewBox="0 0 13 20" width="15"><polygon points="1.7 10 10.2 1.5 11.6 2.9 4.5 10 11.5 17.1 10.1 18.5"></polygon></svg>
                </button>

              <img className ="SocialMediaModalCarouselImage" src={this.props.data.InstagramImage} />

                <button className='SocialMediaModalCarouselRArrow' onClick={this.props.modalIndexUp} style={this.props.modalRightVisibility}>
                  <svg fill="white" stroke="black" height="100%" viewBox="0 0 13 20" width="15" ><polygon points="2.9 18.5 1.5 17.1 8.5 10 1.4 2.9 2.8 1.5 11.3 10"></polygon></svg>
                </button>

            </div>

            <div className="SocialMediaModalWhitespaceContainer">
              <div className="SocialMediaModalXBox" onClick={() => {
                this.setState({imageIndex: 0, position: 0, transform: "translate3d(0%, 0px, 0px)"})
                this.props.closeClickModal()}} >
                <svg className="Xbox" height="25" viewBox="0 0 18 18" width="25"  ><g fill="blue" fillRule="evenodd" strokeWidth="2" transform="translate(1 1)"><path strokeWidth="3" stroke="rgb(92, 92, 92)" d="M15.6.4L.4 15.6M15.6 15.6L.4.4"></path></g></svg>
              </div>
            <div className="SocialMediaModalHandle">
              <div style={{textIndent: "10%"}}>
                @{this.props.data.UserInstagram}
              </div>
            </div>
              <div className="SocialMediaModalGetThisCarousel">

                <button className='SocialMediaModalGetThisLeft' onClick={this.slideCarouselLeft} style={this.props.smallLeftVisibility}>
                  <svg height="100%" viewBox="0 45 13 20" width="15" ><polygon points="1.7 10 10.2 1.5 11.6 2.9 4.5 10 11.5 17.1 10.1 18.5"></polygon></svg>
                </button>

                <div className="SocialMediaModalGetThisFrame">
                  <div className="SocialMediaModalGetThisLook">Get This Look (Item {(this.state.imageIndex + 1)} of {(this.props.data.GetThisLook.length)})</div>
                  <SocialMediaGetThisImageFrame data={this.props.data.GetThisLook} transform={this.state.transform}/>

                </div>

                <button className='SocialMediaModalGetThisRight' onClick={this.slideCarouselRight} style={this.props.smallRightVisibility}>
                  <svg height="100%" viewBox="0 45 13 20" width="15"><polygon points="2.9 18.5 1.5 17.1 8.5 10 1.4 2.9 2.8 1.5 11.3 10"></polygon></svg>
                </button>

              </div>
              <div className="SocialMediaModalSMLinks">
                <div className="fbDivInADiv">
                  <svg className="FB" viewBox="0 -1 6 13" fill="white" ><path  d="M5.1,5.3 L3.5,5.3 L3.5,9.5 L1.9,9.5 L1.9,5.3 L0.8,5.3 L0.8,3.8 L1.9,3.8 L1.9,2.5 C1.9,1.5 2.6,0.5 4.1,0.5 C4.7,0.5 5.2,0.6 5.2,0.6 L5.2,2 C5.2,2 4.7,2 4.2,2 C3.7,2 3.6,2.2 3.6,2.7 L3.6,3.8 L5.3,3.8 L5.1,5.3 Z"></path></svg>
                </div>
                <div className="TwitterDivInADiv">
                <svg className="Twitter" viewBox="0 -1 8 10" fill="white" ><path d="M2.8,7.5 C1.8,7.5 0.8,7.2 0.1,6.7 C0.2,6.7 0.4,6.7 0.5,6.7 C1.3,6.7 2.1,6.4 2.7,6 C1.9,6 1.2,5.5 1,4.8 C1.1,4.8 1.2,4.8 1.4,4.8 C1.6,4.8 1.7,4.8 1.8,4.7 C1,4.6 0.3,3.8 0.3,3 C0.5,3.1 0.8,3.2 1.1,3.2 C0.8,2.8 0.4,2.3 0.4,1.7 C0.4,1.4 0.5,1 0.6,0.8 C1.5,1.9 2.8,2.6 4.2,2.7 C4.2,2.6 4.1,2.4 4.1,2.3 C4.1,1.4 4.9,0.6 5.8,0.6 C6.3,0.6 6.7,0.8 7.1,1.2 C7.5,1.1 7.9,1 8.3,0.8 C8.2,1.2 7.9,1.5 7.5,1.8 C7.9,1.7 8.2,1.7 8.5,1.5 C8.3,1.9 8,2.2 7.6,2.4 C7.6,2.5 7.6,2.5 7.6,2.6 C7.8,4.8 6.1,7.5 2.8,7.5"></path></svg>
                </div>
                <div className="PinterestDivInADiv">
                  <svg className="Pinterest" viewBox="0 -1 8 12" fill="white"><path d="M4.6,7.1 C6.7,7.3 7.9,5 7.7,2.8 C7.4,1 5.5,9.15933995e-16 3.5,0.3 C2,0.4 0.4,1.7 0.3,3.6 C0.3,4.7 0.6,5.5 1.6,5.7 C2.1,4.9 1.4,4.7 1.4,4.1 C1,1.7 4.2,0.1 5.8,1.7 C7,2.9 6.2,6.4 4.3,6 C2.6,5.7 5.2,2.8 3.8,2.3 C2.7,1.9 2,3.8 2.6,4.7 C2.3,6.3 1.6,7.8 1.9,9.7 C2.8,9.1 3.1,7.8 3.3,6.5 C3.8,6.8 4.1,7.1 4.6,7.1"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialMediaModal