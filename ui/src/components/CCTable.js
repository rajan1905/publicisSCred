import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  
class CCTable extends React.Component{

    render() {
        const {classes} = this.props;
        return(
            <Box component="div" display="inline">
                <TableContainer className={classes.table} component={Paper}>
                <Table size="small" aria-label="Existing Cards">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Name</TableCell>
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
}

CCTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(CCTable);