import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: any) => ({
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
        <header className={classes.root} style={{
            height: '64px',
            background: '#333',
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center', 
            justifyContent: 'center',
            width: '90vw'
          }}>
            <Link style={{
                paddingTop: '16px',
                paddingLeft: '64px',
                color: '#fff',
                textDecoration: 'none',
                textAlign: 'center'
            }} to="/">
                <h1>
                    Camino credential stamp holders
                </h1>
            </Link>
        </header>
    )
}
