import styled from "styled-components";

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
            <STodoItem>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onClick={() => onClickComplete(index)}
              />
              {todo.isEditing ? (
                <SInput
                  type="text"
                  value={todo.text}
                  onChange={(e) => handleEditInputChange(e, index)}
                />
              ) : (
                <p>{todo.text}</p>
              )}
            </STodoItem>
            <div>
              {todo.isEditing ? (
                <button onClick={() => onClickEdit(index)}>保存</button>
              ) : (
                <button onClick={() => onClickEdit(index)}>編集</button>
              )}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const STodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  font-weight: bold;
`;
