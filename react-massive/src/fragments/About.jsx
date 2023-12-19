import React from "react";
import Button from "../components/button/button";

const About = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/about-1.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src="img/about-2.jpg"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Tentang kami
                </div>
                <h1 className="display-6 mb-5">
                  Kami Membantu Orang - Orang Yang Membutuhkan Bantuan
                  Kebencanaan
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Dengan menyediakan fitur relawan dan donasi kami siap
                    membantu para korban bencana alam
                  </p>
                  <span className="text-primary">Kami Peduli</span>
                </div>
                <p className="mb-5">
                  Dengan mendaftarkan diri kalian menjadi sukarelawan maka
                  kalian dapat membantu daerah-daerah yang terkena dampak
                  bencana alam. Daftarkan diri kalian
                </p>
                <Button variant="btn-primary py-2 px-3 me-3">
                  Lebih lanjut
                </Button>
                <Button variant="btn-outline-primary py-2 px-3 me-3">
                  Hubungi kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
