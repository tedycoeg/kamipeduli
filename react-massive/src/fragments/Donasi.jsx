import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../css/info_donasi.css";
const InfoDonasi = () => {
  const handlDonasi = () => {
    window.location.href = "/donasi";
  };
  let isLiked = false;
  let isDisliked = false;

  const toggleLike1 = () => {
    const likeBtn = document.getElementById("likeBtn1");
    const likeCount = document.getElementById("likeCount1");

    if (isLiked) {
      isLiked = false;
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
      likeBtn.classList.remove("bi-heart-fill");
      likeBtn.classList.add("bi-heart");
    } else {
      isLiked = true;
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      likeBtn.classList.remove("bi-heart");
      likeBtn.classList.add("bi-heart-fill");
    }
  };
  const toggleLike2 = () => {
    const likeBtn = document.getElementById("likeBtn2");
    const likeCount = document.getElementById("likeCount2");

    if (isLiked) {
      isLiked = false;
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
      likeBtn.classList.remove("bi-heart-fill");
      likeBtn.classList.add("bi-heart");
    } else {
      isLiked = true;
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      likeBtn.classList.remove("bi-heart");
      likeBtn.classList.add("bi-heart-fill");
    }
  };
  const toggleLike = () => {
    const likeBtn = document.getElementById("likeBtn");
    const likeCount = document.getElementById("likeCount");

    if (isLiked) {
      isLiked = false;
      likeCount.textContent = parseInt(likeCount.textContent) - 1;
      likeBtn.classList.remove("bi-heart-fill");
      likeBtn.classList.add("bi-heart");
    } else {
      isLiked = true;
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
      likeBtn.classList.remove("bi-heart");
      likeBtn.classList.add("bi-heart-fill");
    }
  };

  return (
    <>
      <style></style>
      <Navbar />
      <div className="tentang"></div>
      <div className="container-xxl bg-light py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Donasi
                </div>
                <h1 className="display-6 mb-5">
                  Kami Membantu Orang-Orang Yang Terdampak Bencana Alam
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Dengan menyediakan fitur donasi kami siap membantu para
                    korban bencana alam
                  </p>
                  <span className="text-primary">Kami Peduli</span>
                </div>
                <p className="mb-5">
                  Dengan memberikan sumbangan, kita dapat membantu memulihkan
                  daerah yang terdampak bencana alam. Mari berdonasi sekarang
                  untuk membantu mereka yang membutuhkan
                </p>

                <Link
                  to={"/donasi"}
                  className="btn btn-primary py-2 px-3 me-3"
                  href="/donasi"
                >
                  Donasi Sekarang
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/infodonasi.png"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 py-5 causes">
        <div className="container-xxl py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div
              className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-"
              style={{ fontSize: "large" }}
            >
              Lembaga Yang Bertanggung Jawab
            </div>
            <br />
            <br />
            <h3 className="display-6 mb-5" style={{ marginTop: "2rem" }}>
              Donasi Yang Kami Terima Akan Kami Salurkan Ke Lembaga Terkait
            </h3>
          </div>
          <div className="row g-1 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp px-2"
              data-wow-delay="0.1s"
            >
              <div
                className="causes-item d-flex flex-column bg-white border-5 rounded-top overflow-hidden h-100"
                style={{ boxShadow: "0px 3px 5px rgba(110, 110, 110, 0.8)" }}
              >
                <div className="position-relative">
                  <img className="img-fluid" src="img/infodonasi1.png" alt="" />
                </div>
                <div className="iconlike">
                  <i
                    className="bi bi-heart"
                    id="likeBtn"
                    onClick={toggleLike}
                  ></i>
                  <span className="like" id="likeCount">
                    101
                  </span>
                </div>
                <div className="p-4 pt-3" style={{ textAlign: "justify" }}>
                  <h5 className="mb-3">Donasi Kepada Masyarakat NTB</h5>
                  <p>
                    {" "}
                    masyarakat di wilayah NTB, bantuan sembako yang telah
                    diberikan berupa beras, minyak goreng, sarden sebanyak 200
                    pack dan makanan instan sebanyak 1000 pcs kepada masyarakat
                    di Bima, NTB. Dompet Amal TRANSMEDIA mengajak kita semua
                    untuk peduli dan membantu saudara-saudara di NTT, NTB dan
                    Malang. Donasi dapat disalurkan ke rekening di bawah ini,
                    donasi yang masuk akan disalurkan bekerjasama dengan CT ARSA
                    Foundation.
                  </p>

                  <a
                    className="btn btn-primary py-2 px-3 me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#modal1"
                  >
                    Selengkapnya
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp px-2"
              data-wow-delay="0.1s"
            >
              <div
                className="causes-item d-flex flex-column bg-white border-5 rounded-top overflow-hidden h-100"
                style={{ boxShadow: "0px 3px 5px rgba(110, 110, 110, 0.8)" }}
              >
                <div className="position-relative">
                  <img className="img-fluid" src="img/infodonasi2.png" alt="" />
                </div>
                <div className="iconlike">
                  <i
                    className="bi bi-heart"
                    id="likeBtn1"
                    onClick={toggleLike1}
                  ></i>
                  <span className="like" id="likeCount1">
                    111
                  </span>
                </div>
                <div className="p-4 pt-3" style={{ textAlign: "justify" }}>
                  <h5 className="mb-3">
                    Pembuatan Posko Kami Peduli di Kota Palu
                  </h5>
                  <p>
                    {" "}
                    posko untuk korban gempa dan tsunami di Balai Transmigrasi
                    Kota Palu, Sulawesi Tengah. Menteri Desa, Pembangunan Daerah
                    Tertinggal dan Transmigrasi (Mendes PDTT) Eko Putro Sandjojo
                    meyakini, posko yang didirikan itu dapat menampung hingga
                    2.000 pengungsi.Artikel ini telah tayang di Kompas.com
                    dengan judul "Posko Bencana Kemendes PDTT di Palu Mampu
                    Tampung 2.000 Pengungsi"
                  </p>
                  <a
                    className="btn btn-primary py-2 px-3 me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#modal2"
                  >
                    Selengkapnya
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp px-2"
              data-wow-delay="0.1s"
            >
              <div
                className="causes-item d-flex flex-column bg-white border-5 rounded-top overflow-hidden h-100"
                style={{ boxShadow: "0px 3px 5px rgba(110, 110, 110, 0.8)" }}
              >
                <div className="position-relative">
                  <img className="img-fluid" src="img/infodonasi3.png" alt="" />
                </div>
                <div className="iconlike">
                  <i
                    className="bi bi-heart"
                    id="likeBtn2"
                    onClick={toggleLike2}
                  ></i>
                  <span className="like" id="likeCount2">
                    121
                  </span>
                </div>
                <div className="p-4 pt-3" style={{ textAlign: "justify" }}>
                  <h5 className="mb-3">Donasi bencana di aceh</h5>
                  <p>
                    {" "}
                    Kabar duka tersiar dari Aceh Timur yang diterjang banjir
                    akibatnya 6.003 rumah warga yang berada di tujuh kecematan
                    di Kabupaten Aceh Timur, Aceh harus terendam air. Sebanyak
                    2.751 warga juga harus tinggal sementara di pengungsian.
                    Serambi mekah Kembali berduka, hujan deras yang mengguyur
                    aceh selama sepekan belakangan ini mengakibatkan air sungai
                    meluap dan mengakibatkan banjir terjadi di Kawasan Aceh
                    Utara dan juga Aceh Timur.
                  </p>
                  <a
                    className="btn btn-primary py-2 px-3 me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#modal3"
                  >
                    Selengkapnya
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

      <div
        className="modal fade"
        id="modal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Donasi Masyarakat NTB</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="carouselModal1" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="img/infodonasi1.png"
                      className="d-block w-100"
                      style={{ height: "15vw" }}
                      alt="Carousel 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/modal_donasi_NTB.jpg"
                      className="d-block w-100"
                      style={{ height: "15vw" }}
                      alt="Carousel 2"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselModal1"
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
                  data-bs-target="#carouselModal1"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <p style={{ textAlign: "justify" }}>
                Indonesia kembali berduka atas terjadinya bencana alam yang
                terjadi berbagai wilayah seperti di Nusa Tenggara Timur (NTT),
                Nusa Tenggara Barat (NTB) dan Malang.
              </p>
              <p style={{ textAlign: "justify" }}>
                BNPB pun mencatat total korban meninggal dunia berjumlah delapan
                orang dan 104 orang mengalami luka-luka di kejadian ini. Total
                kerusakan rumah sekitar 4.404 unit yang meliputi 29 kecamatan.
                Fasilitas umum yang terdampak sekitar 170 sekolah, 64 rumah
                ibadah, dan 12 faskes.
              </p>
              <p style={{ textAlign: "justify" }}>
                Terkait hal ini, dompet Amal TRANSMEDIA dengan CT ARSA
                Foundation sejak Rabu (14/4) telah mendistribusikan bantuan
                berupa kebutuhan dapur umum di Desa Jogo Mulyan Kecamatan
                Tirtoyudo sebanyak 500 packs, serta di Desa Pamotan Kecamatan
                Dampit sebanyak 200 packs. Tercatat lebih dari 1.700 jiwa yang
                terdampak gempa di wilayah tersebut.
              </p>
              <p style={{ textAlign: "justify" }}>
                Sementara itu, terdapat 177 korban jiwa dan 45 korban hilang
                pasca terjadinya banjir bandang yang melanda NTT dan NTB pada
                Minggu (11/4) malam. Lebih lanjut, masih ada beberapa wilayah
                NTT yang belum dapat dijangkau oleh tim evakuasi akibat sulitnya
                akses dan cuaca yang masih buruk.
              </p>
              <p style={{ textAlign: "justify" }}>
                Hingga saat ini operasi pencarian korban hilang masih
                berlangsung dan diperpanjang hingga Jumat (16/4). Secara
                keseluruhan, lebih dari 1.500 jiwa yang terdampak bencana ini.
              </p>
              <p style={{ textAlign: "justify" }}>
                CT ARSA Foundation bersama Dompet Amal TRANSMEDIA telah
                memberikan donasi kepada masyarakat di wilayah NTT dalam
                kebutuhan dapur umum sejumlah 200 packs, kebutuhan bayi dengan
                jumlah total 280 packs yang terdiri dari susu, biskuit dan
                pampers, serta kebutuhan lain berupa pasta gigi, sikat gigi,
                sampo dan obat nyamuk sejumlah 100 kardus. Sedangkan untuk
                masyarakat di wilayah NTB, bantuan sembako yang telah diberikan
                berupa beras, minyak goreng, sarden sebanyak 200 pack dan
                makanan instan sebanyak 1000 pcs kepada masyarakat di Bima, NTB.
              </p>
              <p style={{ textAlign: "justify" }}>
                Dompet Amal TRANSMEDIA mengajak kita semua untuk peduli dan
                membantu saudara-saudara di NTT, NTB dan Malang. Donasi dapat
                disalurkan ke rekening di bawah ini, donasi yang masuk akan
                disalurkan bekerjasama dengan CT ARSA Foundation.
              </p>
              <p style={{ textAlign: "justify" }}>
                Donasi dapat melalui tombol donasi di bawah ini
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handlDonasi}>
                Donasi
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Pembuatan Posko Kami Peduli di Kota Palu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="carouselModal2" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="img/infodonasi2.png"
                      className="d-block w-100"
                      style={{ height: "15vw" }}
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/modal_posko.jpg"
                      className="d-block w-100"
                      style={{ height: "15vw" }}
                      alt="Second slide"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselModal2"
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
                  data-bs-target="#carouselModal2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <p style={{ textAlign: "justify" }}>
                Kami Peduli telah membuka posko untuk korban gempa dan tsunami
                di Balai Transmigrasi Kota Palu, Sulawesi Tengah.
              </p>
              <p style={{ textAlign: "justify" }}>
                Kami Peduli meyakini, posko yang didirikan itu dapat menampung
                hingga 2.000 pengungsi. “Lokasi posko tersebut dekat dengan
                Bandara. Dalam pembuatan posko Kami Peduli dibantu juga oleh
                beberapa perusahaan swasta dan BUMN (Badan Usaha Milik Negara),”
                terang Menteri Ekonomi.
              </p>
              <p style={{ textAlign: "justify" }}>
                Pendiri posko yang telah bertolak ke Palu mengatakan, beberapa
                perusahaan yang telah membantu di antaranya adalah BRI, Astra,
                Indofood, Sinarmas, CIMB Niaga dan Arta Graha.
              </p>
              <p style={{ textAlign: "justify" }}>
                "Terimakasih kepada semua relawan dan semua pihak yang telah
                berpartisipasi dan membantu posko Kami Peduli di Palu," ucapnya.
              </p>
              <p style={{ textAlign: "justify" }}>
                Menurut rencana dalam posko Kami Peduli tersebut, akan dibangun
                kembali sebanyak 12 tenda utama yang terletak di Halaman Balai
                Transmigrasi Kota Palu. Lebih lanjut, Pendiri posko mengatakan,
                posko pengungsi tersebut dikelola oleh puluhan Pegawai Negeri
                Sipil (PNS) di Palu, ratusan pendamping desa, pegawai perusahaan
                swasta dan tenaga medis.
              </p>
              <p style={{ textAlign: "justify" }}>
                Terkait pengoperasian posko, pendiri posko kemudian meminta
                kepada seluruh pendamping desa khususnya wilayah Sulawesi dan
                sekitarnya agar dapat membantu posko pengungsi di Palu. “Para
                pendamping desa di Gorontalo, Sulawesi Selatan, Sulawesi Barat,
                yang bisa membantu mohon membantu posko pendamping desa di sana
                (Palu), yang diprakasai oleh pendamping desa Sulawesi Tengah,”
                ungkapnya.
              </p>
              <p style={{ textAlign: "justify" }}>
                Untuk mempermudah koordinasi, lanjutnya, pendamping desa dapat
                segera menghubungi koordinator nasional pendamping desa,
                direktur Pemberdayaan Masyarakat Desa (PMD) atau Dirjen
                Pembangunan dan Pemberdayaan Masyarakat Desa (PPMD) agar dapat
                bergabung di grup Whatsapp bencana Palu.
              </p>
              <p style={{ textAlign: "justify" }}>
                Adapun untuk memenuhi kebutuhan korban bencana, sebelumnya, tim
                posko telah mengidentifikasi kebutuhan mereka. Bantuan pun akan
                didistribusikan langsung dari Kota Makassar. Terkait, pemenuhan
                kebutuhan dan distribusi logistik tersebut dikoordinir langsung
                oleh Dirjen Pengembangan Kawasan Transmigrasi, M Tedy. Seluruh
                bantuan logistik ini akan dipusatkan di Balai Transmigrasi Kota
                Palu.
              </p>
              <p style={{ textAlign: "justify" }}>
                Sementara itu, untuk pendistribusian terhadap masyarakat akan
                diatur oleh Kadis Transmigrasi Sulawesi Tengah dibantu para
                pendamping desa dengan berkoordinasi dengan Badan Pennggulangan
                Bencana Daerah (BPBD) setempat.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handlDonasi}>
                Donasi
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Donasi Bencana di Aceh</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="carouselModal3" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="img/infodonasi3.png"
                      className="d-block w-100"
                      style={{ height: "15vw" }}
                      alt="carousel-item-1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="img/modal_bencana_aceh.jpg"
                      className="d-block w-100"
                      style={{ height: "15vw" }}
                      alt="carousel-item-2"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselModal3"
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
                  data-bs-target="#carouselModal3"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <p style={{ textAlign: "justify" }}>
                Menurut Ashadi, ketinggian air di beberapa daerah terus
                meningkat berkisar antara 30 sentimeter hingga 1,2 meter.
              </p>
              <p style={{ textAlign: "justify" }}>
                Sedangkan untuk Kawasan Aceh Utara menurut data BPBD Aceh Utara,
                Banjir di akibatkan oleh jebolnya sungai Krueng Peutoe, Krueng
                Keureto dan Sungai Krueng Pirak.
              </p>
              <p style={{ textAlign: "justify" }}>
                Banjir yang disebabkan hujan lebat ini membuat para pengungsi
                sementara tinggal di rumah kerabat, madrasah atau sekolah dan
                tempat yang lebih tinggi.
              </p>
              <p style={{ textAlign: "justify" }}>
                Tak hanya merendam rumah warga, banjir juga membuat jalan lintas
                Medan-Banda Aceh menjadi terputus akibat air yang meluap terlalu
                tinggi dan membuat kendaraan kesulitan melewatinya.
              </p>
              <p style={{ textAlign: "justify" }}>
                Warga yang mengungsi saat ini masih belum bisa kembali
                kerumahnya masing masing, dikarena air masih memenuhi rumah.
                Mari bantu saudara kita yang ada di Aceh Utara dan Aceh Timur
                yang terdampak banjir.
              </p>
              <p style={{ textAlign: "justify" }}>
                Mari jadi bagian dari aksi peduli untuk membantu keluarga yang
                membutuhkan, sumbangankan donasi anda.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handlDonasi}>
                Donasi
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default InfoDonasi;
