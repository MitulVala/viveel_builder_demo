import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Field, reduxForm } from "redux-form";
import CustomInput from '../../../components/CustomInput/CustomInput';
import { required } from '../../../utils/validation';


function StepTwo(props) {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <Typography>Token Symbol</Typography>
        <Field
          name="token_symbol"
          component={CustomInput}
          id="token_symbol"
          validate={[required]}
        />
        <div className='next-btn'>
        <Button type="submit" variant="contained">
          Next
        </Button>
        </div>
      </form>
      <div className='copy-right'>
        <p>The token Symbol is a short name to your asset, usually it is about 3 to 5 capital letters, as USD stands for US Dollar        </p>
      </div>
    </div>
  )
}

const StepTwoForm = reduxForm({
  form: "StepTwoForm", // a unique identifier for this form
  enableReinitialize: true,
})(StepTwo);
export default StepTwoForm