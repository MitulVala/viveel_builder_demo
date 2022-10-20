import { FormHelperText } from '@mui/material';
import React from 'react';

class CheckboxGroup extends React.Component {

    checkboxGroup() {
        let { options, input } = this.props;
        return options.map((option, index) => {
            return (
                <div className={(input.value.indexOf(option.id) !== -1) ? "checkbox-radio-btn checkbox" : "checkbox"} key={index}>
                    <label>
                        <input type="checkbox"
                            name={`${input.name}[${index}]`}
                            value={option.id}
                            checked={input.value.indexOf(option.id) !== -1}
                            onChange={(event) => {
                                const newValue = [...input.value];
                                if (event.target.checked) {
                                    newValue.push(option.id);
                                } else {
                                    newValue.splice(newValue.indexOf(option.id), 1);
                                }

                                return input.onChange(newValue);
                            }}
                        />
                        <img src={option.url} alt={option.id} ></img>
                    </label>
                </div >)
        });

    }

    render() {
        const { input, meta: { submitFailed } } = this.props;
        return (
            <>
                <div className='form-select-group'>
                    {this.checkboxGroup()}
                </div>
                {((input.value !== "" && !input.value.length) || (submitFailed && !input.value)) ? (
                    <FormHelperText style={{ color: 'red' }}>This field is required</FormHelperText>
                ) : null
                }
            </>
        )
    }
}


export default CheckboxGroup;