import SortableItemStore from "./SortableItemStore";
import { makeAutoObservable } from "mobx";

class SortableStore {
  items: SortableItemStore[];

  constructor() {
    this.items = [new SortableItemStore('', '')];
    makeAutoObservable(this);
  }

  addItem() {
    this.items = [...this.items, new SortableItemStore('', '')]
  }
}

export default SortableStore;
