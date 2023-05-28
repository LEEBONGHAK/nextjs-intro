import NavBar from "./NavBar";

// children : reactjs가 제공하는 prop으로서, 하나의 compnent를 또 다른 component안에 넣을 때 사용할 수 있다.
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
