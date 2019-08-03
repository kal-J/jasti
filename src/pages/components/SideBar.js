import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ZoomInOutlined from '@material-ui/icons/ZoomInOutlined';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import BarChartIcon from '@material-ui/icons/BarChart';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
 
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ZoomInOutlined />
      </ListItemIcon>
      <ListItemText primary="Data Analysis" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign out" />
    </ListItem>
  </div>
);

