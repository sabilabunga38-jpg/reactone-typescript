import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Footer from "./components/Footer";

import sabilaaa from "./assets/sabilaaa.jpeg";

function App() {
  return (
    <>
      <Header />

      <div className="layout">
        <Sidebar />

        <main className="main-content">
          <div className="profile-card">
            <img
              src={sabilaaa}
              alt="Foto Sabila"
              className="profile-image"
            />

            <h1>Sabila Bunga Sakinah</h1>

            <h3>Front-End Developer</h3>

            <p>
              Halo! Selamat datang di website React TypeScript saya.
              Hari ini saya sedang belajar membuat component
              menggunakan React.
            </p>
          </div>

          <Card />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;