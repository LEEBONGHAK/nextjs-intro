import Head from 'next/head';

export default function HeadTitle({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
