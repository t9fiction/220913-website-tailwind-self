import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { Banner } from "./components/Banner";
import { Offers } from "./components/Offers";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Features />
      <Banner />
      <Offers />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
