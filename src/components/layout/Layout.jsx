import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-primary-02">
      {/* Frame tampilan HP (responsif penuh) */}
      <div className="relative w-full max-w-[430px] h-[100vh] bg-primary-02 shadow-xl overflow-hidden">
        <div className="h-full overflow-y-auto">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
