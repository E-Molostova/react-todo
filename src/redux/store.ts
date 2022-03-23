import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from './todos/todos-reducer';

import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// const reducer = combineReducers({ todosReducer, authReducer });

export const store = createStore(
  todosReducer,

  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
