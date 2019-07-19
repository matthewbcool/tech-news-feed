import React from 'react'

import StarIcon from '@material-ui/icons/Star'

export default function Article(props) {
  return (
    <div>
      <StarIcon />
      <h1>This is an Article Title</h1>
      <h5>{props.articleText}</h5>
    </div>
  )
}
