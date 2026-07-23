type ProductProps = {
  nama: string;
  harga: string;
  gambar: string;
};


function ProductCard({
  nama,
  harga,
  gambar
}: ProductProps) {

  return (
    <div className="product-card">

      <img
        src={gambar}
        alt={nama}
      />

      <h3>
        {nama}
      </h3>

      <p>
        {harga}
      </p>

    </div>
  );
}


export default ProductCard;