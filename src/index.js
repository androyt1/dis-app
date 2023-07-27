import React from 'react';

const CustomComponent = ({ componentId, checkboxesData, checkedItems, onCheckboxChange }) => {
  return (
    <div>
      {checkboxesData.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            checked={checkedItems[item.id] || false}
            onChange={(e) => onCheckboxChange(componentId, item.id, e.target.checked)}
          />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CustomComponent;
