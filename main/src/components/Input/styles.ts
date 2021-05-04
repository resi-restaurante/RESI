import styled, { css } from 'styled-components';
import Tooltip from '../tooltip/index';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #6c6c6c;
  border: 2px solid #fff;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #ff6865;
      border-color: #ff6865;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff6865;
    `}
  input {
    color: #000;
    flex: 1;
    background: transparent;
    border: 0;
    border-color: #fff;
    height: 20px;
    &::placeholder {
      color: ff000ff;
    }
    &:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
