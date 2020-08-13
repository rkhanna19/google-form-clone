import React from 'react';
import {
    FormControl, 
    MenuItem, 
    Select,
    FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    formControl: {
        minWidth: 200,
        padding: 20,
    },
    select: {
        marginTop: 2,
        padding: 2,
    },
  });

export default function Dropdown({handleChange, type}) {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl} variant='outlined'>
                <Select
                    value={type}
                    onChange={handleChange}
                    className={classes.select}
                    >
                    <MenuItem value='Multiple choice' default>Multiple choice</MenuItem>
                    <MenuItem value='Short answer'>Short answer</MenuItem>
                    <MenuItem value='Paragraph'>Paragraph</MenuItem>
                    <MenuItem value='Dropdown'>Dropdown</MenuItem>
                    <MenuItem value='Linear scale'>Linear Scale</MenuItem>
                </Select>
            <FormHelperText>Question Type</FormHelperText>
        </FormControl>
    )
}