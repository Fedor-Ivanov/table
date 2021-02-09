import React, { useState } from "react";
import { ButtonTdWrapper, StyledBtn, StyledTr } from "../../styles";
import EditableTd from "./EditableTd";

function Row({ item, onDelete, onUpdate, oddRowBck, evenRowBck, editableColor }) {
  const [editMode, setEditMode] = useState(false);

  const onSaveRow = (row) => {
    onUpdate(row);
    setEditMode((prev) => !prev);
  };

  const [row, setRow] = useState(item);

  function onChange(target) {
    setRow({
      ...row,
      [target.name]: target.value,
    });
  }

  return (
    <StyledTr
      oddRowBck={oddRowBck}
      evenRowBck={evenRowBck}
      editableColor={editableColor}
      editable={editMode}
      key={`tr-${row.id}`}
    >
      {Object.entries(row).map(([key, value], index) => {
        return <EditableTd value={value} key={index} keyValue={key} editMode={editMode} onValueChange={onChange} />;
      })}

      <ButtonTdWrapper>
        {editMode ? (
          <StyledBtn type="button" onClick={() => onSaveRow(row)}>
            Save
          </StyledBtn>
        ) : (
          <StyledBtn type="button" onClick={() => setEditMode((prev) => !prev)}>
            Edit
          </StyledBtn>
        )}

        <StyledBtn disabled={editMode} onClick={() => onDelete(item.id)}>
          Delete
        </StyledBtn>
      </ButtonTdWrapper>
    </StyledTr>
  );
}

export default Row;
