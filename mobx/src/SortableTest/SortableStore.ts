import SortableItemStore from "./SortableItemStore";
import { makeAutoObservable } from "mobx";

class SortableStore {
  items: SortableItemStore[];
  sendServerValue: string;

  constructor() {
    this.items = [new SortableItemStore('', '')];
    this.sendServerValue = ''
    makeAutoObservable(this);
  }

  addItem() {
    this.items = [...this.items, new SortableItemStore('', '')]
  }

  submit() {
    const value = this.items.map(item => item.value);
    console.log('서버 호출', this.items.map(item => item.value))
    this.sendServerValue = JSON.stringify(value , null, 2)
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

  isDisabled(index: number) {
    return index === 0 || index === this.items.length - 1
  }

  get isDeletable() {
    return this.items.length > 1
  }

  remove(_id: string) {
    this.items = this.items.filter(({ id }) => id !== _id)
  }
}

export default SortableStore;
