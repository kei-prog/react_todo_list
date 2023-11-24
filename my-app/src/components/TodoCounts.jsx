export const TodoCounts = (props) => {
  const { totalTodosCount, completedTodosCount, incompleteTodosCount } = props;
  return (
    <div className="todo-counts">
      <p className="todo-counts-item">合計: {totalTodosCount}</p>
      <p className="todo-counts-item">完了: {completedTodosCount}</p>
      <p className="todo-counts-item">未完了: {incompleteTodosCount}</p>
    </div>
  );
};
