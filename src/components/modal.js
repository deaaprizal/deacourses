import React from "react";
import { Modal, Row, Col, Card, Alert, Button } from "react-bootstrap";
import FAQ from "./faq";
import webDevImg from "../assets/images/web.png";
import shareImg from "../assets/images/share.png";
import keyImg from "../assets/images/key.png";
import mockupImg from "../assets/images/mockup.png";
import brandImg from "../assets/images/brand.png";
import { goToWhatsapp } from "../helper/chat";
export default function ModalComponent({ show, close }) {
  const courseList = [
    {
      title: "Web Development Introduction",
      description:
        "Pengenalan dasar seputar Website, pemahaman struktur HTML, konsep styling pake CSS & kenalan dengan framework bootstrap",
      img: webDevImg,
    },
    {
      title: "Modul Sesi Latihan",
      description:
        "Free modul latihan di sesi ini supaya bisa mengulang pembelajaran untuk ningkatin jam terbang pas belajar ngoding otodidak",
      img: keyImg,
    },
    {
      title: "Praktek langsung",
      description:
        "Real world struktur koding HTML & CSS yang baik berdasarkan pengalaman gue untuk bekal persiapan sebelum belajar hal-hal lain yang berkaitan dengan pengembangan website",
      img: mockupImg,
    },
    {
      title: "Tanya Jawab",
      description:
        "Saling diskusi dari hasil yang dipelajari dari sesi pembelajaran ini",
      img: shareImg,
    },
    {
      title: "Self Branding",
      description:
        "bakal gue publish ke sosial media yang ikut DEACOURSE ini. Fungsinya apa? tentu jelas relasi, motivasi & trust value dari orang lain yang mana suatu saat bisa aja diajak berkolaborasi sebagai rekan usaha bisnis.",
      img: brandImg,
    },
  ];

  return (
    <Modal show={show} onHide={close} backdrop={false} fullscreen={true}>
      <Modal.Header closeButton>
        <span className="text-center">
          <i className="fa fa-key ml-2"></i> MATERI RINGAN SESI 1: FRONT END
          (PEMULA)
        </span>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Alert style={{ textAlign: "center" }}>
            Info pembelajaran & peraturan <strong>(wajib dibaca)</strong>
          </Alert>
          <h4 className="mt-2 p-2" style={{ textAlign: "center" }}>
            APA YANG DI DAPET?
          </h4>
          <Row xs={1} md={2} className="g-4">
            {courseList.map((course, idx) => (
              <Col key={idx}>
                <Card>
                  <center>
                    <Card.Img
                      className="m-1 p-2"
                      src={course.img}
                      style={{ width: "15%", height: "15%" }}
                    />
                  </center>
                  <Card.Body>
                    <Card.Title>
                      {idx + 1}. {course.title}
                    </Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Col className="mt-4">
            <h3 className="text-center">FAQ</h3>
            <FAQ />
          </Col>
          <br />
          <h1 style={{ textAlign: "center" }}>WAJIB DIBACA</h1>
          <Alert variant="warning" className="mt-2">
            <strong>catatan (RULES):</strong>
            <br />
            <br />
            <ul>
              <li>
                course ini bertujuan untuk mempelajari dasar pembuatan web bagi
                pemula yang ingin mulai terjun sebagai programmer, khususnya
                pengembang web <b>(FRONT END DEVELOPER)</b>. 👩‍💻
              </li>
              <li>
                Pembelajaran bakal digelar secara ONLINE pake{" "}
                <strong>ZOOM VIP ROOM</strong> dan link bakal dibagiin setelah
                proses pembayaran diterima dan dinyatakan valid oleh si ibu
                admin 💌
              </li>
              <li>
                <strong>
                  ZOOM MEETING ROOM akan terkunci 15 menit setelah sesi dibuka
                </strong>
                . Jadi usahakan sudah standby dan jangan terlambat ya, karena
                akan menghambat teman2 yang lain yang sudah antusias untuk
                belajar, jadi rules ini diterapkan 🤝
              </li>
              <li>
                waktu sudah fixed tidak bisa diubah. Kalau sudah register &amp;
                ternyata di hari H gak bisa hadir, maka dianggap gak ikut sesi
                pembelajaran 🤝
              </li>
              <li>
                proses registrasi gampang banget, tinggal klik daftar nanti
                bakal diarahin langsung via chat sama admin gue cuy. 💬
              </li>
              <li>
                pemberian materi sesuai dari apa yang tertera di guideline
                website ini. ✅
              </li>
              <li>
                di dalam course sesi 1 ini tidak ada pembahasan untuk
                mengerjakan tugas kuliah, tugas sekolah ataupun kasus-kasus
                diluar meteri pembelajaran. 💥
              </li>
            </ul>
          </Alert>
          <br />
          <center>
            <h4 className="mt-2 p-2" style={{ textAlign: "center" }}>
              Buruan, cuma lu yang gue percaya. kemon!
            </h4>
          </center>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          onClick={() => goToWhatsapp()}
          className="btn btn-danger btn-lg w-100"
        >
          Daftar Sekarang
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
