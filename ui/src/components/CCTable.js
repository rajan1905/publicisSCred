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

import { Client } from '@stomp/stompjs';

const styles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function createData(name, card, balance, limit) {
    return { name, card, balance, limit };
}

class CCTable extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            rows: []
        };
      }

      componentDidMount() {
        console.log('Component did mount');
        this.client = new Client();
    
        this.client.configure({
          brokerURL: 'ws://localhost:8080/stomp',
          onConnect: () => {
            console.log('onConnect');
    
            this.client.subscribe('/queue/now', message => {
              this.setState({data: JSON.parse(message.body)});
              this.state.rows=[];
              this.state.data.forEach((item) => {
                this.state.rows.push(createData(item.name, item.cardNo, item.balance, item.limit));
             });
            });
          },
        });
    
        this.client.activate();
      }
    
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
                    {this.state.rows.map((row ,i) => (
                        <TableRow key={row.card}>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.card}</TableCell>
                            <TableCell align="center">{row.balance}</TableCell>
                            <TableCell align="center">{row.limit}</TableCell>
                        </TableRow>
                    ))}
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