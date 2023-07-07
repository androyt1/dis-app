import React, { useEffect, useRef } from 'react';
import './ResizableDiv.css';

function ResizableDiv() {
  const resizableDivRef = useRef(null);

  useEffect(() => {
    const resizableDiv = resizableDivRef.current;
    const textContent = resizableDiv.textContent;
    
    const adjustTextOnResize = () => {
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
  }, []);

  return (
    <div ref={resizableDivRef} className="resizable-div">
      This is some long text that needs to fit the available space with an ellipsis at the end if necessary.
    </div>
  );
}

export default ResizableDiv;
