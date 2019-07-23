import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import VoteBox from './VoteBox'
import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
    textAlign: 'left'
  },
  linkText: {
    color: 'black'
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
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText className={classes.linkText} primary={props.articleTitle} />
      <VoteBox />
    </ListItem>
  )
}
