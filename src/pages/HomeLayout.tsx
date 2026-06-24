import { Outlet } from "react-router-dom";
import { Header } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <nav>Nav</nav>
      <div className="align-element">
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;
