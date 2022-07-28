import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Index";
import Cart from "./pages/Cart/Index";
import Home from "./pages/Home/Index";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
