import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Donasi1 = () => {
  const [nominal, setNominal] = useState("");

  const handleRadioChange = (e) => {
    // Extract the numeric part after "Rp."
    const amount = e.target.nextSibling.textContent.split("Rp.")[1].trim();
    setNominal(amount);
  };

  const handleNominal = () => {
    console.log(nominal);
    localStorage.setItem("nominal", nominal);
  };

  // const getNominal = () => {
  //   return localStorage.getItem("nominal");
  // };

  return (
    <>
      <style>
        {`
.my-6{
    margin: 4rem auto;
}

.my-6 h3{
    padding-top: 3rem;
    font-family: "Ubuntu-Bold", Helvetica;
}

.line {
    width: 100%;
    border-top: 2px solid #DDDDDD;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 0 10px;
}

#donasi label{
    border-color: #DDDDDD;
    border-radius: 8px;
    margin: 0.5rem 0;
    padding: 1rem;
    box-shadow: 0px 2px 7px rgba(162, 149, 149, 0.8);
}

#donasi hr {
    margin: 1rem 0 0 0;
    border: none;
    height: 1px;
    color: #000000; 
    background-color: #333;
}`}
      </style>
      <Navbar />
      <div className="tentang"></div>
      <section className="my-6 wow fadeIn" id="donasi" data-wow-delay="0.1s">
        <center>
          <h3>Bagi Saudara Kita yang Membutuhkan</h3>
        </center>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="card rounded-3">
                <div className="card-body mx-1 my-2">
                  <div style={{ position: "relative" }}>
                    <div className="line"></div>
                    <div className="text-muted centered-text">
                      Pilih Nominal Donasi1
                    </div>
                  </div>
                  <div className="pt-3">
                    <div
                      className="btn-group-vertical w-100"
                      role="group"
                      aria-label="Vertical radio toggle button group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="vbtn-radio"
                        id="vbtn-radio1"
                        autocomplete="off"
                        onChange={handleRadioChange}
                      />
                      <label className="btn" for="vbtn-radio1">
                        <img
                          src="img/emote1.png"
                          style={{ width: "3rem", paddingRight: "1rem" }}
                        />
                        Rp. 35.000
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="vbtn-radio"
                        id="vbtn-radio2"
                        autocomplete="off"
                        onChange={handleRadioChange}
                      />
                      <label className="btn" for="vbtn-radio2">
                        <img
                          src="img/emote2.png"
                          style={{ width: "3rem", paddingRight: "1rem" }}
                        />
                        Rp. 50.000
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="vbtn-radio"
                        id="vbtn-radio3"
                        autocomplete="off"
                        onChange={handleRadioChange}
                      />
                      <label className="btn" for="vbtn-radio3">
                        <img
                          src="img/emote3.png"
                          style={{ width: "3rem", paddingRight: "1rem" }}
                        />
                        Rp. 75.000
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="vbtn-radio"
                        id="vbtn-radio4"
                        autocomplete="off"
                        onChange={handleRadioChange}
                      />
                      <label className="btn" for="vbtn-radio4">
                        <img
                          src="img/emote4.png"
                          style={{ width: "3rem", paddingRight: "1rem" }}
                        />
                        Rp. 100.000
                      </label>
                    </div>
                    <hr />
                    <div className="d-flex flex-column py-4">
                      <p className="mb-1 small">Nominal Lainnya</p>
                      <div className="d-flex flex-row align-items-center">
                        <h6 className="mb-0 pe-1">{`Rp.`}</h6>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="numberExample"
                          style={{ width: "100%" }}
                          value={nominal}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="small">Minimum Donasi Rp. 10.000</p>

                  <Link to={"/lanjutDonasi"}>
                    <button
                      className="btn btn-primary btn-lg"
                      style={{ width: "100%", color: "#fff" }}
                      onClick={handleNominal}
                    >
                      Lanjut Donasi
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Donasi1;
