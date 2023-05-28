import NavBar from "@/components/NavBar";

/**
 * nextjs는 렌더링할 페이지 컴포넌트를 Component와 Component에서 사용하는 pageProps를 인자로 받는 _app.js 컴포넌트를 제일 먼저 렌더링 한다.
 * HOC 패턴으로 모든 페이지에 적용할 기능이나 스타일을 지정할 수 있다.
 * 다른 곳에서는 global.css를 import 할 수 없지만, _app.js에서는 가능
 */
export default function App({Component, pageProps}) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}