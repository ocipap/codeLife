import Input from '../components/Input';
import { useState } from 'react';

export default function AwesomeMobxForm() {
  const [state, setState] = useState('');
  return (
    <>
      <div>
        <Input
          field={'이름'}
          onChange={({ target: { value } }) => setState(value)}
          value={state}
        />
      </div>
    </>
  );
}
