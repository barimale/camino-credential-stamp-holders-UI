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

export const Footer = () =>  {
    const classes = useStyles();

    return (
        <footer className={classes.root} style={{
            height: '16px',
            background: '#333',
            color: '#fff',
            paddingTop: '10px',
            paddingBottom: '10px',
            width: '90vw',
            display: 'inline-flex',
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            &copy; 2020
        </footer>
    )
}
