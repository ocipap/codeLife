import { computed, makeObservable, observable, toJS } from 'mobx';

class Field {
  $value;
  rules;

  constructor({ key }) {
    makeObservable(this, {
      $value: observable,
      errorMessage: computed,
    });
  }

  get value() {
    return toJS(this.$value);
  }

  get errorMessage() {
    return '오잉';
  }

  get isValid() {
    return true;
  }
}
