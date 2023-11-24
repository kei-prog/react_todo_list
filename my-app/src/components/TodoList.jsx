export const TodoList = (props) => {
  const {
    todos,
    onClickComplete,
    handleEditInputChange,
    onClickEdit,
    onClickDelete,
  } = props;
  return (
    <>
      <p>TODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="todo-item-label">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onClick={() => onClickComplete(index)}
              />
              {todo.isEditing ? (
                <input
                  type="text"
                  value={todo.text}
                  className="input-editing-todo"
                  onChange={(e) => handleEditInputChange(e, index)}
                />
              ) : (
                <p>{todo.text}</p>
              )}
            </div>
            <div>
              <button onClick={() => onClickEdit(index)}>編集</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
