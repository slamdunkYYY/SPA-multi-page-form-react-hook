import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

const Confirm = (props) => {
  const { handleChange, nextStep, prevStep, values } = props
  const { firstName, lastName, email, occupation, city, bio } = values

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
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
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
          >Confirm & Continue</Button>
        </Dialog>
      </>
  )
}

export default Confirm;
