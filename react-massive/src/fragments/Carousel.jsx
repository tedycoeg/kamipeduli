import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Kami Peduli Siap Selalu, Saling Menolong Kapan Saja
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Kami Menyediakan Layanan Relawan Bagi Kalian Yang Ingin
                        Bergabung Bersama Kami
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="/"
                      >
                        Lebih Lanjut
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        MARI SELAMATKAN LEBIH BANYAK NYAWA DENGAN BANTUAN KAMI
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Kami Menyediakan Layanan Berupa Donasi Untuk Orang Yang
                        Membutuhkan
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="/"
                      >
                        Lebih Lanjut
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
