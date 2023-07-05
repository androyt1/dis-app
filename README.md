
function getQueryParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {};

  for (let param of searchParams.entries()) {
    const [key, value] = param;
    params[key] = value;
  }

  return params;
}

function FilterPage() {
  const queryParams = getQueryParams();
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  useEffect(() => {
    const checkboxValues = Object.keys(queryParams).filter((key) => queryParams[key] === 'true');
    setSelectedCheckboxes(checkboxValues);
  }, []);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes((prevCheckboxes) => [...prevCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes((prevCheckboxes) => prevCheckboxes.filter((value) => value !== checkboxValue));
    }
  };

  // Rest of the component code
}
