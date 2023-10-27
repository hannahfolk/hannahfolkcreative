import Nav from "@components/nav/nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
