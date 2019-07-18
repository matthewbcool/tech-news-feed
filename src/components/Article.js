import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import StarIcon from '@material-ui/icons/Star'

export default function Article(props) {
  return (
    <div>
      <StarIcon />
      <h1>This is an Article Title</h1>
    </div>
  )
}
