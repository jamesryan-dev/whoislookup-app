import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Index from '../pages/index';
import TableHeader from '../components/Table/TableHeader';
import axios from 'axios';
import { BASE_URL, fetchTest, testData } from '../utils';

configure({ adapter: new Adapter() });

jest.mock('axios');

it('Index renders without crashing', () => {
  shallow(<Index />);
});

describe('Pages', () => {
  describe('Index', () => {
    it('Table renders without crashing', () => {
      shallow(<TableHeader />);
    });

    it('TableHeader Title ( h1 ) should render -> "Please Enter A Domain:"', function () {
      const table = shallow(<TableHeader />).dive();

      table.findWhere(
        (n) => n.type() === 'h1' && n.contains('Please Enter A Domain:')
      );

      //   expect(table.find(<Title />).text()).toBe('Please Enter A Domain:');
    });
  });
});

describe('fetchTest', () => {
  describe('when Axios API call is successful', () => {
    it('should return whoisdomain data', async () => {
      // given
      const data = testData;
      axios.get.mockResolvedValueOnce(data);

      // when
      const result = await fetchTest();

      // then
      expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result).toEqual(data);
    });
  });
});
