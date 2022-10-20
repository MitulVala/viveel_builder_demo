import React from 'react'
import { Field, reduxForm } from "redux-form";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { required } from '../../../utils/validation';
import CustomInput from '../../../components/CustomInput/CustomInput';

function ResumeForm(props) {
    const { handleSubmit } = props;
    return (
        <div>
            <Typography>Token Resume</Typography>
            <form onSubmit={handleSubmit} noValidate>                
                <Typography> Template:</Typography>
                <Field
                    name="toke_template"
                    component={CustomInput}
                    id="toke_template"
                    validate={[required]}
                />
                <Typography> Name:</Typography>
                <Field
                    name="toke_name"
                    component={CustomInput}
                    id="toke_name"
                    validate={[required]}

                />
                <Typography> Symbol:</Typography>
                <Field
                    name="toke_symbol"
                    component={CustomInput}
                    id="toke_symbol"
                    validate={[required]}
                />
                <Button type="submit" variant="contained">
                    Next
                </Button>
            </form>
        </div>
    )
}

const TokenResumeForm = reduxForm({
    form: "ResumeForm", // a unique identifier for this form
    enableReinitialize: true,
})(ResumeForm);
export default TokenResumeForm