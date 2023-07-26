import React, { useState } from 'react';

const ParentComponent = () => {
  const [checkedCheckboxes, setCheckedCheckboxes] = useState({});

  // Function to handle checkboxes
  const handleCheckboxes = (groupName, uniqueValue) => {
    // Create a copy of the current checkedCheckboxes state
    const newCheckedCheckboxes = { ...checkedCheckboxes };

    // Check if the groupName already exists in the state
    if (!newCheckedCheckboxes[groupName]) {
      // If the groupName doesn't exist, create an empty array for it
      newCheckedCheckboxes[groupName] = [];
    }

    // Check if the uniqueValue exists in the groupName array
    const index = newCheckedCheckboxes[groupName].indexOf(uniqueValue);

    if (index !== -1) {
      // If the uniqueValue exists in the array, remove it
      newCheckedCheckboxes[groupName].splice(index, 1);
    } else {
      // If the uniqueValue doesn't exist in the array, add it
      newCheckedCheckboxes[groupName].push(uniqueValue);
    }

    // Update the state with the new checked checkboxes
    setCheckedCheckboxes(newCheckedCheckboxes);
  };

  // Render your child components with checkboxes and pass the handleCheckboxes function as a prop
  // Example:
  // <ChildComponent1 handleCheckboxes={handleCheckboxes} />
  // <ChildComponent2 handleCheckboxes={handleCheckboxes} />
  // <ChildComponent3 handleCheckboxes={handleCheckboxes} />
  // <ChildComponent4 handleCheckboxes={handleCheckboxes} />
};

export default ParentComponent;

    
