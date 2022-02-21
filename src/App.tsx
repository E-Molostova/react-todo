import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { mainRoutes } from './routes/mainRoutes';
import '../src/App.css';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Routes>
      {mainRoutes.map(route => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
