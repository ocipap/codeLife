import { observer } from "mobx-react";
import { StoreProvider, useMobxStore } from "./useMobxStore";
import SortableItem from "./SortableItem";

const SortableTest = observer(() => {
  const store = useMobxStore();

  return (
    <>
      <div>
        <h1>Sortable Test</h1>
        <button onClick={() => store.addItem()}>추가</button>
      </div>
      <div>
        {store.items.map((item, index) => <SortableItem
          key={item.id}
          item={item}
          onUp={() => store.up(index)}
          onDown={() => store.down(index)}
          upDisabled={index === 0}
          downDisabled={index === store.items.length - 1}
          />
        )}
      </div>
    </>
  );
});

export default () => {
  return <StoreProvider>
    <SortableTest />
  </StoreProvider>
};
