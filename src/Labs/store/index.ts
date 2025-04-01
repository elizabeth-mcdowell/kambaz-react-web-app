import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer.tsx";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/CounterReducer.tsx"
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer.tsx";
import todosReducer from "../Lab4/ReduxExamples/todos/todosReducer.tsx"
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer
  },
});
export default store;