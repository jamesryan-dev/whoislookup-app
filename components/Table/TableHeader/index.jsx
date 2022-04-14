import { styled } from '@stitches/react';
import Title from '../../Title';
import React from 'react';

const Header = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const Row = styled('div', {
  display: 'flex',
  flexdirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: '.8rem',
  borderBottom: '2px solid #F7F7F7',
});

const Search = styled('div', {
  width: '100%',
  marginBottom: '1rem',
  '& input[type="submit"]': {
    padding: '4px 12px',
  },
  variants: {
    inputValidation: {
      error: {
        background: 'blue !important',
      },
    },
  },
});

const ToggleEntries = styled('div', {
  width: '100%',
  display: 'flex',
  flexdirection: 'row',
  alignItems: 'center',
  '& p': {
    margin: 0,
  },
  '& .input-margin': {
    marginRight: '.5rem',
  },
});

const SearchValues = styled('div', {
  width: '100%',
  textAlign: 'right',
  '& .input-margin': {
    marginRight: '.5rem',
  },
});

const options = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
];

const TableHeader = ({
  handleSubmit,
  handleChange,
  domain,
  handleEntriesChange,
  handleSearch,
}) => {
  return (
    <Header>
      <Title title="Please Enter A Domain:" />
      <Search>
        <form onSubmit={(e) => handleSubmit(e, domain)}>
          <label htmlFor="input-search" className="screen-reader-text">
            Search for Domain information
          </label>
          <input
            name="input-search"
            id="input-search"
            placeholder="aoldaily.com"
            onChange={(e) => handleChange(e)}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </Search>
      <Row>
        <ToggleEntries>
          <p className="input-margin">Show</p>
          <label htmlFor="entries" className="screen-reader-text">
            Select number of entries to show in list
          </label>

          <select
            name="entries"
            id="entries"
            className="input-margin"
            onChange={(e) => handleEntriesChange(e)}
          >
            {options.map((option) => {
              const value = option.value;
              return (
                <option
                  key={`option-${value}`}
                  value={value}
                  label={option.label}
                >
                  {value}
                </option>
              );
            })}
          </select>

          <p>entries</p>
        </ToggleEntries>

        <SearchValues>
          <form>
            <label htmlFor="search" className="input-margin">
              Search:
            </label>
            <input
              name="search"
              id="search"
              onChange={(e) => handleSearch(e)}
            ></input>
          </form>
        </SearchValues>
      </Row>
    </Header>
  );
};

export default TableHeader;
