import React, { useEffect } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

import "../css/style.css"; // Import any additional styles

const TestimonialCarousel = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    $(".testimonial-carousel").owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      center: true,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left cilir"></i>',
        '<i class="bi bi-arrow-right cilir"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
    });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Testimoni
          </div>
          <h1 className="display-6 mb-5">Respon masyarakat Sekitar</h1>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="testimonial-item text-center">
            <img
              className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
              src="img/testimonial-1.jpg"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="testimonial-text rounded text-center p-4">
              <p>
                Aplikasi ini telah membantu kami membuat rencana evakuasi yang
                terorganisir dan efisien. Kami dapat menandai tempat-tempat
                aman, rute evakuasi, dan titik pertemuan keluarga dengan mudah.
              </p>
              <h5 className="mb-1">Shinta</h5>
              <span className="fst-italic">Masyarakat</span>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
              src="img/testimonial-2.jpg"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="testimonial-text rounded text-center p-4">
              <p>
                Aplikasi ini menyediakan berbagai tips dan panduan yang sangat
                berguna dalam menghadapi bencana. Ini termasuk panduan
                pertolongan pertama, penyediaan perbekalan darurat, dan tindakan
                yang harus diambil dalam situasi tertentu.
              </p>
              <h5 className="mb-1">Agus</h5>
              <span className="fst-italic">Masyarakat</span>
            </div>
          </div>
          <div className="testimonial-item text-center">
            <img
              className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
              src="img/testimonial-3.jpg"
              style={{ width: "100px", height: "100px" }}
            />
            <div className="testimonial-text rounded text-center p-4">
              <p>
                Aplikasi Bencana benar-benar telah meningkatkan tingkat
                persiapan dan keselamatan kami dalam menghadapi situasi darurat.
              </p>
              <h5 className="mb-1">Rizky</h5>
              <span className="fst-italic">Masyarakat</span>
            </div>
          </div>
          {/* Testimonial items */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
