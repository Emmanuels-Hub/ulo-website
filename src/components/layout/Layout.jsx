import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Layout — wraps every page with Navbar + Footer.
 * Route content renders via <Outlet />.
 */
const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
