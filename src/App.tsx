import Footer from "components/Footer";
import Header from "components/Header";
import { Route, Routes } from "react-router-dom";
import Experience from "views/Experience";
import Information from "views/Information/Information";
import Main from "views/Main";
import Sectors from "views/Sectors/Sectors";

function App() {
  return (
    <div>
      <Header />      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
