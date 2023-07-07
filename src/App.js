import React, { useEffect, useRef, useState } from 'react';
import './ResizableDiv.css';

function ResizableDiv() {
  const resizableDivRef = useRef(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Simulating API call with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        const apiResponse = {
          text: 'This is some long text that needs to fit the available space with an ellipsis at the end if necessary.',
        };
        setApiData(apiResponse);
      }, 2000); // Simulating a 2-second delay
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (apiData) {
      const resizableDiv = resizableDivRef.current;

      const adjustTextOnResize = () => {
        const textContent = apiData.text;

        resizableDiv.style.width = ''; // Reset width to auto
        resizableDiv.style.width = resizableDiv.offsetWidth + 'px'; // Apply the current width in pixels

        if (resizableDiv.scrollWidth > resizableDiv.clientWidth) {
          let start = 0;
          let end = textContent.length;

          while (start <= end) {
            const middle = Math.floor((start + end) / 2);
            const truncatedText = textContent.substring(0, middle) + '...';

            resizableDiv.textContent = truncatedText;

            if (resizableDiv.scrollWidth > resizableDiv.clientWidth) {
              end = middle - 1;
            } else {
              start = middle + 1;
            }
          }

          const finalTruncatedText = textContent.substring(0, end) + '...';
          resizableDiv.textContent = finalTruncatedText;
        }
      };

      adjustTextOnResize();

      window.addEventListener('resize', adjustTextOnResize);

      return () => {
        window.removeEventListener('resize', adjustTextOnResize);
      };
    }
  }, [apiData]);

  if (!apiData) {
    return <div>Loading API data...</div>;
  }

  return (
    <div ref={resizableDivRef} className="resizable-div">
      {apiData.text}
    </div>
  );
}

export default ResizableDiv;
