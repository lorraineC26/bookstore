import { createStore } from "redux";

import reducers from './reducers/index';

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // be able to use redux dev tool in broswer
);

export default store;