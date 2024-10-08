import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Header/Header.css';


export default function NavigationDrawer({ isDrawerOpen, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="sidebar"
    >
          <List>
            {['../Uberms-logo.png', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  {/* <ListItemIcon >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  {text.includes('.png') ? (
                    <img src={text} alt={`List Item ${index}`} className='logo' />
                  ) : (
                    <ListItemText primary={text} className='tx' />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text}  className='tx' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="right"  // Drawer will open from the right
      open={isDrawerOpen}  // Use state from the parent component
      onClose={toggleDrawer(false)}
    >
      {list()}
    </Drawer>
  );
}
