import { computed, makeObservable, observable } from 'mobx';

type Validate = {
  errorMessage: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validateFn: (value: any) => boolean;
}

type Setup = {
  field: string;
  name: string;
  value: unknown;
  rules: Validate[];
}

class Form {
  fields = observable.map({});

  constructor(setup: Setup[]) {
    this.init(setup);

    makeObservable(this, {
      fields: observable,
      isValid: computed,

      isDirty: computed,
    });
  }

  init(setup: Setup[]) {
    setup.forEach(({ name, ...form }) => {
      this.fields.set(name, {
        name: name,
        value: form.value,
        field: form.field,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange: (a: any) => {
          console.log(a);
        }
      });
    })
  }

  get isValid() {
    return true;
  }

  get isDirty() {
    return true;
  }

  get values() {
    return this.fields.toJSON()
  }

  register(fieldName: string) {
    return {
      value: this.fields.get(fieldName).value,
      onChange: this.fields.get(fieldName).onChange,
      field: this.fields.get(fieldName).onChange,
    };
  }
}

export default Form;
