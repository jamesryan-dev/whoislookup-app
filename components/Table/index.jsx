import React, { useState, createContext } from 'react';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
import TableContent from './TableContent';
import useFetch from '../../hooks/useFetch';

const Table = () => {
  const [domain, setDomain] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const {
    fetchData,
    data,
    status,
    resetTable,
    handleEntriesChange,
    showEntries,
  } = useFetch();

  const handleChange = (e) => {
    let inputValue = e.target.value;
    setDomain(inputValue);

    if (inputValue === '') {
      resetTable();
    }
  };

  const handleSubmit = (e, domain) => {
    e.preventDefault();
    fetchData(domain);
  };

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];

    result = data.data?.map((r) =>
      r.filter((row) => {
        let lowerCaseName = row.name.toLowerCase();
        let lowerCaseValue = row.value.toLowerCase();
        if (
          lowerCaseValue.search(value) != -1 ||
          lowerCaseName.search(value) != -1
        ) {
          return row;
        }
      })
    );

    setFilteredData(result);
  };

  const handlePaginationClick = (e, arrayNumber) => {
    setPaginatedData(data.data[arrayNumber]);
  };

  return (
    <>
      <TableHeader
        domain={domain}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleEntriesChange={handleEntriesChange}
        showEntries={showEntries}
        handleSearch={handleSearch}
      />
      <TableContent
        data={data}
        status={status}
        showEntries={showEntries}
        filteredData={filteredData}
        paginatedData={paginatedData}
      />
      <TableFooter
        data={data}
        status={status}
        showEntries={showEntries}
        handlePaginationClick={handlePaginationClick}
      />
    </>
  );
};

export default Table;
