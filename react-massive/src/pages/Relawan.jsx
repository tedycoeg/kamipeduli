import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import Spinner from "../fragments/Spinner";
import { useState, useEffect } from "react";

import axios from "axios";

import React from "react";

import "../css/relawan.css";
import "../lib/animate/animate.css";
import Swal from "sweetalert2";
const Relawan = () => {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [email, setEmail] = useState("");
  const [nomortelepon, setNomortelepon] = useState("");
  const [kategori, setKategori] = useState("");
  const [fotodiri, setFotodiri] = useState("");
  const [alamat, setAlamat] = useState("");
  const [keahlian, setKeahlian] = useState("");

  useEffect(() => {
    const getEmail = localStorage.getItem("email");
    if (getEmail) {
      setEmail(getEmail);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result property contains the data URL
        const dataURL = reader.result;
        setFotodiri(dataURL);

        // Extract and set only the filename
        const fileName = file.name;
        console.log("Filename:", fileName);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };
  const handleRegister = async () => {
    try {
      const response = await axios
        .post("http://localhost:5055/register-relawan", {
          nama,
          email,
          nik,
          nomor_telepon: nomortelepon,
          jenis_kelamin: jenisKelamin,
          kategori,
          fotodiri,
          alamat,
          keahlian,
        })
        .then((res) => {
          Swal.fire({
            title: "Terima Kasih!",
            text: "Akun Anda Berhasil Didaftarkan.",
            confirmButtonText: "Ok",
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
        });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Email Sudah Digunakan Pada Akun Lain.",
        confirmButtonText: "OK",
        icon: "error",
      });
      console.error("Registration failed", error.response.data);
    }
  };
  return (
    <>
      <Spinner />
      <Navbar />
      <div className="container-fluid p-0 mb-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/relawan-2.png" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Ambil Peran Relawan Dan Bergabung Bersama Kami
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        Kami Relawan, Satu Hati, Satu Aksi.
                      </p>
                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="#daftarrelawan"
                      >
                        Daftar Relawan
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
      <div className="container-fluid overflow-hidden my-5 px-lg-0">
        <div>
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
              <div
                className="position-relative  "
                style={{ height: "500px", width: "950px" }}
              >
                <iframe
                  className="position-absolute img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src="https://www.youtube.com/embed/IJFVib4YiXA?si=mx44r7Fk-3jkjKyM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div
              class="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div class="p-lg-5 pe-lg-0">
                <div
                  className="bg-primary mb-3"
                  style={{ width: "60px", height: "2px" }}
                ></div>
                <h1 className="display-5 mb-4">Seputar Relawan</h1>
                <p className="mb-4 pb-2">
                  Kami Peduli Lingkungan Sekitar Dengan Memberikan Layanan
                  Relawan. Bagi orang-orang yang Ingin Menjadi sukarelawan Bisa
                  melakukan Pendaftaran Relawan.
                </p>
                <div className="row g-4 mb-4 pb-3">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: " 64px", height: "64px" }}
                      >
                        <img
                          className="img-fluid"
                          src="img/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <h2 className="mb-1" data-toggle="counter-up">
                          257
                        </h2>
                        <p className="fw-medium text-primary mb-0">Relawan</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-square bg-white rounded-circle"
                        style={{ width: "64px", height: "64px" }}
                      >
                        <img
                          className="img-fluid"
                          src="img/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <div className="ms-4">
                        <h2 className="mb-1" data-toggle="counter-up">
                          292
                        </h2>
                        <p className="fw-medium text-primary mb-0">
                          Pengguna website
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="" className="btn btn-primary rounded-pill py-3 px-5">
                  Jelajahi Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid overflow-hidden py-5 my-5 px-lg-0">
        <div>
          <div className="text-center">
            <div
              className="bg-primary mb-3 mx-auto"
              style={{ width: "60px", height: "2px" }}
            ></div>
            <h1 className="display-5 mb-5">Relawan</h1>
          </div>
          <div className="row g-0 service-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="btn-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/icon5.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  <h4 className="mb-3">Apa Itu Relawan</h4>
                </center>
                <center>
                  <p className="mb-4" style={{ textAlign: "justify" }}>
                    Relawan adalah Kesukarelaan atau Kerja sukarela merujuk pada
                    aktivitas, kerja altruistik waktu individu atau kelompok
                    memberikan layanan tanpa keuntungan finansial.
                  </p>
                </center>
                <center>
                  <a
                    className="bton bton-outline-primary px-3"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#modal1"
                  >
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="bton-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/icon4.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  {" "}
                  <h4 className="mb-3">Cara Menjadi Relawan</h4>
                </center>
                <center>
                  <p className="mb-4" style={{ textAlign: "justify" }}>
                    Untuk menjadi seorang relawan memiliki persyaratan seperti:
                    Berusia 18 tahun ke atas. Sehat jasmani dan rohani. Memiliki
                    jiwa kerelawanan.
                  </p>
                </center>
                <center>
                  <a
                    className="bton bton-outline-primary px-3"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#modal2"
                  >
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="bton-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/icon3.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  <h4 className="mb-3">Manfaat Relawan</h4>
                </center>
                <center>
                  <p className="mb-4" style={{ textAlign: "justify" }}>
                    Menjadi relawan sosial dapat mengubah hidup dan memberikan
                    beberapa dampak positif pada diri. Salah satu manfaatnya
                    adalah dapat memperluas pandangan dan keterampilan.
                  </p>
                </center>
                <center>
                  <a
                    className="bton bton-outline-primary px-3"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#modal3"
                  >
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="service-item border h-100 p-5">
                <center>
                  <div
                    className="bton-square bg-light rounded-circle mb-4"
                    style={{ width: "64px", height: "64px" }}
                  >
                    <img className="img-fluid" src="img/bnpb.png" alt="Icon" />
                  </div>
                </center>
                <center>
                  <h4 className="mb-3">Kerjasama Lembaga</h4>
                </center>
                <center>
                  <p className="mb-4" style={{ textAlign: "justify" }}>
                    Para relawan akan bekerjasama dengan BNPB (Badan Nasional
                    Penanggulangan Bencana) yang akan dilatih dengan pelatihan
                    secara langsung dari Tim Penanggulangan Bencana.
                  </p>
                </center>
                <center>
                  <a
                    className="bton bton-outline-primary px-3"
                    href=""
                    data-bs-toggle="modal"
                    data-bs-target="#modal4"
                  >
                    <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                    Lanjut{" "}
                  </a>
                </center>
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
              <h5 className="modal-title">Apa Itu Relawan</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <center>
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="img/icon5.png"
                    alt="Icon"
                  />
                </div>
              </center>
              <p style={{ textAlign: "justify" }}>
                Relawan Penanggulangan Bencana merupakan seorang atau sekelompok
                orang yang memiliki kemampuan dan kepedulian untuk bekerja
                secara sukarela dan ikhlas dalam upaya penanggulangan bencana
                (Sumber : Peraturan Kepala BNPB No 17 Tahun 2011 Tentang Pedoman
                Relawan Penanggulangan Bencana). <br />
                <br />
                Dalam penyelenggaraan penanggulangan bencana tidak terlepas dari
                peran 3 pihak yakni pemerintah, masyarakat dan dunia usaha.
                Dengan adanya Relawan yang berlatar belakang dari masyarakat
                tentu akan mempermudah dan mengoptimalkan penyelenggaraan
                penanggulangan bencana.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
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
              <h5 className="modal-title">Apa Itu Relawan</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <center>
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="img/icon5.png"
                    alt="Icon"
                  />
                </div>
              </center>
              <p style={{ textAlign: "justify" }}>
                Relawan Penanggulangan Bencana merupakan seorang atau sekelompok
                orang yang memiliki kemampuan dan kepedulian untuk bekerja
                secara sukarela dan ikhlas dalam upaya penanggulangan bencana
                (Sumber : Peraturan Kepala BNPB No 17 Tahun 2011 Tentang Pedoman
                Relawan Penanggulangan Bencana). <br />
                <br />
                Dalam penyelenggaraan penanggulangan bencana tidak terlepas dari
                peran 3 pihak yakni pemerintah, masyarakat dan dunia usaha.
                Dengan adanya Relawan yang berlatar belakang dari masyarakat
                tentu akan mempermudah dan mengoptimalkan penyelenggaraan
                penanggulangan bencana.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
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
              <h5 className="modal-title">Cara Menjadi Relawan</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <center>
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="img/icon4.png"
                    alt="Icon"
                  />
                </div>
              </center>
              <p style={{ textAlign: "justify" }}>
                Registrasi relawan bencana dilaksanakan oleh masing-masing
                organisasi induk relawan, dengan persyaratan antara lain: <br />
                1. Warga Negara Indonesia berusia 18 tahun ke atas. Sehat <br />
                <span style={{ marginLeft: " 1em" }}>
                  jasmani dan rohani. <br />
                </span>
                2. Memiliki jiwa kerelawanan, semangat pengabdian dan <br />
                <span style={{ marginLeft: " 1em" }}>
                  dedikasi tinggi. jasmani dan rohani. <br />
                </span>
                3. Mampu berkerja secara mandiri dan dapat bekerjasama <br />
                <span style={{ marginLeft: " 1em" }}>
                  dengan pihak lain.
                  <br />
                </span>
                4. Memiliki pengetahuan, keahlian dan keterampilan yang <br />
                <span style={{ marginLeft: " 1em" }}>
                  bermanfaat dalam penanggulangan bencana.
                  <br />
                </span>
                5. Tidak sedang terlibat dalam perkara hukum pidana atau <br />
                <span style={{ marginLeft: " 1em" }}>
                  tindak subversi. <br />
                </span>
                6. Telah diakui dan dikukuhkan sebagai relawan <br />
                <span style={{ marginLeft: " 1em" }}>
                  penanggulangan bencana oleh organisasi induk relawan.
                  <br />
                </span>
                7. Persyaratan lain ditentukan oleh masing-masing organisasi
                <span style={{ marginLeft: " 1em" }}>
                  Induk Organisasi BNPB.
                  <br />
                </span>
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
              <h5 className="modal-title">Apa Manfaat Jadi Relawan</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <center>
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="img/icon3.png"
                    alt="Icon"
                  />
                </div>
              </center>
              <p style={{ textAlign: "justify" }}>
                Menjadi seorang relawan adalah suatu perbuatan yang mulia, baik
                itu relawan dalam acara tertentu atau relawan Bencana alam.
                Sebab, kita telah bersedia meluangkan waktu serta mengorbankan
                tenaga dan biaya sendiri untuk turut berpartisipasi dalam
                kegiatan tersebut. <br />
                <br />
                Sesederhana apa pun kegiatan dan tugas kita di sana, menjadi
                relawan tentu memberi kita banyak kesan dan manfaat. Berikut
                empat keuntungan atau manfaat yang bisa kamu dapatkan saat
                menjadi relawan. <br />
                1. Menambah pengalaman
                <br />
                2. Menambah relasi
                <br />
                3. keluar dari zona nyaman
                <br />
                4. mengisi waktu dengan hal yang bermanfaat
                <br />
                5. bersyukur
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
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal4"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Bekerjasama dengan</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <center>
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="img/bnpb.png"
                    alt="Icon"
                  />
                </div>
              </center>
              <p style={{ textAlign: "justify" }}>
                {" "}
                Para relawan akan bekerjasama dengan BNPB (Badan Nasional
                Penanggulangan Bencana) yang akan dilatih dengan pelatihan
                secara langsung dari Tim Penanggulangan Bencana. Badan Nasional
                Penanggulangan Bencana yang selanjutnya dalam Peraturan Presiden
                ini disebut dengan BNPB adalah Lembaga Pemerintah Non Departemen
                sebagaimana dimaksud dalam Undang-Undang Nomor 24 Tahun 2007
                tentang Penanggulangan Bencana. BNPB berada di bawah dan
                bertanggung jawab langsung kepada Presiden. <br />
                <br />
                Pemerintah Indonesia membentuk Badan Penolong Keluarga Korban
                Perang (BPKKP). Badan yang didirikan pada 20 Agustus 1945 ini
                berfokus pada kondisi situasi perang pasca kemerdekaan
                Indonesia. Badan ini bertugas untuk menolong para korban perang
                dan keluarga korban semasa perang kemerdekaan.
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
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-light overflow-hidden my-5 px-lg-0"
        id="daftarrelawan"
      >
        <div className="">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="img/relawan1.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-lg-6 quote-text py-5 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="p-lg-5 pe-lg-0">
                <div
                  className="bg-primary mb-3"
                  style={{ width: "60px", height: "2px" }}
                ></div>
                <h1 className="display-5 mb-5">Pendafaran Gratis</h1>
                <p className="mb-4 pb-2">
                  Untuk Kalian yang ingin mendaftar menjadi relawan, silahkan
                  isi identitas anda dibawah ini.
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Nama"
                        style={{ height: "55px" }}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Email"
                        style={{ height: "55px" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="NIK"
                        style={{ height: "55px" }}
                        onChange={(e) => setNik(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="No.Telp"
                        style={{ height: "55px" }}
                        onChange={(e) => setNomortelepon(e.target.value)}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Laki-laki"
                          onChange={(e) => setJenisKelamin(e.target.value)}
                        />
                        Laki-laki
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="gender"
                          value="Perempuan"
                          onChange={(e) => setJenisKelamin(e.target.value)}
                        />
                        Perempuan
                      </label>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select border-0"
                        style={{ height: "55px" }}
                        onChange={(e) => setKategori(e.target.value)}
                      >
                        <option selected>Kategori Pendaftar</option>
                        <option value="Logistik">Logistik</option>
                        <option value="Pencarian dan Penyelamatan">
                          Pencarian dan Penyelamatan
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label for="formFile" className="form-label">
                        Foto Diri
                      </label>
                      <input
                        className="form-control"
                        style={{ backgroundColor: "white" }}
                        type="file"
                        id="formFile"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="col-12">
                      <label for="formFile" className="form-label">
                        Alamat
                      </label>
                      <textarea
                        className="form-control border-0"
                        placeholder="Alamat"
                        onChange={(e) => setAlamat(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label for="formFile" className="form-label">
                        Keahlian
                      </label>
                      <textarea
                        className="form-control border-0"
                        placeholder="Keahlian"
                        onChange={(e) => setKeahlian(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-primary w-100 py-3"
                        onClick={handleRegister}
                      >
                        Daftar Sekarang
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Relawan;
