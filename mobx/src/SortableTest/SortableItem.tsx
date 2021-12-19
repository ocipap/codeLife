import React from 'react';
import { observer } from "mobx-react";
import SortableItemStore from "./SortableItemStore";

type SortableItemProps = {
  item: SortableItemStore,
  onUp: () => void,
  onDown: () => void,
  upDisabled: boolean,
  downDisabled: boolean,
}

export const SortableItem: React.FC<SortableItemProps> = ({ item, onUp, onDown, upDisabled, downDisabled }) => {
  return <div>
    <h3>{item.id}</h3>
    <div>
      <label htmlFor="input1">input1</label>
      <input id="input1" type="text" onChange={(event) => item.setInput1(event.target.value)}/>
    </div>
    <div>
      <label htmlFor="input2">input2</label>
      <input
        id="input2"
        type="text"
        onChange={(event) => item.setInput2(event.target.value)}/>
    </div>
    <button disabled={upDisabled} onClick={onUp}>위로</button>
    <button disabled={downDisabled} onClick={onDown}>아래로</button>
  </div>
}

export default observer(SortableItem)
