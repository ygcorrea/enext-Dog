import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

export default function FontSelect() {
  const classes = useStyles();
  const [state, setState] = useState({ font: '' });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="font-name">Fonte da letra</InputLabel>
        <NativeSelect
          value={state.font}
          onChange={handleChange}
          inputProps={{
            name: 'font',
            id: 'font-name',
          }}
        >
          <option aria-label="None" value="" />
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
