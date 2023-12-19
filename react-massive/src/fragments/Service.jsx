import React from "react";

const Service = () => {
  return (
    <>
    
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{"max-width": "500px"}}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Apa yang Kami lakukan
            </div>
            <h1 className="display-6 mb-5">
              Pelajari Lebih Lanjut Apa yang Kami Lakukan Dan Bergabunglah
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-1.png" alt="" />
                <h4 className="mb-3">Relawan</h4>
                <p className="mb-4">
                Relawan adalah seseorang yang secara sukarela menyumbangkan waktu, keterampilan, 
                dan energinya untuk membantu orang lain atau mendukung suatu tujuan atau inisiatif tanpa mengharapkan imbalan finansia
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                  Lebih Lanjut
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-2.png" alt="" />
                <h4 className="mb-3">Donasi</h4>
                <p className="mb-4">
                Donasi kebencanaan merujuk pada sumbangan yang diberikan oleh individu, kelompok, atau organisasi 
                untuk membantu korban atau dampak dari suatu bencana alam atau kejadian darurat lainnya.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                  Lebih Lanjut
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img className="img-fluid mb-4" src="img/icon-3.png" alt="" />
                <h4 className="mb-3">Psikososial</h4>
                <p className="mb-4">
                psikososial bertujuan untuk membantu individu mengatasi tantangan emosional dan mental, seperti traumatisasi akibat bencana, kehilangan, atau krisis lainnya. Ini bisa melibatkan penyediaan konseling untuk memperkuat ketahanan psikologis.
                </p>
                <a className="btn btn-outline-primary px-3" href="">
                  Lebih lanjut
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
