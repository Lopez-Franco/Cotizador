import React from 'react';

function ComboBox({ props, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="">--Seleccione una opción--</option>
      {props.map((opt) => (
        <option key={opt.id} value={opt.factor}>
            {opt.type}
        </option>
      ))}
    </select>
  );
}



// function ComboBox({ props }) {

//     const options = props.map((opt) => (
//         <option key={opt.id} value={opt.factor}>
//             {opt.type}
//         </option>
//     ));

//     return (
//         <div>
//             <select>{options}</select>
//         </div>
//     );
// }

export default ComboBox;
