import { Button } from '@mui/material';
import React from 'react';
import { Field, reduxForm } from "redux-form";
import { chain_db } from '../../../utils/constant';
import { required } from '../../../utils/validation';
import CheckboxGroup from '../../../components/CustomCheckBox/CheckboxGroup';

function StepFour(props) {
  const { handleSubmit } = props;

  return (
    <div className='checkbox-form'>
      <form onSubmit={handleSubmit} noValidate>
        <Field
          name="chains"
          component={CheckboxGroup}
          options={chain_db}
          validate={[required]}
          required={required}
        />
        <div className='next-btn'>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </div>
      </form>
      <div className='copy-right'>
        <p>Now it is time to select which Blockchain you want to use. Select as many as you want.</p>
      </div>
    </div>
  )
}
const StepFourForm = reduxForm({
  form: "StepFourForm", // a unique identifier for this form
  enableReinitialize: true,
})(StepFour);
export default StepFourForm