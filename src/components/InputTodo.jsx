import styeled from "styled-components";

export const InputTodo = (props) => {
  const { inputTodo, setInputTodo, onClickAdd } = props;
  return (
    <div>
      <SInput
        placeholder="TODOを入力"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button onClick={onClickAdd}>保存</button>
    </div>
  );
};

const SInput = styeled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;
