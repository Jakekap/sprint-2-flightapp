import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import { useContext } from 'react'
import { Context } from '../../App'; 

const steps = [
  'Booking',
  'Purchase',
  'Get your E-ticket',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  const {value} = useContext(Context);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={value} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}