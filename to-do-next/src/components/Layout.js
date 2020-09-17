import Toolbar from './Navigation/Toolbar'
const Layout = ({ children }) => {
  return (
    <div>
     <Toolbar />
      {children}
    </div>
  );
};

export default Layout;