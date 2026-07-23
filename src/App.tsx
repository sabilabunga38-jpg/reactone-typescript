import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import foto from "./assets/sabilaaa.jpeg";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <img
          src={foto}
          alt="Foto Sabila"
          className="profile-image"
        />

        <h1>Sabila Bunga Sakinah</h1>

        <h3>Front-End Developer</h3>

        <p>
          Halo! Saya sedang belajar React menggunakan
          TypeScript dan Vite.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default App;