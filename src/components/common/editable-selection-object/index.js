import React from "react";

const EditableSelectionObject = ({ name, options, selectedOption, onChange, defaultOption }) => {
  return (
    <React.Fragment>
      <select value={selectedOption} onChange={onChange} name={name}>
        {defaultOption ? <option value="0">Please Select</option> : ""}
        {Object.values(options).map((o, index) => {
          return (
            <option key={o} value={o} name={name}>
              {Object.keys(options)[index]}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default EditableSelectionObject;
