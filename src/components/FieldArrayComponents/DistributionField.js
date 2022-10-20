import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import deleteIcon from "../../assets/images/delete-icon.svg"
import { Field } from "redux-form";
import CustomInput from "../CustomInput/CustomInput";

const DistributionField = ({ fields, required }) => {

    useEffect(() => {
        if (fields.length === 0) {
            fields.push();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const removeFields = (index) => {
        fields.remove(index);
    }

    return (
        <>
            {fields.map((name, index) => (
                <Grid key={index}>
                    <Grid>

                        <div className="over-form-field">
                            <div className="font-label-content">
                                <span>Name</span>
                                <Field
                                    id={`${name}.name`}
                                    name={`${name}.name`}
                                    component={CustomInput}
                                    validate={[required]}
                                    inputProps={{
                                        type: "text",
                                    }}
                                />
                            </div>
                            <div className="font-label-content">
                                <span>Amount</span>
                                <Field
                                    id={`${name}.amount`}
                                    name={`${name}.amount`}
                                    component={CustomInput}
                                    type="number"
                                    validate={[required]}
                                    inputProps={{
                                        type: "number",
                                    }}
                                />
                            </div>
                            {fields.length > 1 &&
                                <div className="delete-icon">
                                    <IconButton
                                        onClick={() => removeFields(index)}
                                        aria-label="delete"
                                        size="medium">
                                        <img src={deleteIcon} alt="img" style={{ filter: "brightness(10)" }} />
                                    </IconButton>
                                </div>
                            }
                        </div>
                    </Grid>
                </Grid>
            ))}
            <Box component="div" className='addBtn-box'>
                <Button onClick={() => fields.push()} className="add-more-btn">
                    Add More
                </Button>
            </Box>
        </>
    )
}

export default DistributionField