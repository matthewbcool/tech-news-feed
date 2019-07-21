import React from 'react'
import Slide from '@material-ui/core/Slide'
import StarIcon from '@material-ui/icons/Star'

export default function Article(props) {
  return (
    <Slide direction='left' in={true} mountOnEnter unmountOnExit>
      <div>
        <StarIcon />
        <h1>{props.articleTitle}</h1>
        <h5>{props.articleText}</h5>
      </div>
    </Slide>
  )
}
