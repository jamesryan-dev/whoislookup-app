import { useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showEntries, setShowEntries] = useState('10');

  const fetchData = (url) => {
    setStatus('loading');

    // Domain Regex Check
    // Sourced from: https://www.codegrepper.com/code-examples/javascript/frameworks/react/validate+url+domain+name+in+js
    const domainRegexCheck = url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    // If the url is not valid don't fire
    if (domainRegexCheck) {
      axios
        .get(`https://otx.alienvault.com/otxapi/indicator/domain/whois/${url}`)
        .then((response) => {
          let reducedData = response.data.data.reduce((result, item, index) => {
            const chunkIndex = Math.floor(index / showEntries);

            if (!result[chunkIndex]) {
              result[chunkIndex] = []; // start a new chunk
            }

            result[chunkIndex].push(item);

            return result;
          }, []);

          let domainInfo = {
            data: reducedData,
            count: response.data.count,
          };

          setData(domainInfo);
          setStatus('success');
        })
        .catch((error) => {
          console.warn(error);
          error ? setStatus('error') : setStatus('idle');
        });
    } else {
      setStatus('check');
      setData(null);
    }
  };

  const resetTable = () => {
    setStatus('idle');
    setData(null);
  };

  const handleEntriesChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setShowEntries(value);
  };

  return {
    data,
    status,
    fetchData,
    resetTable,
    handleEntriesChange,
    showEntries,
  };
};

export default useFetch;
