import { makeAutoObservable } from "mobx";
import { v4 as uuid } from "uuid";

class SortableItemStore {
  id: string;

  input1: string;

  input2: string;

  constructor(input1: string, input2: string) {
    makeAutoObservable(this);
    this.id = uuid();
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
