import React from 'react';

type InputProps = {
  field: string;
  error?: boolean;
  errorMessage?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = React.forwardRef(
  ({ field, error, errorMessage, value, onChange }, ref) => {
    const isError = error ? { border: '1px solid red' } : {};
    const styleInput = { outline: 'none' };
    return (
      <div>
        <label htmlFor="">
          <div>{field}</div>
          <input
            style={{ ...styleInput, ...isError }}
            type="text"
            value={value || ''}
            onChange={onChange}
          />
          <div style={{ color: 'red' }}>{errorMessage}</div>
        </label>
      </div>
    );
  }
);

export default Input;
