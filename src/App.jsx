import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
