import React, { useState, useEffect } from 'react';

function InfiniteScrollComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Your API call function
  const fetchData = async () => {
    setLoading(true);
    // Make your API call here with the page number
    // Example: const response = await fetch(`your-api-endpoint?page=${page}`);
    //          const newData = await response.json();
    //          setData(prevData => [...prevData, ...newData]);
    setPage(prevPage => prevPage + 1);
    setLoading(false);
  };

  // useEffect hook to fetch data when the component mounts and when the page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  // Function to handle scroll event
  const handleScroll = event => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    // Calculate if the user has reached the top or bottom of the div
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight === scrollHeight;

    // Fetch previous page if the user has reached the top and the current page is not the first page
    if (isAtTop && page > 1 && !loading) {
      setPage(prevPage => prevPage - 1);
    }

    // Fetch next page if the user has reached the bottom and data is not already loading
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
