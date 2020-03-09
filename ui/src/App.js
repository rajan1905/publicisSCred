import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      spacing: 0
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box m={2} component="div" display="inline" className="app">
      <h2>Credit Card System</h2>

      <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" /> <br/>
            <TextField id="standard-basic" label="Credit Card" /> <br/>
            <TextField id="standard-basic" label="Limit" /> <br/>
            <Button variant="outlined" disabled>Add Card</Button>
      </form>

      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Existing Cards">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Card Number</TableCell>
                  <TableCell align="center">Balance</TableCell>
                  <TableCell align="center">Limit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

              </TableBody>
            </Table>
          </TableContainer>
    </Box>
  );
}

export default App;
