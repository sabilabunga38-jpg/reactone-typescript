import { useState } from "react";

function Form() {
  const [nama, setNama] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [dataUser, setDataUser] = useState<{
    nama: string;
    email: string;
  }>({
    nama: "",
    email: ""
  });

  const [error, setError] = useState<string>("");


  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (nama === "" || email === "") {
      setError("Nama dan Email wajib diisi!");
      return;
    }

    setError("");

    setDataUser({
      nama: nama,
      email: email
    });

    setNama("");
    setEmail("");
  };


  return (
    <div className="form-card">

      <h2>
        Form Data Pengunjung
      </h2>


      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Masukkan nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />


        <input
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />


        <button type="submit">
          Submit
        </button>


      </form>


      {
        error && (
          <p className="error">
            {error}
          </p>
        )
      }


      {
        dataUser.nama && (
          <div className="user-result">

            <h3>
              Data Berhasil Disimpan 
            </h3>


            <p>
              Nama : {dataUser.nama}
            </p>


            <p>
              Email : {dataUser.email}
            </p>


          </div>
        )
      }


    </div>
  );
}

export default Form;