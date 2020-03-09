import React from 'react';

import Form from './components/Form';
import CCTable from './components/CCTable';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  
  render() {
      return (
        <Box component="div" display="inline">
          <AppBar position="static">
                  <Toolbar variant="dense">
                    <Typography variant="h5" color="inherit">
                      Credit Card System
                    </Typography>
                  </Toolbar>
                </AppBar>

          <Form />

          <CCTable />

        </Box>
      );
  }
}

export default App;
