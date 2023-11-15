import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définition des types pour les éléments et l'état global Todo.
type Todo = {
  id: string;
  content: string;
};

type TodoState = {
  todos: Todo[];
  inputValue: string;
};

// État initial de l'application avec un exemple de Todo.
const initialState: TodoState = {
  todos: [
    {
      id: crypto.randomUUID(),
      content: 'Faire les course',
    },
  ],
  inputValue: '',
};

// Slice Redux pour la gestion de l'état des Todos.
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Reducer pour changer la valeur de l'input.
    changeInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    // Reducer pour ajouter un nouveau Todo.
    addNewTodo(state) {
      const newTodo = {
        id: crypto.randomUUID(),
        content: state.inputValue,
      };

      if (newTodo.content === '') {
        return;
      }

      state.todos.push(newTodo);
      state.inputValue = '';
    },
    // Reducer pour supprimer un Todo spécifique.
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Exportation des actions et du reducer du slice.
export const { changeInputValue, addNewTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
