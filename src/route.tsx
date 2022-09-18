import { Route, Routes, HashRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateContentPage } from "./pages/sample/createContentPage";
import { MasterLayout } from "./pages/_layout/masterLayout";

export const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sample/create-content-page" element={<CreateContentPage />} />
            </Routes>
          </MasterLayout>
    </HashRouter>
  );
};
