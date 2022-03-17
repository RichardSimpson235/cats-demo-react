import { BottomNavigationAction, Stack } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Content() {
  const [value, setValue] = useState(0)

  return (
      <Stack
        sx={{
          alignItems: 'center'
        }}
        spacing={2}
      >
        <Outlet />
        <Paper>
          <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            >
              <BottomNavigationAction
                label="Find" 
                component={Link}
                to="/"
              />
              <BottomNavigationAction 
                label="Create" 
                component={Link}
                to="/create"
              />
            </BottomNavigation>
        </Paper>
      </Stack>
  );
}

export default Content;
