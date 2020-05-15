import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormPersonalDetails = (props) => {
  const { handleChange, nextStep, prevStep, values } = props
  const continuePage = e => {
    e.preventDefault();
    nextStep();
  };

  const backPage = e => {
    e.preventDefault();
    prevStep();
  };
  return (
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <AppBar title="Enter Personal Details" />
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            name="occupation"
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            name="city"
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            name="bio"
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />

          <Button
            color="secondary"
            variant="contained"
            onClick={backPage}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={continuePage}
          >Continue</Button>
        </Dialog>
      </>
  )
}

export default FormPersonalDetails;
