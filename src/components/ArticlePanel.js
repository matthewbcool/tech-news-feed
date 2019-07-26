import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import VoteBox from './VoteBox'
import StarIcon from '@material-ui/icons/Star'
import { Link } from '@reach/router'

const useStyles = makeStyles(theme => ({
  linkText: {
    color: 'black',
    fontSize: '1.2rem',
    width: '300px'
  },
  starIcon: {
    color: 'grey',
    alignItems: 'center'
  },
  panelRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'left'
  },
  linkWrapper: {
    width: '400px',
    textAlign: 'left'
  }
}))

export default function ArticlePanel(props) {
  const classes = useStyles()
  return (
    <ListItem classes={{ root: classes.panelRoot }}>
      <ListItemIcon button>
        <StarIcon />
      </ListItemIcon>
      <Link to={props.parsedArticleTitle}>
        <div className={classes.linkWrapper}>
          <ListItemText classes={{ primary: classes.linkText }}>
            {props.articleTitle}
          </ListItemText>
        </div>
      </Link>
      <VoteBox />
    </ListItem>
  )
}
