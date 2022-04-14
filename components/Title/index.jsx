import { styled } from '@stitches/react';
import React from 'react';

const TitleEl = styled('div', {
  width: '100%',
  borderBottom: '2px solid lightgrey',
  marginBottom: '.8rem',
});

const Title = ({ title }) => {
  return (
    <TitleEl>
      <h1>{title}</h1>
    </TitleEl>
  );
};

export default Title;
