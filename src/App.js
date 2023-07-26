import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 10;
  const specificCheckboxId = 'your_specific_checkbox_id'; // Get this value from the URL parameters

  // Function to search the API for the specific data
  const searchSpecificData = () => {
    // Implement your API search logic here
    // Example using fetch API:
    fetch(`/api/data/${specificCheckboxId}`)
      .then((response) => response.json())
      .then((specificData) => {
        if (specificData) {
          // Specific checkbox data found, append it at the top
          setData([specificData, ...data]);
        }
        // Regardless of the result, make the regular request for pagination
        fetchMoreData();
      })
      .catch((error) => {
        // Handle the error if needed
        console.error('Error searching for specific data:', error);
        // Still make the regular request for pagination
        fetchMoreData();
      });
  };

  // Function to fetch more data from the API
  const fetchMoreData = () => {
    // Implement your API fetch logic here to get the next chunk of data
    // Example using fetch API:
    fetch(`/api/data?start=${data.length}&limit=${ITEMS_PER_PAGE}`)
      .then((response) => response.json())
      .then((newData) => {
        if (newData.length === 0) {
          // No more data available, set hasMore to false
          setHasMore(false);
        } else {
          // Append the new data to the existing data array
          setData([...data, ...newData]);
        }
      })
      .catch((error) => {
        // Handle the error if needed
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Search for the specific data on component mount
    searchSpecificData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {/* Render your checkboxes here */}
      {data.map((item) => (
        <div key={item.id}>
          <input type="checkbox" id={item.id} checked={item.id === specificCheckboxId} />
          <label htmlFor={item.id}>{item.label}</label>
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default MyComponent;
          
