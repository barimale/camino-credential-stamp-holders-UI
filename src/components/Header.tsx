import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      fontFamily: 'unset !important',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'black'
    },
  }));

export const Header = () =>  {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        <header style={{
            background: '#333',
            color: '#fff',
            textAlign: 'right',
            padding: '10px',
            display: 'inline-flex'
          }}>
            <h1 style={{textAlign: 'left', paddingRight: '64px'}}>
                Camino credential stamp holders - Admin panel
            </h1>
            <Link style={{
                paddingTop: '16px',
                paddingLeft: '64px',
                color: '#fff',
                textDecoration: 'none',
                textAlign: 'right'
            }} to="/">Home</Link>
            <Link to="/routeOwners">routeOwners</Link>
          </header>
        </div>
    )
}
