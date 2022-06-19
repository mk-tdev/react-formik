import { render, fireEvent, screen } from "@testing-library/react";
import { Provider, useSelector, useDispatch } from "react-redux";

import Todo from "./Todo";

import configureStore from "../store/index";

const store = configureStore();

const mockAppState = {
  todos: [
    {
      id: 0,
      text: "Learn React",
      completed: false,
      timeCreated: new Date(),
    },
    {
      id: 1,
      text: "Learn Redux",
      completed: false,
      timeCreated: new Date(),
    },
  ],
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Todo", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
    useDispatch.mockImplementation(() => dispatch);
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  it("should render", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  it("should add a todo", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    const input = screen.getByTestId("todo-input");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(screen.getByTestId("add-todo-button"));
    expect(dispatch).toHaveBeenCalledWith({
      id: 2,
      text: "test",
      type: "ADD_TODO",
    });
    expect(screen.getByText("Learn Redux")).toBeInTheDocument();
  });

  it("should toggle a todo", () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    );
    fireEvent.click(screen.getByTestId("toggle-todo-button"));
    expect(dispatch).toHaveBeenCalledWith({
      id: 0,
      type: "TOGGLE_TODO",
    });
    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });
});
