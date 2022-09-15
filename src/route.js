import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import MasterLayout from "./pages/_layout/index";


const RoutesRoot = () => {
  
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};



export default RoutesRoot;
