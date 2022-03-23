import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { mainRoutes } from './routes/mainRoutes';
import NotFound from './views/NotFound';
import Container from './components/Container';
import AppBar from './components/AppBar';
import '../src/App.css';

const App = () => {
  return (
    <>
      <Container>
        <AppBar/>
        <Routes>
          {mainRoutes.map(route => (
            <Route key={route.name} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
