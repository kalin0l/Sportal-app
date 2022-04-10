
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListPage from "./pages/ListPage";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/articles" element={<ListPage />} />
      </Routes>
      <Routes>
        <Route path="/article/1" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
