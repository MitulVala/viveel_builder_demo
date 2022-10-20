import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Grid from '@mui/material/Grid';
import StepOneForm from './component/StepOne';
import StepTwoForm from './component/StepTwo';
import StepThreeForm from './component/StepThree';
import StepFourForm from './component/StepFour';
import { useDispatch } from 'react-redux';
import { addChains, addDistribution, addName, addSymbol } from './tokenSlice';
import "../../assets/css/custom.css"
import { chain_db } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';


function Token() {

  const [activeStep, setActiveStep] = React.useState(3);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const steps = ["Step1", "Step2", "Step3", "Step4"];

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Grid className='token-main-section'>
      <Grid className='token-main-inner'>
        <Grid className='stepper-content'>
          <Box>
            <Stepper
              activeStep={activeStep}
              alternativeLabel 
              nonLinear
              // alternativeLabel
              //className="stepperBox"
            >
              {steps.map((label) => {
                return (
                  <Step key={label}>
                    <StepLabel></StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
        </Grid>
        <Grid>
          <Box className='token-form'>
            <React.Fragment>
              {activeStep === 0 && (
                <>
                  <StepOneForm onSubmit={(value) => {
                    dispatch(addName(value.token_name));
                    handleNext();
                  }} />
                </>
              )}
              {activeStep === 1 && (
                <>
                  <StepTwoForm onSubmit={(value) => {
                    dispatch(addSymbol(value.token_symbol));
                    handleNext();
                  }} />
                </>
              )}
              {activeStep === 2 && (
                <>
                  <StepThreeForm onSubmit={(value) => {
                    dispatch(addDistribution(value.token_distribution));
                    handleNext();
                  }} />
                </>
              )}
              {activeStep === 3 && (
                <>
                  <StepFourForm onSubmit={(value) => {
                    const filteredArray = chain_db.filter(chain => value?.chains.includes(chain.id));
                    dispatch(addChains(filteredArray));
                    navigation("/token-resume");
                  }} />
                </>
              )}
            </React.Fragment>
          </Box>
        </Grid>
      </Grid>
      {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button onClick={handleNext}>Next</Button>
      </Box> */}
    </Grid>
  )
}

export default Token