import styled from 'styled-components';

export const TodoItemStyled = styled.li`
  display: flex;
  align-items: center;
  width: 550px;
  height: 65px;
  color: #4d4d4d;
  font-size: 24px;

  padding-left: 15px;

  background-color: #fff;
  border-bottom: solid 1px lightgray;
  height: 100%;

  &:hover .deleteBtn,
  &:focus .deleteBtn {
    opacity: 1;
    padding-right: 15px;
  }

  .description {
    /* padding: 15px; */
    word-break: break-word;
    padding-right: 5px;
  }

  .description[contenteditable] {
    width: 100%;
    margin-left: 40px;
    outline: none;
    box-shadow: inset 0px 0px 10px 0px gray;
    white-space: nowrap;
    overflow: hidden;
  }
  .todoCompleted {
    text-decoration: line-through;
    color: rgb(177, 172, 172);
  }

  .deleteBtn {
    margin-left: auto;
    border: none;
    background-color: inherit;
    opacity: 0;
    /* color: rgb(199, 28, 28); */
    padding-right: 15px;
  }
`;
