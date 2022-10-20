import React from 'react';
import { Field, reduxForm } from "redux-form";
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { required } from '../../../utils/validation';
import CustomInput from '../../../components/CustomInput/CustomInput';


function StepOne(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <Typography>Token Name</Typography>
        <Field
          name="token_name"
          component={CustomInput}
          id="token_name"
          validate={[required]}
          inputProps={{
            type: "text",
          }}
        />
        <div className='next-btn'>
          <Button type="submit" variant="contained">
            Next
          </Button>
        </div>
      </form>
      <div className='copy-right'>
        <p>The token name represents how your is going to be known</p>
      </div>
    </div>
  )
}

const StepOneForm = reduxForm({
  form: "StepOneForm", // a unique identifier for this form
  enableReinitialize: true,
})(StepOne);
export default StepOneForm