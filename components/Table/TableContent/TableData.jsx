import { styled } from '@stitches/react';

const TableWrapper = styled('div', {
  height: '66vh',
  overflow: 'auto',
});

const EmptyTableEl = styled('table', {
  display: 'table',
  width: '100%',
  height: '100%',
  position: 'relative',
  '& tbody tr:nth-child(odd)': {
    background: '#F8FAFB',
  },
  '& thead': {
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: '.6px',
    fontSize: '.8rem',
    height: '40px',
  },
  '& tr': {
    height: '40px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'left',
    alignItems: 'center',
  },
  '& tr td': {
    width: '100%',
  },
  variants: {
    status: {
      idle: {
        opacity: '0',
      },
      loading: {
        opacity: '0',
      },
      error: {
        opacity: '0',
      },
      success: {
        opacity: '1',
      },
    },
  },
});

const TableData = ({
  data,
  status,
  filteredData,
  showEntries,
  paginatedData,
}) => {
  //Render Rows
  const renderRows = (source, type) => {
    let rows;
    if (type === 'default') {
      let count = 0;
      rows = source.data.map((row, i) => {
        return row.map((r, i) => {
          count++;
          if (count < showEntries) {
            return (
              <tr key={`${r.name}-${i}`}>
                <td>{r.name}</td>
                <td>{r.value}</td>
              </tr>
            );
          }
        });
      });
    } else if (type === 'paginated') {
      return source.map((row, i) => {
        return (
          <tr key={`${row.name}-${i}`}>
            <td>{row.name}</td>
            <td>{row.value}</td>
          </tr>
        );
      });
    } else {
      let count = 0;
      rows = source.map((row, i) => {
        return row.map((r, i) => {
          count++;
          if (count < showEntries) {
            return (
              <tr key={`${r.name}-${i}`}>
                <td>{r.name}</td>
                <td>{r.value}</td>
              </tr>
            );
          }
        });
      });
    }

    return rows;
  };

  const handleData = (data, filteredData, paginatedData) => {
    // Array is defined but has no element
    if (
      (filteredData === undefined && paginatedData === undefined) ||
      (filteredData.length === 0 && paginatedData.length === 0)
    ) {
      return renderRows(data, 'default');
    } else if (filteredData.length >= 1) {
      return renderRows(filteredData, 'filtered');
    } else if (paginatedData.length >= 1) {
      return renderRows(paginatedData, 'paginated');
    }
  };

  return (
    <TableWrapper status={status}>
      <EmptyTableEl cellSpacing="0" border="0" status={status}>
        <thead>
          <tr>
            <td>Record</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          {data !== null ? handleData(data, filteredData, paginatedData) : null}
        </tbody>
      </EmptyTableEl>
    </TableWrapper>
  );
};

export default TableData;
