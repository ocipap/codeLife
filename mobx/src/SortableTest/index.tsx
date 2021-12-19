import { observer } from "mobx-react";
import { StoreProvider, useMobxStore } from "./useMobxStore";
import SortableItem from "./SortableItem";
import DisplayPanel from "./DisplayPanel";

const SortableTest = observer(() => {
  const store = useMobxStore();

  return (
    <>
      <div>
        <h1>Sortable Test</h1>
        <button onClick={() => store.addItem()}>추가</button>
        <button disabled={store.isNotSubmittable} onClick={() => store.submit()}>제출</button>
      </div>
      <div>
        {store.items.map((item, index) => (
          <SortableItem
            key={item.id}
            item={item}
            onUp={() => store.up(index)}
            onDown={() => store.down(index)}
            onDelete={() => store.remove(item.id)}
            isUpDisabled={store.isUpDisabled(index)}
            isDownDisabled={store.isDownDisabled(index)}
            isDeletable={store.isDeletable}
          />)
        )}
      </div>
      <DisplayPanel/>
    </>
  );
});

export default () => {
  return <StoreProvider>
    <SortableTest/>
  </StoreProvider>
};
