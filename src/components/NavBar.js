import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import HeadTitle from './HeadTitle';

export default function NavBar() {
  const getHeaderTitle = (router) => {
    const path = {
      '/': 'Home',
      '/about': 'About',
    };

    if (router.pathname === '/movies/[...params]') {
      const [title, id] = router.query.params;
      return title && title !== '' ? title : 'Untitled';
    }
    return path[router.pathname];
  };

  const router = useRouter();
  console.log('------------------------------------');
  console.log(router);
  console.log('------------------------------------');

  return (
    <>
      <HeadTitle title={getHeaderTitle(router)} />
      <nav>
        <Image
          src="/vercel.svg"
          alt="vercel icon image"
          width={100}
          height={100}
        />
        <div>
          <Link className={router.pathname === '/' ? 'active' : ''} href="/">
            Home
          </Link>
          <Link
            className={router.pathname === '/about' ? 'active' : ''}
            href="/about"
          >
            About
          </Link>
        </div>
        <style jsx>{`
          nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          img {
            max-width: 100px;
            margin-bottom: 5px;
          }
          nav a {
            font-weight: 600;
            font-size: 18px;
          }
          .active {
            color: tomato;
          }
          nav div {
            display: flex;
            gap: 10px;
          }
        `}</style>
      </nav>
    </>
  );
}
