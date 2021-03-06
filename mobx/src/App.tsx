import React from 'react';
import SortableTest from './SortableTest';
import './decorator';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AwesomeMobxForm from './AwesomeMobxForm';
import AwesomeHookForm from './AwesomeHookForm';
import SortableHookForm from './SortableHookForm';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/sortable">Sortable</Link>
        </li>
        <li>
          <Link to="/sortable-hook">Sortable with react hook form</Link>
        </li>
        <li>
          <Link to="/mobx-form">Mobx Form</Link>
        </li>
        <li>
          <Link to="/hook-form">React Hook Form</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/sortable" element={<SortableTest />} />
        <Route path="/sortable-hook" element={<SortableHookForm />} />
        <Route path="/mobx-form" element={<AwesomeMobxForm />} />
        <Route path="/hook-form" element={<AwesomeHookForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
