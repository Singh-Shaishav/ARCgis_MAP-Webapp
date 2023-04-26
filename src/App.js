import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Header title="Maps.com" />
      <Routes >
        <Route exact path="/Map" Component={() => {
          return (
            <>
              <Map />
            </>)
        }} />
        <Route exact path="/About" Component={() => {
          return (
            <>
              <About />
            </>)
        }} />
        <Route exact path="/Contact" Component={() => {
          return (
            <>
              <Contact />
            </>)
        }} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
