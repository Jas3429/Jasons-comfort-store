import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "../components";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default SharedLayout;
