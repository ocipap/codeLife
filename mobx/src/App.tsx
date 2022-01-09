import React from 'react';
import SortableTest from './SortableTest';
import './decorator';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AwesomeForm from './AwesomeForm';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/sortable">Sortable</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/sortable" element={<SortableTest />} />
        <Route path="/form" element={<AwesomeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
