import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainNavigation from "./components/MainNavigation";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
