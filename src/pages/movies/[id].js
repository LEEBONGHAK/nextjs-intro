import { useRouter } from 'next/router';

export default function Detail({ id }) {
  const router = useRouter();

  console.log('------------------------------------');
  console.log(router);
  console.log('------------------------------------');

  return 'detail';
}
