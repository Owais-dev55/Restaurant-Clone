import { Outlet } from "react-router-dom";
import Header from "../components/Headerone";

const GeneralLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default GeneralLayout;
