import { observer } from 'mobx-react';
import {
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import SortableItem from './SortableItem';
import InputHookForm from '../components/InputHookForm';
import React from 'react';
import { v4 as uuid } from 'uuid';

type FormValues = {
  name: string;
  email: string;
  sortable: {
    id: string;
    input1: string;
    input2: string;
  }[];
};

const SortableHookForm = observer(() => {
  const methods = useForm<FormValues>({
    mode: 'onChange',
  });
  const { control, handleSubmit, formState } = methods;
  const { fields, remove, append, swap } = useFieldArray({
    name: 'sortable',
    control,
  });
  const { isValid, isDirty } = formState;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const handleSwap = (from: number, to: number) => {
    console.log('fields.length', fields.length);
    if (to < 0 || fields.length <= to) {
      return;
    }
    swap(from, to);
  };

  return (
    <FormProvider {...methods}>
      <div>
        <h1>Sortable Test</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputHookForm
          control={control}
          name="name"
          field="이름"
          rules={{ required: 'Name is required' }}
        />
        <InputHookForm
          control={control}
          name="email"
          field="이메일"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'Email is not valid.',
            },
          }}
        />
        <div>
          {fields.map((field, index) => {
            return (
              <SortableItem
                key={field.id}
                item={field}
                index={index}
                onUp={() => handleSwap(index, index - 1)}
                onDown={() => handleSwap(index, index + 1)}
                onDelete={() => remove(index)}
                isUpDisabled={index <= 0}
                isDownDisabled={index >= fields.length - 1}
              />
            );
          })}
        </div>
        <button
          type={'button'}
          onClick={() => append({ id: uuid(), input1: '', input2: '' })}
        >
          추가하기
        </button>
        <button type={'submit'} disabled={!isDirty || !isValid}>
          제출
        </button>
      </form>
    </FormProvider>
  );
});

export default SortableHookForm;
