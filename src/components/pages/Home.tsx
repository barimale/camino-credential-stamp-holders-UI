import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Path as PiligrimsPath, Description as PiligrimsDescription } from "./Piligrims/Piligrims";
import { Path as RouteOwnerPath, Description as RouteOwnerDescription } from "./RouteOwners/RouteOwners";
import { Path as PlacesPath, Description as PlacesDescription } from "./Places/Places";
import { Button } from '@material-ui/core';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import LocalCafeTwoToneIcon from '@material-ui/icons/LocalCafeTwoTone';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
import SettingsEthernetTwoToneIcon from '@material-ui/icons/SettingsEthernetTwoTone';
import { appBaseRouteKey } from "../../App";

export const Path = "/";

export function Home() {
    return (
      <SpacingGrid/>
    );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 400,
      width: 300
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item style={{
                        width: 'inherit',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        verticalAlign: 'center',
                        alignContent: 'center'}}>
                <h2>Administrator console</h2>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
            <Grid key={1} item>
                <Button>
                    <Link style={{textDecoration: 'none'}} to={appBaseRouteKey + RouteOwnerPath}>
                        <Paper className={classes.paper} >
                            <h2>{RouteOwnerDescription}</h2>
                            <PeopleAltTwoToneIcon fontSize={'large'}/>
                            <br/>
                            <h4>GO</h4>
                        </Paper>
                    </Link>
                </Button>
            </Grid>
            <Grid key={2} item>
                <Button>
                  <Link style={{textDecoration: 'none'}} to={appBaseRouteKey + PlacesPath}>
                        <Paper className={classes.paper} >
                            <h2>{PlacesDescription}</h2>
                            <span style={{display:'inline-flex', flexDirection: 'row', padding: '20px'}}>
                              <LocalCafeTwoToneIcon fontSize={'large'}/>
                              <SettingsEthernetTwoToneIcon fontSize={'large'}/>
                              <HomeWorkTwoToneIcon fontSize={'large'}/>
                            </span>
                            <br/>
                            <h4>GO</h4>
                        </Paper>
                    </Link>
                </Button>
            </Grid>
            <Grid key={3} item>
                <Button>
                  <Link style={{textDecoration: 'none'}} to={appBaseRouteKey + PiligrimsPath}>
                      <Paper className={classes.paper} >
                          <h2>{PiligrimsDescription}</h2>
                          <span style={{display:'inline-flex', flexDirection: 'row', padding: '20px'}}>
                          <EmojiPeopleTwoToneIcon fontSize={'small'}/>
                          <EmojiPeopleTwoToneIcon fontSize={'large'}/>
                          <EmojiPeopleTwoToneIcon fontSize={'small'}/>
                          </span>
                          <br/>
                          <h4>GO</h4>
                      </Paper>
                    </Link>
                </Button>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}