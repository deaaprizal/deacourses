import React, { useState } from "react";
import { Modal, Button, Row, Col, Card, Alert } from "react-bootstrap";
import Rules from "./rules";
import webDevImg from "../assets/images/web.png";
import shareImg from "../assets/images/share.png";
import keyImg from "../assets/images/key.png";
import mockupImg from "../assets/images/mockup.png";
import hostingImg from "../assets/images/hosting.png";
import brandImg from "../assets/images/brand.png";

export default function Guideline({ contact }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const courseList = [
    {
      title: "Web Development Introduction",
      description:
        "ngobrol santuy seputar pengalaman, motivasi, tips & jalan pintas supaya gampang punya value di bidang IT berdasarkan pengalaman gue berkecimpung sejak 2012 di zona IT",
      img: webDevImg,
    },
    {
      title: "Curhat Session",
      description:
        "berbagi keresahan, keluh kesah, moment & pengalaman kalian secara ekslusif ke gue",
      img: shareImg,
    },
    {
      title: "Introduction & Instalation Tools Kebutuhan Coding",
      description:
        "VSCode, Node JS, MYSQL, Github, Gitlab, SSH, Trello, CLI dan tools rahasia lainnya yang biasa dipake didunia kerja REAL!",
      img: keyImg,
    },
    {
      title: "Basic HTML & CSS Development",
      description:
        "Testing hasil setup tools coding pake dasar-dasar HTML & CSS bareng gue",
      img: mockupImg,
    },
    {
      title: "Intergration & Deployment Introduction",
      description:
        "deployment testing dari hasil codingan dasar HTML & CSS yang udah disetup ala dunia kerja yang pedas haha.",
      img: hostingImg,
    },
    {
      title: "Self Branding",
      description:
        "akan gue posting di IG orang-orang untuk angkatan pertama yang ikut sesi gue saat ini dan nanti sesi berikutnya. Fungsinya apa? tentu jelas relasi, motivasi & trust value dari orang lain yang kelak suatu saat bisa diajak berkolaborasi sebagai rekan usaha bisnis.",
      img: brandImg,
    },
  ];

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Materi &amp; Guideline (Daftar Sekarang)
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop={false}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <span className="text-center">
            <i className="fa fa-key ml-2"></i> MATERI RINGAN SESI 1: WORK
            ENVIRONMENT SETUP
          </span>
        </Modal.Header>
        <Modal.Body>
          <div>
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
              <Rules />
            </Col>
            <br />
            <Alert variant="warning" className="mt-2">
              <strong>catatan:</strong>
              <br/>
              <br/>
              <ul>
                <li>
                  course ini bertujuan untuk pengembangan environment kerja
                  sebagai web developer
                </li>
                <li>
                  pemberian materi sesuai dari apa yang tertera di guideline
                  website ini.
                </li>
                <li>
                  di dalam course sesi 1 ini tidak ada pembahasan untuk
                  mengerjakan tugas kuliah, tugas sekolah ataupun kasus-kasus
                  diluar meteri pembelajaran.
                </li>
                <li>
                  waktu sudah fixed tidak bisa diubah. Kalau sudah register
                  &amp; ternyata di hari H gak bisa hadir, maka itu bukan
                  tanggung jawab kita ya cuy.
                </li>
                <li>
                  proses registrasi gampang banget, tinggal klik daftar nanti
                  bakal diarahin langsung via chat sama admin gue cuy.
                </li>
                <li>
                  course sesi 1 akan digelar via google meet dengan format 2
                  arah (gue ngomong, kalian ngomong{" "}
                  <small>
                    <i>tidak diluar konteks materi</i>
                  </small>
                  )
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
            onClick={() => contact()}
            className="btn btn-danger btn-lg w-100"
          >
            GUE TERTARIK BANG!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
