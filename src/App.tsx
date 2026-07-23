import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import Form from "./components/Form";
import sabilaaa from "./assets/sabilaaa.jpeg";

import cheesecake from "./assets/products/cheesecake.png";
import latte from "./assets/products/latte.png";
import cake from "./assets/products/cake.png";
import soda from "./assets/products/soda.png";
import cupcake from "./assets/products/cupcake.png";
import cookies from "./assets/products/cookies.png";


function App() {

  const produk = [
    {
      nama: "Blueberry Cheesecake",
      harga: "Rp45.000",
      gambar: cheesecake
    },
    {
      nama: "Blue Ocean Latte",
      harga: "Rp35.000",
      gambar: latte
    },
    {
      nama: "Ocean Blue Cake",
      harga: "Rp50.000",
      gambar: cake
    },
    {
      nama: "Blue Lagoon Soda",
      harga: "Rp30.000",
      gambar: soda
    },
    {
      nama: "Sky Blue Cupcake",
      harga: "Rp25.000",
      gambar: cupcake
    },
    {
      nama: "Blueberry Cloud Cookies",
      harga: "Rp20.000",
      gambar: cookies
    }
  ];


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
              Hari ini saya sedang belajar membuat component dan props.
            </p>

          </div>


          <Card />

          <div className="product-list">

            {
              produk.map((item, index) => (

                <ProductCard
                  key={index}
                  nama={item.nama}
                  harga={item.harga}
                  gambar={item.gambar}
                />

              ))
            }

          </div>

          
         <Counter />
         <Form />
        </main>

      </div>


      <Footer />

    </>
  );
}


export default App;