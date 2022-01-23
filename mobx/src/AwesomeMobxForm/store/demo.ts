import Form from '../../store/Form';

class Demo extends Form {
  constructor() {
    super([{
      name: 'email',
      field: '이름',
      value: '',
      rules: [{ errorMessage: '꾸릉', validateFn: (value: string) => !!value }],
    }, {
      name: 'password',
      field: '비밀번호',
      value: '',
      rules: [{ errorMessage: '비번 꾸릉', validateFn: (value: string) => !!value }],
    },
    ]);
  }
}

export default Demo;
