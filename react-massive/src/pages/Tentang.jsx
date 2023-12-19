import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import Spinner from "../fragments/Spinner";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Tentang = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alasanKontak, setAlasanKontak] = useState("");
  const [pesan, setPesan] = useState("");

  const handleContact = async () => {
    try {
      const response = await axios
        .post("http://localhost:5055/contact", {
          nama,
          email,
          alasan_kontak: alasanKontak,
          pesan,
        })
        .then((res) => {
          Swal.fire({
            title: "Terima Kasih!",
            text: "Pesan Anda Berhasil Terkirim.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            // Setelah tombol OK diklik, kosongkan nilai variabel
            document.querySelector("form").reset();
          });
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Spinner />
      <Navbar />
      <div className="tentang"></div>
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
                    Website ini bertujuan untuk memberikan informasi real-time
                    mengenai bencana alam, termasuk gempa bumi, banjir, badai,
                    kebakaran hutan, dan lainnya. Kami memberikan informasi
                    terbaru, panduan tindakan darurat yang dibutuhkan dalam
                    berbagai jenis bencana, dan sumber daya bagi individu dan
                    komunitas yang terkena dampak bencana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 contact-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Hubungi Kami</h1>
                </div>
                <p className="mb-4">
                  Kami Peduli Lingkungan Sekitar Dengan Memberikan Layanan
                  Hubungi kami. Kami Siap Menerima Keluhan Anda
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          onChange={(e) => setNama(e.target.value)}
                        />
                        <label for="name">Nama</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="email">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <select
                          className="form-select form-control"
                          id="subject"
                          placeholder="Subject"
                          onChange={(e) => setAlasanKontak(e.target.value)}
                        >
                          <option value="complaint">Keluhan</option>
                          <option value="feedback">Masukan</option>
                          <option value="other">Lainnya</option>
                        </select>
                        <label for="reason">Alasan Kontak</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                          onChange={(e) => setPesan(e.target.value)}
                        ></textarea>
                        <label for="message">Pesan</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        onClick={handleContact}
                      >
                        Kirim Pesan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352.612401293657!2d119.87545339770311!3d-0.874277782914743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8bec2683f140f7%3A0xe481e166bde37a77!2sJl.%20Kelinci%2C%20Talise%2C%20Kec.%20Mantikulore%2C%20Kota%20Palu%2C%20Sulawesi%20Tengah%2094118!5e0!3m2!1sid!2sid!4v1700377195450!5m2!1sid!2sid"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Tim Kami
            </div>
            <h1 className="display-6 mb-5">
              Bersama-sama Lebih Hebat Kami Kreatif dan Bertanggung Jawab
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/rafi.png" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Rafi Naufal Y. R.</h5>
                  <p className="text-primary">Project Manager</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-github"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/devi.png" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Devi Yohana Samosir</h5>
                  <p className="text-primary">Hipster</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/suci.png" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Alfiana Suci</h5>
                  <p className="text-primary">Hipster</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/rifqi.png" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Rifqi Nanda</h5>
                  <p className="text-primary">Hipster</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/vio.png" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Vio Fatikhi A.</h5>
                  <p className="text-primary">Hacker</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/tia.png" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Autiyah Muskiro</h5>
                  <p className="text-primary">Hacker</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="img/tedy.png" alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>Tedy </h5>
                  <p className="text-primary">Hacker</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tentang;
