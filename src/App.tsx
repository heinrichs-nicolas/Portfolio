import BackGround from "./components/BackGround";
import CardLists from "./components/CardLists";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="parent">
      <BackGround />
      <NavBar />

      <div className="container">
        <CardLists />
      </div>
      <Footer />
    </div>
  );
}

export default App;
