import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';

const styles = theme => ({
    root: {
        "& > *": {
          margin: 10,
          width: 500
        }
      }
  });

class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            vName: '',
            vCreditCard: '',
            vLimit: 0,
            openDialog: false
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.changeValueName = this.changeValueName.bind(this);
        this.changeValueCardNumber = this.changeValueCardNumber.bind(this);
        this.changeValueLimit = this.changeValueLimit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const card = {
            uName: this.state.vName,
            card: this.state.vCreditCard,
            limit: this.state.vLimit
          };

          axios.post(`/addCard`, null , { params: {
            uName: card.uName,
            card: card.card,
            limit: card.limit
          }}).then(response => this.setState({items: response.data}))
          .catch(err => console.log(err))
          event.preventDefault();
    }

    handleClose(event){
        this.setState({
            openDialog: false
          });
    }

    changeValueName(event){
        const target = event.target;
        const value = target.value;
        this.setState({
            vName : value
        });
    }

    changeValueCardNumber(event){
        const target = event.target;
        const value = target.value;
        if (!Number(value)) {
            this.setState({
                vCreditCard : ''
            });
            return;
        }
        this.setState({
            vCreditCard : value
        });
    }

    changeValueLimit(event){
        const target = event.target;
        const value = target.value;
        if (!Number(value)) {
            this.setState({
                vLimit : 0
            });
            return;
        }
        this.setState({
            vLimit : value
        });
    }


    render() {
        const { classes } = this.props;
        return(
            <Box component="div" display="inline">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField name="fName" 
                        label="Name"
                        value={this.state.vName} 
                        variant="outlined"
                        onChange={this.changeValueName} /> <br/>
                    <TextField name="fCreditCard" 
                        label="Credit Card" 
                        value={this.state.vCreditCard} 
                        variant="outlined"
                        pattern="[0-9]*"
                        onChange={this.changeValueCardNumber} /> <br/>
                    <TextField name="fLimit" 
                        label="Limit" 
                        value={this.state.vLimit} 
                        variant="outlined" 
                        pattern="[0-9]*"
                        onChange={this.changeValueLimit} /> <br/>
                    <Button variant="contained" 
                        color="primary" 
                        size="small" 
                        disabled={false} 
                        onClick={this.handleSubmit}>Add Card</Button>
                </form>

                <Dialog open={this.state.openDialog} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Error in Form entries"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        Invalid Form input
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Aye
                        </Button>
                    </DialogActions>
                </Dialog>
          </Box>

          
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Form);
