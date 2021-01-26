import React from 'react'

const SocialMediaGetThisImageFrame = (props) => {

  return (
    <div className="SocialMediaModalGetThisImageFrame">
      {props.data.map((imageGetThisLink) => {
        return (
          <img className='SocialMediaModalGetThisImage' src={imageGetThisLink} style={{transform: props.transform}}/>
        )
      })}
    </div>
  )
}

export default SocialMediaGetThisImageFrame