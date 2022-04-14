import { styled } from '@stitches/react';
import EmptyTable from './EmptyTable';

const FullWidthHeightStatus = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'absolute',
  alignItems: 'center',
  top: '0',
  left: '0',
  transition: 'all 1s ease',
  variants: {
    status: {
      idle: {
        overflow: 'hidden',
      },
      loading: {
        background: 'white',
      },
      success: {
        background: 'none',
        zIndex: '-1',
        overflow: 'auto',
      },
    },
  },
});

const renderStatus = (status) => {
  if (status === 'idle') {
    return <EmptyTable />;
  }
  if (status === 'loading') {
    return <div className="loader">Loading...</div>;
  }
  if (status === 'check') {
    return <p>Check your domain is correct</p>;
  }
  if (status === 'error') {
    return <p>Something went wrong</p>;
  }
};

const Status = ({ status }) => {
  return (
    <FullWidthHeightStatus status={status}>
      {renderStatus(status)}
    </FullWidthHeightStatus>
  );
};

export default Status;
