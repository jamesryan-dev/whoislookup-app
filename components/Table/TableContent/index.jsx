import Status from './Status';
import TableData from './TableData';
import { styled } from '@stitches/react';

const TableEl = styled('div', {
  width: '100%',
  height: 'auto',
  minHeight: '45vh',
  position: 'relative',
  overflowY: 'scroll',
});

const Table = ({ data, status, filteredData, showEntries, paginatedData }) => {
  return (
    <TableEl>
      <TableData
        status={status}
        data={data}
        filteredData={filteredData}
        showEntries={showEntries}
        paginatedData={paginatedData}
      />
      <Status status={status} />
    </TableEl>
  );
};

export default Table;
