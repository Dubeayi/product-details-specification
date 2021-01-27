import React from 'react'

const SocialMediaGetThisImageFrame = ({data, transform}) => {

  return (
    <div className="SocialMediaModalGetThisImageAndItemName" >
      <div className="SocialMediaModalGetThisImageFrame">
        {(data === undefined) ? '' : data.map((imageGetThisLink) => {
          return (
            <img className='SocialMediaModalGetThisImage' src={imageGetThisLink} style={{transform}}/>

          )
        })}
      </div>
      <div className="SocialMediaModalGetThisItemNameFrame">

      {(data === undefined) ? '' : data.map((imageGetThisLink) => {
          return (
            <>
        <div className="SocialMediaModalGetThisItemName" style={{transform}}>Clothes</div>
            </>
        )
      })}

      </div>
    </div>
  )
}

export default SocialMediaGetThisImageFrame