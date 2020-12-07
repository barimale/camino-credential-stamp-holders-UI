import React from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { Path as RouteOwnerPath, Description as RouteOwnerDescription } from "./pages/RouteOwners/RouteOwners";

export const MainMenu = (props: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            <Button>
                <Link to={RouteOwnerPath}>{RouteOwnerDescription}</Link>
            </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}