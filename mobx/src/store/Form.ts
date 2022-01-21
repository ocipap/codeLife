import { computed, makeObservable, observable } from 'mobx';

class Form {
  fields = observable.map({});

  constructor(setup) {
    makeObservable(this, {
      fields: observable,
      isValid: computed,
      isDirty: computed,
    });
  }

  get isValid() {
    return true;
  }

  get isDirty() {
    return true;
  }

  register(fieldName) {
    return {
      value: this.fields[fieldName].value,
      onChange: this.fields[fieldName].onChange,
    };
  }
}

export default Form;
