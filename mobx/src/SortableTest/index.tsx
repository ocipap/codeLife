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
        {store.items.map((item) => <SortableItem item={item}/>)}
      </div>
    </>
  );
});

export default () => {
  return <StoreProvider>
    <SortableTest />
  </StoreProvider>
};
