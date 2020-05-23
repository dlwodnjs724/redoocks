import { v4 as uuid } from 'uuid';
import { ADD, DEL, COMPLETE, UNCOMPLETE, EDIT } from './actions';

export const initialState = {
  toDos: [],
  completed: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, target],
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (toDo) => toDo.id === action.payload,
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [...state.toDos, aTarget],
      };
    case EDIT:
      const { id, text, isCompleted } = action.payload;
      return {
        ...state,
        toDos: isCompleted
          ? state.toDos
          : [...state.toDos.filter((toDo) => toDo.id !== id), { text, id }],
        completed: isCompleted
          ? [...state.completed.filter((toDo) => toDo.id !== id), { text, id }]
          : state.completed,
      };
    default:
      return;
  }
};

export default reducer;
