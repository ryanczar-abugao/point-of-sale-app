import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../providers/AuthContext";

const Layout = () => {
  const auth = useAuth();
  const isAuthenticated = auth.isAuthenticated ?? false;

  return (
    <>
      <nav>
        {isAuthenticated && <Navbar />}
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
