import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText'

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
    color: 'blue',
    textDecoration: 'underline',
    marginBottom: '0.5em'
  },
  starIcon: {
    color: 'darkorange'
  }
}))

export default function ArticlePanel(props) {
  const classes = useStyles()
  return <ListItemText primary={props.articleTitle} />
}
