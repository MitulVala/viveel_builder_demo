import React from 'react';
import { FieldArray, reduxForm } from "redux-form";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DistributionField from '../../../components/FieldArrayComponents/DistributionField';
import { required } from '../../../utils/validation';


function StepThree(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
      <Typography>Token Distribution</Typography>

        <FieldArray
          name="token_distribution"
          required={required}
          component={DistributionField}
        />
        <div className='next-btn'>
        <Button type="submit" variant="contained">
          Next
        </Button>
        </div>
      </form>
      <div className='copy-right'>
        <p>Token distribution relates to how you share your assets between different players, such as your developmen team, marketing and community. In this slide you must add as much players as you like and the amount of tokens each one is entiteled with.</p>
      </div>
    </div>
  )
}

const StepThreeForm = reduxForm({
  form: "StepThreeForm", // a unique identifier for this form
  enableReinitialize: true,
})(StepThree);
export default StepThreeForm