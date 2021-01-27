import React from 'react'
import Axios from 'axios'
import SociaMediaImageFrame from './SocialMediaImageFrame.jsx'
import SocialMediaModal from './SocialMediaModal.jsx'

class SocialMedia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{InstagramImage: '', UserInstagram: '', Likes: null, GetThisLook: []}],
      position: 0,
      transform: "translate3d(0%, 0px, 0px)",
      leftIndex: 0,
      rightIndex: null,
      rightVisibility: {visibility: "hidden"},
      leftVisibility: {visibility: "hidden"},
      modalRightVisibility: {visibility: "block"},
      modalLeftVisibility: {visibility: "block"},
      smallRightVisibility: {visibility: "hidden"},
      smallLeftVisibility: {visibility: "hidden"},
      clickModal: {display: "none"},
      modalIndex: 0
    }
    this.slideCarouselLeft = this.slideCarouselLeft.bind(this)
    this.slideCarouselRight = this.slideCarouselRight.bind(this)
    this.mountCarousel = this.mountCarousel.bind(this)
    this.mountModal = this.mountModal.bind(this)
    this.openClickModal = this.openClickModal.bind(this)
    this.closeClickModal = this.closeClickModal.bind(this)
    this.getRequest = this.getRequest.bind(this)
    this.hoverIndex = this.hoverIndex.bind(this)
    this.modalIndexUp = this.modalIndexUp.bind(this)
    this.modalIndexDown = this.modalIndexDown.bind(this)
  }

  componentDidMount() {
    this.getRequest()
  }

  modalIndexUp() {
    if(this.state.data[this.state.modalIndex + 1].GetThisLook.length > 1) {
      this.setState({
        smallLeftVisibility: {visibility: "visible"},
        smallRightVisibility: {visibility: "visible"}
      })
    } else if (this.state.data[this.state.modalIndex + 1].GetThisLook.length === 1) {
      this.setState({
        smallLeftVisibility: {visibility: "hidden"},
        smallRightVisibility: {visibility: "hidden"}
      })
    }

    if((this.state.modalIndex + 1) === (this.state.data.length - 1)) {
      this.setState({
        modalIndex: (this.state.modalIndex += 1),
        modalRightVisibility: {visibility: "hidden"}
      })
    } else {
      this.setState({
        modalIndex: (this.state.modalIndex += 1),
        modalLeftVisibility: {visibility: "visible"}
      })
    }

  }

  modalIndexDown() {
    if(this.state.data[this.state.modalIndex - 1].GetThisLook.length > 1) {
      this.setState({
        smallLeftVisibility: {visibility: "visible"},
        smallRightVisibility: {visibility: "visible"}
      })
    } else if (this.state.data[this.state.modalIndex - 1].GetThisLook.length === 1) {
      this.setState({
        smallLeftVisibility: {visibility: "hidden"},
        smallRightVisibility: {visibility: "hidden"}
      })
    }

    if(this.state.modalIndex === 1) {
      this.setState({
        modalIndex: (this.state.modalIndex -= 1),
        modalLeftVisibility: {visibility: "hidden"}
      })
    } else {
      this.setState({
        modalIndex: (this.state.modalIndex -= 1),
        modalRightVisibility: {visibility: "visible"}
      })
    }
  }

  getRequest() {
    Axios.get('/bechampions/socialmedia/id')
    .then((socialData) => {
      this.setState({
        data: socialData.data.slice(0, 10)
      })
    })
    .then(this.mountCarousel)
    .catch((err) => console.error(err));
  }


  mountCarousel() {
    if(this.state.data.length > 4) {
      this.setState({
        rightIndex: 3,
        rightVisibility: {visibility: "visible"}
      })
    }
  }

  mountModal() {
    if(this.state.data[this.state.modalIndex].GetThisLook.length > 1) {
      this.setState({
        smallLeftVisibility: {visibility: "visible"},
        smallRightVisibility: {visibility: "visible"}
      })
    } else if (this.state.data[this.state.modalIndex].GetThisLook.length === 1) {
      this.setState({
        smallLeftVisibility: {visibility: "hidden"},
        smallRightVisibility: {visibility: "hidden"}
      })
    }
  }

  hoverIndex(index) {
    this.setState({
      modalIndex: index
    })
    console.log(this.state.data[this.state.modalIndex].GetThisLook.length)
  }

  openClickModal() {
    this.mountModal()
    console.log('this.state.modalIndex: ', this.state.modalIndex)
    if(this.state.modalIndex === 0 ) {
      console.log('visible registered')
      this.setState({
        clickModal: {display: "block"},
        modalLeftVisibility: {visibility: "hidden"}
      })
    } else if(this.state.modalIndex === (this.state.data.length - 1)) {
      console.log('hidden registered')
      this.setState({
        clickModal: {display: "block"},
        modalRightVisibility: {visibility: "hidden"}
      })
    } else {
      this.setState({
        clickModal: {display: "block"}
      })
    }
  }

  closeClickModal() {
    this.setState({
      clickModal: {display: "none"}
    })
  }

  slideCarouselRight() {
    console.log(this.state.data.length)
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

          <div className="SocialMediaContainerTopHalf">
            <h2 className='InstagramHeader'>How Others Are Wearing It</h2>
            <p>Tag your Insta photos #Champions and follow us @Champion</p>
          </div>
          <div className="SocialMediaContainerBottomHalf">
            <button className='SocialMediaLeftArrow' style={this.state.leftVisibility} onClick={this.slideCarouselLeft}>
              <svg height="20" viewBox="0 0 17 20" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><polygon points="1.7 10 10.2 1.5 11.6 2.9 4.5 10 11.5 17.1 10.1 18.5"></polygon></svg>
            </button>
            <SociaMediaImageFrame data={this.state.data} transform={this.state.transform} openClickModal={this.openClickModal} hoverIndex={this.hoverIndex}/>
            <button className='SocialMediaRightArrow' style={this.state.rightVisibility} onClick={this.slideCarouselRight}>
              <svg height="20" viewBox="0 0 11 20" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><polygon points="2.9 18.5 1.5 17.1 8.5 10 1.4 2.9 2.8 1.5 11.3 10"></polygon></svg>
            </button>
          </div>

          <SocialMediaModal clickModal={this.state.clickModal} closeClickModal={this.closeClickModal} data={this.state.data[this.state.modalIndex]} modalRightVisibility={this.state.modalRightVisibility} modalLeftVisibility={this.state.modalLeftVisibility} modalIndexUp={this.modalIndexUp} modalIndexDown={this.modalIndexDown} smallLeftVisibility={this.state.smallLeftVisibility} smallRightVisibility={this.state.smallRightVisibility}/>
        </div>
      </div>
    )
  }
}
export default SocialMedia