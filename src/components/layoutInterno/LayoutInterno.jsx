import { Navbar } from "../navbar/Navbar";
import SideBar from "../sideBar/sideBar";

const LayoutInterno = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <SideBar />
    </>
  );
};

export default LayoutInterno;
