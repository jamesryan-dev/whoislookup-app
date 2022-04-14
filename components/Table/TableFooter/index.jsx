import { styled } from '@stitches/react';

const TableFooterEl = styled('div', {
  width: '100%',
  display: 'flex',
  flexdirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity 1s ease',
  '& p': {
    fontWeight: '500',
    textTransform: 'uppercase',
    fontSize: '0.75rem',
    letterSpacing: '.8px',
    color: '#777777',
  },
  variants: {
    status: {
      idle: {
        opacity: 0.333,
      },
    },
  },
});

const Pagination = styled('div', {
  textAlign: 'right',
  '& span': {
    marginRight: '1rem',
  },
  '& :last-of-type': {
    marginRight: 0,
  },
  '& span': {
    color: '#5B85BC',
    fontWeight: '500',
    fontSize: '0.875rem',
    marginRight: '.6rem',
    '&:last-of-type': {
      marginRight: '0',
    },
  },
});

const Showing = styled('p', {
  '& span': {
    paddingLeft: '.2rem',
  },
});

const dataLength = (data, type) => {
  if (data !== null && type === 'total') {
    return data.related.length;
  } else if (data !== null && type === 'count') {
    return data.count;
  } else if (data !== null && type === 'single') {
    return '1';
  } else {
    return '0';
  }
};

const TableFooter = ({ data, status, showEntries, handlePaginationClick }) => {
  let count = data != null ? data.count : null;
  let pages = Math.ceil(count / showEntries);
  let arrayPages = [...Array(pages)];

  const handlePagination = () => {
    let pageNumbers = arrayPages.map((page, i) => {
      let pageNumber = i + 1;
      let arrayNumber = i;
      return (
        <span
          onClick={(e) => handlePaginationClick(e, arrayNumber)}
          key={`tablePagination-${i}`}
        >
          {pageNumber}
        </span>
      );
    });
    return <>{pageNumbers}</>;
  };

  const handlePaginationNext = () => {
    pages == 1 ? null : <span>Next</span>;
  };
  return (
    <TableFooterEl status={status}>
      <Showing>
        Showing<span>{status == 'idle' ? 0 : dataLength(data, 'single')}</span>{' '}
        to
        <span>{status == 'idle' ? 0 : showEntries}</span> of
        <span>{status == 'idle' ? 0 : dataLength(data, 'count')}</span>
        <span>Entries</span>
      </Showing>
      <Pagination>
        {handlePagination()} {handlePaginationNext()}
      </Pagination>
    </TableFooterEl>
  );
};

export default TableFooter;
