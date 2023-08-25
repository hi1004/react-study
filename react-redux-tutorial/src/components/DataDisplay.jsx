const DataDisplay = ({ data, loading, error, renderData }) => {
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <>{renderData(data)}</>;
};

export default DataDisplay;
