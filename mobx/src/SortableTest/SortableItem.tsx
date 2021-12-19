import React from 'react';
import { observer } from "mobx-react";
import SortableItemStore from "./SortableItemStore";

type SortableItemProps = {
  item: SortableItemStore,
}

export const SortableItem: React.FC<SortableItemProps> = ({ item }) => {
  return <div>
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
    <button>위로</button>
    <button>아래로</button>
  </div>
}

export default observer(SortableItem)
