import React, { useState, useEffect } from 'react';

function InfiniteScrollComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Your API call function
  const fetchData = async () => {
    setLoading(true);
    // Make your API call here and append the response data to existing data
    // Example: const response = await fetch('your-api-endpoint');
    //          const newData = await response.json();
    //          setData(prevData => [...prevData, ...newData]);
    setLoading(false);
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
  
  // Function to handle scroll event
  const handleScroll = () => {
    // Calculate the scroll position
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    const isAtBottom = scrollTop + clientHeight === scrollHeight;

    // Fetch more data if the user has reached the bottom and data is not already loading
    if (isAtBottom && !loading) {
      fetchData();
    }
  };

  return (
    <div
      style={{ height: '400px', overflowY: 'scroll' }}
      onScroll={handleScroll}
    >
      {/* Render your data here */}
      {data.map(item => (
        <div key={item.id}>{item.text}</div>
      ))}

      {/* Render a loading indicator if data is still being fetched */}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default InfiniteScrollComponent;
                
