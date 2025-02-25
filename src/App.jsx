import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import store from "./redux/store/MyFooterStore";

function App() {
  return (
    <>
      <MyNavbar />
      <Home />

      <Provider store={store}>
        <MyFooter />
      </Provider>
    </>
  );
}

export default App;
