/** @type {import('next').NextConfig} */
/**
 * next.config.js
 * Next.js에서 커스텀 설정을 하기 위해서는 프로젝트 디렉터리의 루트(package.json 옆)에 next.config.js 또는 next.config.mjs 파일을 만들 수 있습니다. next.config.js는 JSON 파일이 아닌 일반 Node.js 모듈입니다.
 * Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않습니다.
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 * Redirects (URL변경됨)
 * Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있습니다. Redirect을 사용하려면 next.config.js에서 redirects 키를 사용할 수 있습니다
 *
 * redirects은 source, destination 및 permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수입니다.
 * source: 들어오는 request 경로 패턴 (request 경로)
 * destination: 라우팅하려는 경로 (redirect할 경로)
 * permanent: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code를 사용합니다.
 * https://nextjs.org/docs/api-reference/next.config.js/redirects
 *
 * Rewrites (URL변경되지 않음)
 * Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있습니다.
 * Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 합니다. 반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시합니다.
 * https://nextjs.org/docs/api-reference/next.config.js/rewrites
 *
 * Movie Poster Path
 * https://image.tmdb.org/t/p/w500/${movie.poster_path}
 *
 * 주의! fetch할 때 /api/movies 또는 http://localhost:3000/api/movies 둘 다 가능하지만 http가 아닌 https로 fetch하게 되면 오류가 발생합니다.
 */

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-sexy-blog/:path*',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};

module.exports = nextConfig;
