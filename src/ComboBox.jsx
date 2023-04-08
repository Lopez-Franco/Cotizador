import React from 'react';
import { useRef } from 'react';

function ComboBox({ props, value, onChange }) {
  const selectRef = useRef(null);

  const handleChange = (event) => {
    const selectedOption = selectRef.current.selectedOptions[0];
    onChange(selectedOption.value, selectedOption.textContent);
  };

  return (
    <select value={value} onChange={handleChange} ref={selectRef}>
      <option value="" disabled hidden>--Seleccione una opción--</option>
      {props.map((opt) => (
        <option key={opt.id} value={opt.factor}>
            {opt.type}
        </option>
      ))}
    </select>
  );
}

export default ComboBox;
