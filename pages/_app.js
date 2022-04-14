import '../styles/globals.css';
import globalStyles from '../styles/globalStyles';
import React from 'react';

function MyApp({ Component, pageProps }) {
  globalStyles();
  return (
    <div className="wrap">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
