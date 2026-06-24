import { Outlet } from "react-router-dom";
import { Header } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <nav>Nav</nav>
      <Outlet />
    </>
  );
}
export default HomeLayout;
