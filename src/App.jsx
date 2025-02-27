import "./App.css";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import ModifyProfile from "./components/ModifyProfile";
import { BrowserRouter, Route, Routes } from "react-router";
import PrincipaleHome from "./components/PrincipaleHome";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<PrincipaleHome />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/modifyprofile" element={<ModifyProfile />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
