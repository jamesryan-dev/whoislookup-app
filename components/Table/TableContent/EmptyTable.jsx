import { styled } from '@stitches/react';

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
  '& td': {
    width: '100%',
  },
  '&::after': {
    content: '',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
    background: 'white',
    opacity: '.5',
  },
});

const EmptyTable = () => {
  return (
    <EmptyTableEl cellSpacing="0" border="0">
      <thead>
        <tr>
          <td>Record</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </EmptyTableEl>
  );
};

export default EmptyTable;
