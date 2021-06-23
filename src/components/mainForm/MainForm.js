import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../addressForm/AddressForm.js';
//import PaymentForm from './PaymentForm';
//import Review from './Review';
import useStyles from './MainFormStyles.js'
import FirstQuestion from './../questions/FirstQuestion'
import SecondQuestion from './../questions/SecondQuestion'
import ThirdQuestion from './../questions/ThirdQuestion'
import Reveiw from './../review/Reveiw.js'
import TimerContext from './../context/TimerContext.js'

const steps = ['Infromation', '1st Question', '2nd Question', '3rd Question', 'Review'];



const InfoForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [timer, setTimer] = React.useState(0);

const handleNext = (question, answer) => {
   setActiveStep(activeStep + 1);
};



const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm />;
       case 1:
         return <FirstQuestion/>;

         case 2:
          return <SecondQuestion />;
          
          case 3:
         return <ThirdQuestion />;

         case 4:
         return <Reveiw />;
    //   case 2:
    //     return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
    



  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
      <TimerContext.Provider value={{
        timer : timer , setTimer 
      }}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep ===  0 ? 'Start' :  activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        </TimerContext.Provider>
      </main>
    </React.Fragment>
  );
};

export default InfoForm;
