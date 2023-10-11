import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page404 from "./views/Page404/Page404";
import "./sass/global.scss";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Page404 />} />
        <Route path="home" element={<Page404 />} />
        <Route path="destination" element={<Page404 />} />
        <Route path="crew" element={<Page404 />} />
        <Route path="technology" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
