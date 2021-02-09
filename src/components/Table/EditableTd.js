import React, { useState } from "react";
import { StyledInput } from "../../styles";

function EditableTd({ value, keyValue, editMode, onValueChange }) {
  const [loc, setLoc] = useState(value);

  function onChange({ target }) {
    setLoc(target.value);
  }

  function onBlur({ target }) {
    onValueChange(target);
  }

  return (
    <td>
      {editMode && keyValue !== "id" ? (
        <StyledInput value={loc} name={keyValue} type="text" onChange={onChange} onBlur={onBlur} />
      ) : (
        <span>{loc}</span>
      )}
    </td>
  );
}

export default EditableTd;
