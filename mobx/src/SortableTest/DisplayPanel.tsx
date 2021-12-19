import { observer } from "mobx-react";
import { useMobxStore } from "./useMobxStore";

const DisplayPanel = () => {
  const store = useMobxStore();

  return <div>
    <h5>서버제출</h5>
    <pre style={{ padding: 16, border: '1px solid #000000'}}>{store.sendServerValue}</pre>
  </div>
}

export default observer(DisplayPanel)
