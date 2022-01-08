import React from 'react';
import { observer } from 'mobx-react';
import SortableItemStore from './SortableItemStore';

type SortableItemProps = {
  item: SortableItemStore;
  onUp: () => void;
  onDown: () => void;
  onDelete: () => void;
  isUpDisabled: boolean;
  isDownDisabled: boolean;
  isDeletable: boolean;
};

export const SortableItem: React.FC<SortableItemProps> = ({
  item,
  onUp,
  onDown,
  onDelete,
  isUpDisabled,
  isDownDisabled,
  isDeletable,
}) => {
  return (
    <div>
      <h3>{item.id}</h3>
      <div>
        <label htmlFor="input1">input1</label>
        <input
          id="input1"
          type="text"
          onChange={(event) => item.setInput1(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input2">input2</label>
        <input
          id="input2"
          type="text"
          onChange={(event) => item.setInput2(event.target.value)}
        />
      </div>
      <button disabled={isUpDisabled} onClick={onUp}>
        위로
      </button>
      <button disabled={isDownDisabled} onClick={onDown}>
        아래로
      </button>
      <button disabled={!isDeletable} onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default observer(SortableItem);
