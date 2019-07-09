import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'>
        <Typography className={classes.heading}>
          {props.articleTitle}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{ display: 'flex', flexDirection: 'column' }}>
        <StarIcon className={classes.starIcon} />
        <Typography className={classes.linkText}>
          {<a>Link to original article</a>}
        </Typography>
        <Typography>{props.articleData}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
