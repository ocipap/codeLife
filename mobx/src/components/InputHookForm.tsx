import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import Input from './Input';

const InputHookForm: React.FC<UseControllerProps<any> & { field: string }> = (
  props
) => {
  const { field, fieldState } = useController(props);

  return (
    <Input
      field={props.field}
      {...field}
      error={fieldState.invalid}
      errorMessage={fieldState.error?.message}
    />
  );
};

export default InputHookForm;
