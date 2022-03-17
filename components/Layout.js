import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrap">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
