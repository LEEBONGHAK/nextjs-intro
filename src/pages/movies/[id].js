import { useRouter } from 'next/router';

export default function Detail({ id }) {
  const router = useRouter();

  console.log('------------------------------------');
  console.log(router);
  console.log('------------------------------------');

  return (
    <div>
      <h4>{router.query.title || 'Loading...'}</h4>
    </div>
  );
}
