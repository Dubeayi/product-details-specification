import React from 'react'

class SocialMediaImageFrameImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalState : {display: "none"}
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal() {
    this.setState({
      modalState: {display: "flex"}
    })
  }

  hideModal() {
    this.setState({
      modalState: {display: "none"}
    })
  }

render() {
    return (
      <div className='SocialMediaImageFrame' style={{transform: this.props.transform}} onMouseEnter={this.showModal} onMouseLeave={this.hideModal}>
        <div className='SocialMediaImageOverlay' onClick={this.props.openClickModal} style={this.state.modalState} onMouseEnter={() => this.props.hoverIndex(this.props.index)}>
          <div className='ShopNow' >Shop Now</div>
          <svg className="PlusSign" viewBox="0 0 34 34" >
            <path d="M17,33.9 C7.7,33.9 0.1,26.3 0.1,17 C0.1,7.7 7.7,0.1 17,0.1 C26.3,0.1 33.9,7.7 33.9,17 C33.9,26.3 26.3,33.9 17,33.9 Z M17,1.9 C8.7,1.9 1.9,8.7 1.9,17 C1.9,25.3 8.7,32.1 17,32.1 C25.3,32.1 32.1,25.3 32.1,17 C32.1,8.7 25.3,1.9 17,1.9 Z"></path>
            <rect height="2" width="18" x="8" y="16"></rect>
            <rect height="18" width="2" x="16" y="8"></rect></svg>
          <div className="HeartLikes">
          <svg height="11" viewBox="0 0 12 11" width="12" stroke="rgb(255, 255, 255)"><path d="M0,3 C0,5.5 5,9 5,9 C5,9 10,5.4 10,3 C10,-1 5,-0.5 5,1.9 C5,-0.5 0,-1 0,3 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(1 1)"></path></svg> {this.props.Likes} likes
          </div>
        </div>
        <img className='SocialMediaImage' src={this.props.imageLink} />
      </div>
    )
  }
}

export default SocialMediaImageFrameImage