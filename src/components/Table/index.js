import React from "react";
import Row from "./Row";
import { ButtonWrapper, StyledBtn, StyledTable } from "../../styles";

function Table({ data, onDelete, onAddNewRow, onUpdate, oddRowBck, evenRowBck, editableColor, cellPadding }) {
  return (
    <>
      <ButtonWrapper>
        <StyledBtn type="button" onClick={() => onAddNewRow()}>
          Add new row
        </StyledBtn>
      </ButtonWrapper>
      <StyledTable cellPadding={cellPadding}>
        <thead>
          <tr>
            {data.headers.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((item) => {
            return (
              <Row
                key={item.id}
                item={item}
                onDelete={onDelete}
                onUpdate={onUpdate}
                oddRowBck={oddRowBck}
                evenRowBck={evenRowBck}
                editableColor={editableColor}
              />
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
}

export default Table;
