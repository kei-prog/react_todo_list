import styled from "styled-components";

export const TodoCounts = (props) => {
  const { totalTodosCount, completedTodosCount, incompleteTodosCount } = props;
  return (
    <STodoCounts>
      <STodoCountsItem> 合計: {totalTodosCount}</STodoCountsItem>
      <STodoCountsItem> 完了: {completedTodosCount} </STodoCountsItem>
      <STodoCountsItem> 未完了: {incompleteTodosCount}</STodoCountsItem>
    </STodoCounts>
  );
};

const STodoCounts = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 14px;
  color: #777;
`;

const STodoCountsItem = styled.p`
  margin-right: 10px;
`;
