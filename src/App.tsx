// import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="parent">
      <NavBar />
      <div className="container">
        <div className="cardLists"></div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
