import React, { useState } from 'react';
import CustomComponent from './CustomComponent';

const ParentComponent = () => {
  // State to track the checked states of checkboxes
  const [component1Checked, setComponent1Checked] = useState({});
  const [component2Checked, setComponent2Checked] = useState({});
  const [component3Checked, setComponent3Checked] = useState({});
  const [component4Checked, setComponent4Checked] = useState({});

  // Function to update the checked state of checkboxes for each component
  const handleCheckboxChange = (componentId, itemId, isChecked) => {
    switch (componentId) {
      case 1:
        setComponent1Checked((prevState) => ({ ...prevState, [itemId]: isChecked }));
        break;
      case 2:
        setComponent2Checked((prevState) => ({ ...prevState, [itemId]: isChecked }));
        break;
      case 3:
        setComponent3Checked((prevState) => ({ ...prevState, [itemId]: isChecked }));
        break;
      case 4:
        setComponent4Checked((prevState) => ({ ...prevState, [itemId]: isChecked }));
        break;
      default:
        break;
    }
  };

  // Function to get the total number of checkboxes and the sum total of checked checkboxes for each component
  const getCheckboxStats = (componentId) => {
    let totalCheckboxes = 0;
    let totalChecked = 0;

    switch (componentId) {
      case 1:
        Object.values(component1Checked).forEach((isChecked) => {
          totalCheckboxes++;
          if (isChecked) totalChecked++;
        });
        break;
      case 2:
        Object.values(component2Checked).forEach((isChecked) => {
          totalCheckboxes++;
          if (isChecked) totalChecked++;
        });
        break;
      case 3:
        Object.values(component3Checked).forEach((isChecked) => {
          totalCheckboxes++;
          if (isChecked) totalChecked++;
        });
        break;
      case 4:
        Object.values(component4Checked).forEach((isChecked) => {
          totalCheckboxes++;
          if (isChecked) totalChecked++;
        });
        break;
      default:
        break;
    }

    return { totalCheckboxes, totalChecked };
  };

  return (
    <div>
      <CustomComponent
        componentId={1}
        checkboxesData={/* Your data for component 1 from API response */}
        checkedItems={component1Checked}
        onCheckboxChange={handleCheckboxChange}
      />
      <CustomComponent
        componentId={2}
        checkboxesData={/* Your data for component 2 from API response */}
        checkedItems={component2Checked}
        onCheckboxChange={handleCheckboxChange}
      />
      <CustomComponent
        componentId={3}
        checkboxesData={/* Your data for component 3 from API response */}
        checkedItems={component3Checked}
        onCheckboxChange={handleCheckboxChange}
      />
      <CustomComponent
        componentId={4}
        checkboxesData={/* Your data for component 4 from API response */}
        checkedItems={component4Checked}
        onCheckboxChange={handleCheckboxChange}
      />

      {/* Display checkbox stats */}
      <div>
        Component 1 - Total Checkboxes: {getCheckboxStats(1).totalCheckboxes}, Checked: {getCheckboxStats(1).totalChecked}
      </div>
      <div>
        Component 2 - Total Checkboxes: {getCheckboxStats(2).totalCheckboxes}, Checked: {getCheckboxStats(2).totalChecked}
      </div>
      <div>
        Component 3 - Total Checkboxes: {getCheckboxStats(3).totalCheckboxes}, Checked: {getCheckboxStats(3).totalChecked}
      </div>
      <div>
        Component 4 - Total Checkboxes: {getCheckboxStats(4).totalCheckboxes}, Checked: {getCheckboxStats(4).totalChecked}
      </div>
    </div>
  );
};

export default ParentComponent;
