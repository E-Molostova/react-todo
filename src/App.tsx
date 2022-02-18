import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { mainRoutes } from './routes/mainRoutes';
import '../src/App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
const NotFound = lazy(
  () => import('./views/NotFound' /* webpackChunkName: "NotFound" */),
);

const App = () => {
  return (
    <Routes>
      {mainRoutes.map(route => (
        <Route key={route.name} path={route.path} element={route.element} />
      ))}

      {/* <Route path="/" element={<Homepage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
