import React from 'react';

type InputProps = {
  field: string;
  value: string;
  error?: boolean;
  errorMessage?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputProps> = ({
  field,
  error,
  errorMessage,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor="">
        {error && <div>에러발생</div>}
        <div>{field}</div>
        <input type="text" value={value} onChange={onChange} />
        <div style={{ color: 'red' }}>{errorMessage}</div>
      </label>
    </div>
  );
};

export default Input;
