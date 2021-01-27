import React from 'react'
import SocialMediaImageFrameImage from './SocialMediaImageFrameImage.jsx'

const SocialMediaImageFrame = (props) => {


    return (
      <div className='SocialMediaCarouselFrame'>
        {props.data.map((imageLink, index) => {
          return (
            <SocialMediaImageFrameImage imageLink={imageLink.InstagramImage} Likes={imageLink.Likes} transform={props.transform} openClickModal={props.openClickModal} hoverIndex={props.hoverIndex} index={index} key={index}/>
          )
        })}
      </div>
    )

}

export default SocialMediaImageFrame