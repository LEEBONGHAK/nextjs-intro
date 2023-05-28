import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();
  console.log('------------------------------------');
  console.log(router);
  console.log('------------------------------------');

  const [title, id] = params || [];

  return (
    <div>
      <h4>{title && title !== '' ? title : 'Loading...'}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
