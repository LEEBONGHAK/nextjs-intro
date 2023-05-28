import Head from "next/head";

export default function HeadTitle({ title }) {
  console.log("------------------------------------");
  console.log("title:", title);
  console.log(typeof title);
  console.log("------------------------------------");
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
