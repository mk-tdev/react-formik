// reducer for todo app
// Language: javascript
// Path: src/reducers/todo.js

const reducer = (state = [], action) => {
  switch (action.type) {
    case "SET_TODO":
      return action.payload;

    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          timeCreated: new Date(),
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
