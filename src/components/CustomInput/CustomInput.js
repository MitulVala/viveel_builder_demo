import React from 'react';
import PropTypes from "prop-types";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';

export default function CustomInput(props) {
  const { meta: { touched, error }, id, inputProps, input, onKeyDown } = props;
  return (
    <FormControl className=''>
      <TextField
        variant="outlined"
        className=''
        inputProps={{ ...input }}
        autoComplete="off"
        {...inputProps}
        id={id}
        onKeyDown={onKeyDown}
        error={touched && Boolean(error)}
      />
      {touched && error ? (
        <FormHelperText style={{ color: 'red' }}>{touched && error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}


CustomInput.propTypes = {
  id: PropTypes.string,
  inputProps: PropTypes.object,
  error: PropTypes.bool,
  input: PropTypes.object,
};
