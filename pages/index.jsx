import Head from 'next/head';
import Table from '../components/Table';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Whoislookup App</title>
        <meta name="description" content="Whoislookup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Table />
    </>
  );
}
