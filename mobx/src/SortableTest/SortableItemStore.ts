import { makeAutoObservable } from "mobx";

class SortableItemStore {
  input1: string;

  input2: string;

  constructor(input1: string, input2: string) {
    makeAutoObservable(this);
    this.input1 = input1;
    this.input2 = input2;
  }

  setInput1(value: string) {
    this.input1 = value;
  }

  setInput2(value: string) {
    this.input2 = value;
  }
}

export default SortableItemStore;
