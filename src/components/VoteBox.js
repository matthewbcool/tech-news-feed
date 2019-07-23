import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import UpArrow from '@material-ui/icons/KeyboardArrowUpOutlined'
import DownArrow from '@material-ui/icons/KeyboardArrowDownOutlined'
import AllOut from '@material-ui/icons/AllOut'

const useStyles = makeStyles(theme => ({
  voteBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    width: '50px'
  }
}))

export default function VoteBox(props) {
  const classes = useStyles()
  return (
    <ListItem className={classes.voteBox}>
      <ListItem button>
        <ListItemIcon>
          <UpArrow />
        </ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <div>39</div>
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DownArrow />
        </ListItemIcon>
      </ListItem>
    </ListItem>
  )
}
