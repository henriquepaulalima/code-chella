import Footer from "components/Footer";
import Header from "components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Experience from "views/Experience";
import Main from "views/Main";

function App() {
  return (
    <div>
      <Header />      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
