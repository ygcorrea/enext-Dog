import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

export default function SpitzSelect() {
  const classes = useStyles();
  const [state, setState] = useState({ splitz: '' });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl
        className={classes.formControl}
        style={{ minWidth: '300px' }}
      >
        <InputLabel htmlFor="splitz-name">Raça</InputLabel>
        <NativeSelect
          value={state.splitz}
          onChange={handleChange}
          inputProps={{
            name: 'splitz',
            id: 'splitz-name',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>a</option>
          <option value={20}>b</option>
          <option value={30}>c</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
