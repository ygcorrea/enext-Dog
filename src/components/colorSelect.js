import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

//   const [branco, setBranco] = useState('#FFF');
//   const [preto, setPreto] = useState('#000');
//   const [amarelo, setAmarelo] = useState('#ffdd00');
//   const [verde, setVerde] = useState('#6cf883');
//   const [rosa, setRosa] = useState('#e87792');

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

export default function ColorSelect() {
  const classes = useStyles();
  const [option, setOption] = useState({ color: '' });
  const [color, setColor] = useState('yellow');

  const changeColor = () => {
    setColor('green');
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setOption({
      ...option,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="color-name">Cor</InputLabel>
        <NativeSelect
          value={option.color}
          onChange={() => {
            handleChange();
          }}
          inputProps={{
            name: 'color',
            id: 'color-name',
          }}
        >
          <option aria-label="None" value="" />
          <option value="yellow">{changeColor}</option>
          <option value="green">{changeColor}</option>
          <option value="blue">{changeColor}</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
