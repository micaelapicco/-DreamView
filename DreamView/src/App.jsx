// import Carousel from "./components/Carousel";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <header>El jony week</header>
      <main>
        <button>comprar el ticke</button>
        <button>dejame la reseña</button>
        <section className="movieList">
          <Movies></Movies>
        </section>
        {/* <Carousel></Carousel> */}
      </main>
    </>
  );
}

export default App;
