import "./App.css";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import ModifyProfile from "./components/ModifyProfile";
import { BrowserRouter, Route, Routes } from "react-router";
import store from "./redux/store/index.js";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modifyprofile" element={<ModifyProfile />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
