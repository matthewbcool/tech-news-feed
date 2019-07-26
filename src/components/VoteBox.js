import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, Container } from '@material-ui/core/'
import UpArrow from '@material-ui/icons/KeyboardArrowUpOutlined'
import DownArrow from '@material-ui/icons/KeyboardArrowDownOutlined'

const useStyles = makeStyles(theme => ({
  voteBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    width: '100px',
    margin: '0'
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
  const [vote, setVote] = useState(false)
  return (
    <Container classes={{ root: classes.voteBox }}>
      <ListItem button onClick={() => console.log('upvote')}>
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
