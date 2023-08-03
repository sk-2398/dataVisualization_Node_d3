import React from 'react';

const Filter = ({ options, onChange }) => {
  return (
    <div>
      <select onChange={onChange}>
        <option value="">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
