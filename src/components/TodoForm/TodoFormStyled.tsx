import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 550px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.004);
  position: relative;

  .mainInput {
    width: 550px;
    height: 65px;
    color: rgb(77, 77, 77);
    padding-left: 60px;
    font-size: 22px;
    outline: none;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.03) 0px -2px 1px 0px inset;
    position: relative;
  }

  .mainInput::placeholder {
  font-size: 22px;
  color: rgb(177, 172, 172);
}
`;
