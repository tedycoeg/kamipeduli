import React, { useState } from "react";
import Spinner from "../fragments/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Masuk = () => {
  const [isRegisterActive, setRegisterActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [Username, setUsername] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios
        .post("http://localhost:5055/user", {
          email: emailRegister,
          password: passwordRegister,
          username: Username,
        })
        .then((res) => {
          Swal.fire({
            title: "Terima Kasih!",
            text: "Akun Anda Berhasil Didaftarkan.",
            confirmButtonText: "Login Sekarang",
          }).then(() => {
            setRegisterActive(false);
          });
        });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Email Sudah Digunakan Pada Akun Lain.",

        confirmButtonText: "OK",
      });
      console.error("Registration failed", error.response.data);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios
        .post("http://localhost:5055/user-login", {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem("username", res.data.username);
          localStorage.setItem("email", res.data.email);
          window.location.href = "/";
        });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Email Atau Password Anda Salah.",

        confirmButtonText: "OK",
      });
      console.error("Login failed", error.response.data);
    }
  };

  const handleRegisterClick = () => {
    setRegisterActive(true);
  };

  const handleLoginClick = () => {
    setRegisterActive(false);
  };
  return (
    <>
      <style>
        {`@import url("https://fonts.googleapis.com/css2?family=Poppins");

* {
  box-sizing: border-box;
}

body {
  display: flex;
  background-image: url("../img/login.gif");
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  height: 100vh;
}

h1 {
  font-weight: 700;
  letter-spacing: -1.5px;
  margin: 0;
  margin-bottom: 15px;
}

h1.title {
  font-size: 45px;
  line-height: 45px;
  margin: 0;
  text-shadow: 0 0 10px rgba(16, 64, 74, 0.5);
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  text-shadow: 0 0 10px rgba(16, 64, 74, 0.5);
}

span {
  font-size: 14px;
  margin-top: 25px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  transition: 0.3s ease-in-out;
}

a:hover {
  color: #4bb6b7;
}

.content {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-around;
}

.content .checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content input {
  accent-color: #333;
  width: 12px;
  height: 12px;
}

.content label {
  font-size: 14px;
  user-select: none;
  padding-left: 5px;
}

button {
  position: relative;
  border-radius: 20px;
  border: 1px solid #FF6F0F;
  background-color: #FF6F0F;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
}

button:hover {
  letter-spacing: 3px;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: rgba(225, 225, 225, 0.2);
  border: 2px solid #fff;
  color: #fff;
}

button.ghost i{
  position: absolute;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

button.ghost i.register{
  right: 70px;
}

button.ghost i.login{
  left: 70px;
}

button.ghost:hover i.register{
  right: 40px;
  opacity: 1;
}

button.ghost:hover i.login{
  left: 40px;
  opacity: 1;
}

form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border-radius: 10px;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 820px;
  max-width: 100%;
  min-height: 700px;
  margin-left: 900px; /* Menggeser elemen ke kanan dengan margin-left:auto */
}


.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.login-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .login-container {
  transform: translateX(100%);
}

.register-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .register-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translate(-100%);
}

.overlay {
  background-image: url('../img/register.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(46, 94, 109, 0.4) 40%,
    rgba(46, 94, 109, 0)
  );
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
  transition: 0.3s ease-in-out;
}

.social-container a:hover {
  border: 1px solid #4e8b95;
}

`}
        {
          <link
            href="https://cdn.lineicons.com/4.0/lineicons.css"
            rel="stylesheet"
          />
        }
      </style>
      <Spinner />
      <div
        className={`container ${isRegisterActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container register-container">
          <form action="#">
            <h1>Registrasi disini.</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmailRegister(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordRegister(e.target.value)}
            />
            <Link to={""}>
              <button onClick={handleRegister}>Registrasi</button>
            </Link>
            <span>atau gunakan akunmu</span>
            <div className="social-container">
              <a href="#" className="social">
                <i className="lni lni-facebook-fill"></i>
              </a>
              <a href="#" className="social">
                <i className="lni lni-google"></i>
              </a>
              <a href="#" className="social">
                <i className="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="form-container login-container">
          <form>
            <h1>Masuk Disini.</h1>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="content">
              <div className="checkbox">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label>Remember me</label>
              </div>
              <div className="pass-link">
                <Link
                  to="/Resetpassword"
                  className={`pass-link ${
                    location.pathname === "/Resetpassword" ? "active" : ""
                  }`}
                >
                  Lupa Password?
                </Link>
              </div>
            </div>
            <Link to={""}>
              <button onClick={handleLogin}>Masuk</button>
            </Link>
            <span>atau gunakan akunmu</span>
            <div className="social-container">
              <a href="#" className="social">
                <i className="lni lni-facebook-fill"></i>
              </a>
              <a href="#" className="social">
                <i className="lni lni-google"></i>
              </a>
              <a href="#" className="social">
                <i className="lni lni-linkedin-original"></i>
              </a>
            </div>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="title" style={{ color: "white" }}>
                Hallo <br /> Teman
              </h1>
              <p>
                Jika kamu memiliki akun, masuk disini dan ayo saling membantu
              </p>
              <button className="ghost" onClick={handleLoginClick}>
                Masuk
                <i className="lni lni-arrow-left login"></i>
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="title" style={{ color: "white" }}>
                Ayo
                <br />
                Saling Menolong
              </h1>
              <p>Jika kamu belum memiliki akun, Ayo bergabung dengan kami</p>

              <button className="ghost" onClick={handleRegisterClick}>
                Registrasi
                <i className="lni lni-arrow-right register"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Masuk;
