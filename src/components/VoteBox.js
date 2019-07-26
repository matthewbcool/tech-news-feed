import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container
} from '@material-ui/core/'
import UpArrow from '@material-ui/icons/KeyboardArrowUpOutlined'
import DownArrow from '@material-ui/icons/KeyboardArrowDownOutlined'
import AllOut from '@material-ui/icons/AllOut'

const useStyles = makeStyles(theme => ({
  voteBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '100px'
  }
}))

const centeredCounter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px',
  width: '24px',
  padding: '0px',
  margin: '0px'
}

export default function VoteBox(props) {
  const classes = useStyles()
  return (
    <Container classes={{ root: classes.voteBox }}>
      <ListItem button>
        <ListItemIcon>
          <UpArrow />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <div style={centeredCounter}>100011</div>
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <DownArrow />
        </ListItemIcon>
      </ListItem>
    </Container>
  )
}
