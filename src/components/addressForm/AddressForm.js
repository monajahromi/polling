import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const AddressForm = () => {
    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Fill Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <TextField
              
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              
              id="Emailaddress"
              name="Emailaddress"
              label="Email address"
              fullWidth
              autoComplete="Email-address"
            />
          </Grid>
          
          
        </Grid>
      </React.Fragment>
    );
};

export default AddressForm;