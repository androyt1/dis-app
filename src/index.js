import React, { useState, useEffect } from 'react';

const Accordion = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.example.com/data?page=${pageNumber}`);
      const responseData = await response.json();

      setData((prevData) => [...prevData, ...responseData]);
      setIsLoading(false);
      setHasMore(responseData.length > 0);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (isLoading || !hasMore) return;

      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasMore]);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <input type="checkbox" value={item.name} /> {item.name}
        </div>
      ))}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !hasMore && <div>No more items to load.</div>}
    </div>
  );
};

export default Accordion;
    
