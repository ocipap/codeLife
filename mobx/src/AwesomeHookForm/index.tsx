import { SubmitHandler, useForm } from 'react-hook-form';
import InputHookForm from '../components/InputHookForm';

type Inputs = {
  name: '';
  email: '';
  password: '';
  phone: '';
};

export default function AwesomeHookForm() {
  const { control, handleSubmit, formState } = useForm<Inputs>({
    mode: 'onChange',
    shouldFocusError: true, // submit 에러 발생 시 첫번째 오류 포커싱
  });

  const { isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputHookForm
          control={control}
          name={'name'}
          field={'이름'}
          rules={{ required: true }}
        />
        <InputHookForm
          control={control}
          name={'email'}
          field={'이메일'}
          rules={{ required: true }}
        />
        <InputHookForm
          control={control}
          name={'password'}
          field={'비밀번호'}
          rules={{ required: true }}
        />
        <InputHookForm
          control={control}
          name={'phone'}
          field={'휴대전화'}
          rules={{ required: true }}
        />
        <button type={'submit'} disabled={!isDirty || !isValid}>
          제출
        </button>
      </form>
    </>
  );
}
