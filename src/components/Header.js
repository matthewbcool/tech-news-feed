import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SwipeDrawer from './SwipeDrawer'
import AccountBoxIcon from '@material-ui/icons/AccountBox'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'>
            <SwipeDrawer />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Tech News Feed
          </Typography>
          <IconButton color='inherit'>
            <AccountBoxIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
