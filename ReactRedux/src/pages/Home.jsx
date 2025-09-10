import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../redux/slices/TodoSlice";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const submitHandler = () => {
    if (todo.trim() === "") return;

    if (isEditing) {
      // dispatch update
      dispatch(updateTodo({ id: editId, newText: todo }));
      setIsEditing(false);
      setEditId(null);
    } else {
      // dispatch add
      addTodoHandler();
    }

    setTodo(""); // clear input box
  };

  const addTodoHandler = () => {
    dispatch(addTodo(todo));
  };

  const deleteTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };

  const updateTodoHandler = (id) => {
    const selectedTodo = todos.find((t) => t.id === id);
    if (selectedTodo) {
      setTodo(selectedTodo.text); // put todo text into input box
      setIsEditing(true); // switch to editing mode
      setEditId(id); // store the id of the todo being edited
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto">
        {/* Input field and button */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter Your Note..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={submitHandler}
            className="px-4 py-2 bg-purple-700 hover:bg-purple-800 rounded-lg text-white font-medium"
          >
            {isEditing ? "Update Note" : "Add Note"}
          </button>
        </div>

        {/* Notes list */}
        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between px-4 py-3 rounded-lg bg-gray-800 border border-gray-700"
            >
              <span>{todo.text}</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateTodoHandler(todo.id)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => deleteTodoHandler(todo.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          {todos.length === 0 && (
            <p className="text-gray-400 text-center">
              No notes yet. Add one above!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
