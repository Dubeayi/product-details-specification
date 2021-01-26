import React from 'react'
import SocialMediaImageFrameImage from './SocialMediaImageFrameImage.jsx'

const SocialMediaImageFrame = (props) => {


    return (
      <div className='SocialMediaCarouselFrame'>
        {props.data.map((imageLink, index) => {
          return (
            <SocialMediaImageFrameImage imageLink={imageLink} transform={props.transform} openClickModal={props.openClickModal}/>
          )
        })}
      </div>
    )

}

export default SocialMediaImageFrame