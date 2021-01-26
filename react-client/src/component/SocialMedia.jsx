import React from 'react'
import data from './MockImages.jsx'
import SociaMediaImageFrame from './SocialMediaImageFrame.jsx'
import SocialMediaModal from './SocialMediaModal.jsx'

class SocialMedia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data : data,
      position: 0,
      transform: "translate3d(0%, 0px, 0px)",
      leftIndex: 0,
      rightIndex: null,
      rightVisibility: {visibility: "hidden"},
      leftVisibility: {visibility: "hidden"},
      clickModal: {display: "none"}
    }
    this.slideCarouselLeft = this.slideCarouselLeft.bind(this)
    this.slideCarouselRight = this.slideCarouselRight.bind(this)
    this.mountCarousel = this.mountCarousel.bind(this)
    this.openClickModal = this.openClickModal.bind(this)
    this.closeClickModal = this.closeClickModal.bind(this)
  }

  componentDidMount() {
    this.mountCarousel()
  }

  mountCarousel() {
    if(this.state.data.length > 4) {
      this.setState({
        rightIndex: 3,
        rightVisibility: {visibility: "visible"}
      })
    }
  }

  openClickModal() {
    this.setState({
      clickModal: {display: "block"}
    })
  }

  closeClickModal() {
    this.setState({
      clickModal: {display: "none"}
    })
  }

  slideCarouselRight() {
    if ((this.state.rightIndex + 4) > (this.state.data.length - 1)) {
      let incr = (this.state.data.length - 1) - (this.state.rightIndex)
      this.state.position -= (104.3 * incr)
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        rightIndex: (this.state.rightIndex + incr),
        leftIndex: (this.state.leftIndex + incr),
        rightVisibility: {visibility: "hidden"}
      })
    } else if ((this.state.rightIndex + 4) < (this.state.data.length - 1)) {
      this.state.position -= (104.3 * 4)
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        rightIndex: (this.state.rightIndex + 4),
        leftIndex: (this.state.leftIndex + 4),
        leftVisibility: {visibility: "visible"}
      })
    } else if ((this.state.rightIndex + 4) === (this.state.data.length - 1)) {
      this.state.position -= (104.3 * 4)
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        rightIndex: (this.state.rightIndex + 4),
        leftIndex: (this.state.leftIndex + 4),
        rightVisibility: {visibility: "hidden"}
      })
    }
  }

  slideCarouselLeft() {
    console.log('clicked')
    if ((this.state.leftIndex - 4) < 0) {
      this.setState({
        transform: `translate3d(0%, 0px, 0px)`,
        rightIndex: 3,
        leftIndex: 0,
        position: 0,
        leftVisibility: {visibility: "hidden"}
      })
    } else if ((this.state.leftIndex - 4) > 0) {
      this.state.position += (104.3 * 4)
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        rightIndex: (this.state.rightIndex - 4),
        leftIndex: (this.state.leftIndex - 4),
        rightVisibility: {visibility: "visible"}
      })
    } else if ((this.state.leftIndex - 4) === 0) {
      this.state.position += (104.3 * 4)
      this.setState({
        transform: `translate3d(${this.state.position}%, 0px, 0px)`,
        rightIndex: (this.state.rightIndex - 4),
        leftIndex: (this.state.leftIndex - 4),
        leftVisibility: {visibility: "hidden"}
      })
    }
  }

  render() {
    return (
      <div>
        <div className='SocialMediaContainer'>
          <button className='SocialMediaLeftArrow' style={this.state.leftVisibility} onClick={this.slideCarouselLeft}>
            <svg height="20" viewBox="0 0 17 20" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><polygon points="1.7 10 10.2 1.5 11.6 2.9 4.5 10 11.5 17.1 10.1 18.5"></polygon></svg>
          </button>
          <SociaMediaImageFrame data={this.state.data} transform={this.state.transform} openClickModal={this.openClickModal}/>
          <button className='SocialMediaRightArrow' style={this.state.rightVisibility} onClick={this.slideCarouselRight}>
            <svg height="20" viewBox="0 0 11 20" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><polygon points="2.9 18.5 1.5 17.1 8.5 10 1.4 2.9 2.8 1.5 11.3 10"></polygon></svg>
          </button>
        <SocialMediaModal clickModal={this.state.clickModal} closeClickModal={this.closeClickModal}/>
        </div>
      </div>
    )
  }
}
export default SocialMedia