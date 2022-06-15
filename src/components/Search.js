import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const { show } = useContext(AlertContext);

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    if (value.trim()) {
      console.log('make request with ', value);
    } else {
      show('enter data user');
    }
  };
  return (
    <div className="form-group mb-4">
      <input
        type="text"
        className="form-control "
        placeholder="enter gitHub nickname"
        onKeyPress={onSubmit}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};
