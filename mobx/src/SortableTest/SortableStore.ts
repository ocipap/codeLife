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

  up(pos: number) {
    const toPosition = pos - 1;
    this.items = this.items.slice(0, toPosition)
      .concat(this.items[pos])
      .concat(this.items.slice(toPosition, pos))
      .concat(this.items.slice(pos + 1))
  }

  down(pos: number) {
    const toPosition = pos + 1;

    this.items = this.items.slice(0, pos)
      .concat(this.items.slice(pos + 1, toPosition + 1))
      .concat(this.items[pos])
      .concat(this.items.slice(toPosition + 1))

  }
}

export default SortableStore;
