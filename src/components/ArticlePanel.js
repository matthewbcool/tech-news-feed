import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import VoteBox from './VoteBox'
import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    fontSize: '3.5em'
  },
  linkText: {
    color: 'black',
    fontSize: '1.2rem'
  },
  starIcon: {
    color: 'grey',
    alignItems: 'center'
  }
}))

export default function ArticlePanel(props) {
  const classes = useStyles()
  return (
    <ListItem button>
      <ListItemIcon button>
        <StarIcon />
      </ListItemIcon>
      <ListItemText classes={{ primary: classes.linkText }}>
        {props.articleTitle}
      </ListItemText>
      <VoteBox />
    </ListItem>
  )
}
