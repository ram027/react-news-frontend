import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./Components/Dashboard/Navbar";
import store from "./Redux/store";
import Home from "./Components/Dashboard/Home";
import Business from "./Components/Dashboard/Business";
import Health from "./Components/Dashboard/Health";
import Science from "./Components/Dashboard/Science";
import Tech from "./Components/Dashboard/Tech";
import World from "./Components/Dashboard/World";
import Sports from "./Components/Dashboard/Sports";
import Footer from "./Components/Dashboard/Footer";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/health" element={<Health />} />
          <Route path="/science" element={<Science />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/world" element={<World />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
