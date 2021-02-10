import styled, { css } from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  padding: 30px;
  max-height: 90vh;
  flex-direction: column;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    border: 1px solid black;
    padding: ${({ cellPadding }) => (cellPadding ? `${cellPadding}px` : `10px`)};
  }

  td {
    word-break: break-all;
  }

  th {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 10px 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1rem;
  background-color: transparent;
  outline: none;
  border-bottom: 1px solid black;
`;

export const StyledTr = styled.tr`
  width: 100%;
  transition: 0.2s;

  ${({ editable }) =>
    editable &&
    css`
      background-color: ${({ editableColor }) => (editableColor ? `${editableColor}!important` : "#90b2de!important")};
    `}

  &:nth-child(odd) {
    background-color: ${({ oddRowBck }) => (oddRowBck ? oddRowBck : `#ececec`)};
  }

  &:nth-child(even) {
    background-color: ${({ evenRowBck }) => (evenRowBck ? evenRowBck : `#ffffff`)};
  }
`;

export const ButtonTdWrapper = styled.td`
  text-align: center;

  button {
    cursor: pointer;
  }

  button + button {
    margin: 5px;
  }
`;

export const StyledBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;
  outline: none;
  transition: 0.2s;
  &:hover {
    border-radius: 10px;
  }
`;
