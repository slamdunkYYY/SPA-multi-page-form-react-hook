import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const FormUserDetails = (props) => {
  const { handleChange, nextStep, values } = props
  const continuePage = (e) => {
    e.preventDefault();
    nextStep();
  }
  return (
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            name="email"
            onChange={handleChange}
            value={values.email}
            margin="normal"
            fullWidth
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={continuePage}
          >Continue</Button>
        </Dialog>
      </>
  )
}

export default FormUserDetails