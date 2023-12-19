import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

const Psikososial = () => {
  return (
    <>
    
      <Navbar />
      <div className="container-fluid p-0 mb-5 container1">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className=" container-fluid ellipse">
            <img src="img/EllipsePsikososial.svg" alt="" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/bg_psikososial.png" alt="Image" />
              <div className="carousel-caption" style={{ background: "none" }}>
                <div className="container-xxl">
                  <div className="row justify-content-center">
                    <div className="col-lg-12 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown header1">
                        Apakah Kondisimu Sedang Tidak Baik - Baik Saja?
                      </h1>
                      <h1 className="display-4 text-white my-5 animated slideInDown header2">
                        Jangan Terlalu Lama Dibiarkan Ya, Konsultasi Sekarang Di
                        KamiPeduli
                      </h1>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="relawan.html"
                      >
                        Cari Tahu
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
        </div>
      </div>

      <div className="mx-auto d-flex justify-content-center">
        <p className="d-flex justify-content-center header3">Informasi</p>
      </div>
      <div className="mx-auto d-flex justify-content-center">
        <p className="d-flex justify-content-center header4">Psikososial</p>
      </div>

      <div className="container-fluid py-5 section">
        <div className="container-xxl">
          <img src="img/iconpsiko.png" className="iconpsiko" />
          <div className="row g-5 justify-content-between">
            <div
              className="col-lg-5 wow fadeInUp bg-light border-bottom border-5 border-primary rounded"
              data-wow-delay="0.1s"
            >
              <div className="p-4 mb-4">
                <h1 className="mt-3 header1">Apa itu Psikososial ?</h1>
                <p className="text-dark mb-2">
                  Psikososial adalah cara kita berhubungan dengan pikiran dan
                  perasaan kita sendiri (aspek psikologis) dan bagaimana kita
                  berinteraksi dengan orang lain serta lingkungan di sekitar
                  kita (aspek sosial). Jadi, ketika kita bicara tentang
                  kesehatan psikososial, kita berbicara tentang bagaimana
                  kesehatan pikiran dan perasaan kita berdampak pada cara kita
                  hidup sehari-hari dan bagaimana kita bersosialisasi dengan
                  orang lain. Ini adalah cara untuk melihat kesejahteraan kita
                  secara menyeluruh, baik dari segi pikiran maupun hubungan
                  sosial kita.
                </p>
              </div>
            </div>
            <div
              className="col-lg-5 wow fadeInUp bg-light border-bottom border-5 border-primary rounded"
              data-wow-delay="0.5s"
            >
              <div className="p-4 mb-4">
                <h1 className="mt-3 header2">Bencana dan Psikososial</h1>
                <p className="text-dark mb-2">
                  Dalam kesehatan psikososial, penting untuk memahami bahwa
                  kebencanaan tidak hanya memengaruhi fisik dan materi, tetapi
                  juga dapat memberikan dampak signifikan pada kesejahteraan
                  mental dan emosional individu. Beberapa orang mungkin
                  mengalami gejala stres pasca-trauma, kecemasan, atau depresi
                  setelah mengalami atau menyaksikan kejadian traumatik.
                  Pembicaraan terbuka dapat membantu seseorang untuk
                  mengidentifikasi dan mengelola dampak ini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 section1">
        <div className="container-xxl">
          <div className="row g-5">
            <div
              className="col-lg-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ marginTop: "2%" }}
            >
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/pemulihan-trauma-anak.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="garis1"></div>
                <h1 className="mt-3">Pentingnya Mendiskusikan Kebencanaan</h1>
                <p className="mb-5">
                  Kebencanaan adalah kejadian yang dapat memiliki dampak serius
                  pada kehidupan individu dan masyarakat. Mendiskusikan
                  kebencanaan adalah langkah penting dalam memahami, mengelola,
                  dan mengatasi dampak psikososial yang mungkin terjadi akibat
                  peristiwa tersebut. Pada tingkat personal, kebencanaan dapat
                  memicu stres, kecemasan, dan bahkan trauma, dan pembicaraan
                  terbuka tentang pengalaman ini dapat menjadi langkah awal
                  menuju pemulihan.
                </p>
                <a className="btn btn-primary py-2 px-3 me-3" href="">
                  Chat Sekarang
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
                <div className="garis2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 section2">
        <div className="container-xxl">
          <div
            className="row g-5"
            style={{ display: "flex", flexWrap: "wrap-reveserse" }}
          >
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="garis1"></div>
                <h1 className="mt-3">Dukungan Profesional</h1>
                <p className="mb-5">
                  Penting untuk diingat bahwa ketika seseorang merasa kesulitan
                  mengatasi dampak psikososial kebencanaan, dukungan profesional
                  mungkin diperlukan. Psikolog, konselor, atau pekerja sosial
                  dapat memberikan bantuan ahli dalam membantu seseorang
                  mengelola stres dan trauma yang mungkin muncul.
                </p>
                <div className="garis2"></div>
              </div>
            </div>
            <div
              className="col-lg-7 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ marginTop: "2%" }}
            >
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/dukunganProfesional.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Psikososial;
