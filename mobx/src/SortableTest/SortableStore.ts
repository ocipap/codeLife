import SortableItemStore from './SortableItemStore';
import { makeAutoObservable } from 'mobx';

class SortableStore {
  items: SortableItemStore[];
  sendServerValue: string;

  constructor() {
    this.items = [];
    this.sendServerValue = '';
    makeAutoObservable(this);
  }

  get isSubmittable() {
    return this.items.length && this.items.every((item) => item.isSubmittable);
  }

  get isNotSubmittable() {
    return !this.isSubmittable;
  }

  get isDeletable() {
    return this.items.length > 1;
  }

  addItem() {
    this.items = [...this.items, new SortableItemStore('', '')];
  }

  submit() {
    const value = this.items.map((item) => item.value);
    console.log(
      '서버 호출',
      this.items.map((item) => item.value)
    );
    this.sendServerValue = JSON.stringify(value, null, 2);
  }

  up(pos: number) {
    const toPosition = pos - 1;
    this.items = this.items
      .slice(0, toPosition)
      .concat(this.items[pos])
      .concat(this.items.slice(toPosition, pos))
      .concat(this.items.slice(pos + 1));
  }

  down(pos: number) {
    const toPosition = pos + 1;

    this.items = this.items
      .slice(0, pos)
      .concat(this.items.slice(pos + 1, toPosition + 1))
      .concat(this.items[pos])
      .concat(this.items.slice(toPosition + 1));
  }

  remove(_id: string) {
    this.items = this.items.filter(({ id }) => id !== _id);
  }

  isUpDisabled(index: number) {
    return index === 0;
  }

  isDownDisabled(index: number) {
    return index === this.items.length - 1;
  }
}

export default SortableStore;
