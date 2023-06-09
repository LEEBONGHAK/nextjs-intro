import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    /**
     * router.push(url, as, options)
     *
     * 클라이언트 측 전환을 처리하며, 이 방법은 next/link가 충분하지 않은 경우에 유용하다.
     * url: UrlObject | String: 탐색할 URL
     * as: UrlObject | String: 브라우저 URL 표시줄에 표시될 경로에 대한 선택적 데코레이터입니다.
     * ```
     * router.push({
     * pathname: '/post/[pid]',
     * query: { pid: post.id },
     * })
     * ```
     *
     * 외부 URL에 대해서는 router.push()를 사용할 필요가 없으며, window.location을 사용하는 것이 더 적합하다.
     * https://nextjs.org/docs/api-reference/next/router#routerpush
     */
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <>
      <div className="container">
        {results?.map((movie) => (
          <div className="movie" key={movie.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
              width={300}
              height={350}
              style={{
                'max-width': '100%',
                'border-radius': '12px',
                transition: 'transform 0.2s ease-in-out',
                'box-shadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
              onClick={() => onClick(movie.id, movie.original_title)}
            />
            <Link
              href={`movies/${movie.original_title}/${movie.id}`}
              key={movie.id}
            >
              <h4>{movie.original_title}</h4>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

/**
 * getServerSideProps
 * page에서 서버 측 랜더링 함수인 getServerSideProps함수를 export하는 경우 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render한다.
 * getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행되지 않는다.
 * https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
 *
 * getServerSideProps를 사용하여 request시 데이터 fetch하기
 * 아래 코드는 request 시 데이터를 fetch하고 결과를 pre-render하는 방법이다. (fetch할 때 오류 시 https를 http로 바꿔주시면 된다.)
 * ``
 * export default function Home({ data }) {
 * 	// 데이터 랜더링
 * }
 * // 매 request마다 실행
 * export async function getServerSideProps() {
 * 	const res = await fetch(`https://.../data`);
 * 	const data = await res.json();
 * 	// props를 통해 page에 data전달
 * 	return { props: { data } }
 * }
 * ```
 * https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time
 *
 * getServerSideProps (타입스크립트와 함께 사용하기)
 * https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props#getserversideprops-with-typescript
 */
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
