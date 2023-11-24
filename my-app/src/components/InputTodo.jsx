export const InputTodo = (props) => {
  const { inputTodo, setInputTodo, onClickAdd } = props;
  return (
    <div>
      <input
        className="input-todo"
        placeholder="TODOを入力"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button onClick={onClickAdd}>保存</button>
    </div>
  );
};
