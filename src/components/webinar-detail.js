import React, { useState, useEffect } from "react";
import { Modal, Alert, Card, InputGroup, FormControl } from "react-bootstrap";
import {
  title,
} from "../helper/webinar-info.json";
import programmer from "../assets/images/programmer.png";
import sosmed from "../assets/images/sosmed.png";
import guide from "../assets/images/guide.png";
import Registration from "./registration";

export default function WebinarDetail() {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div className="container mt-0">
      <a
        href="#"
        type="button"
        className="btn btn-primary me-2 text-decoration-none"
        style={{ fontSize: 16 }}
        onClick={() => handleShow("md-down")}
      >
        Materi & Pendaftaran
      </a>
      <>
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#222" }}>
            <Alert variant="light" className="mt-4">
              <h3>Waktu</h3>

              <div className="row mt-4">
                <code>GELOMBANG 1</code>
                <div className="col">📅 8 Desember 2021</div>
                <div className="col">⌚ 15:30 - 17:30 WIB</div>
              </div>
              <hr />
              <div className="row">
                <div className="col">🎥 Zoom Meeting</div>
                <div className="col">
                  💰 <b className="text-danger">Rp. Se-ikhlasnya</b>
                </div>
              </div>
              <div className="row mt-4">
                <code>GELOMBANG 2</code>
                <div className="col">📅 11 Desember 2021</div>
                <div className="col">⌚ 10:00 - 12:00 WIB</div>
              </div>
              <hr />
              <div className="row">
                <div className="col">🎥 Zoom Meeting</div>
                <div className="col">
                  💰 <b className="text-danger">Rp. Se-ikhlasnya</b>
                </div>
              </div>
            </Alert>
            <Alert variant="light" className="mt-4">
              <h3>Pembahasan</h3>
              <Alert variant="primary" className="text-center mt-3">
                8 tahun belajar dirangkum dalam 2 jam
              </Alert>
              <div className="row mt-4">
                <div className="col-sm-12 m-0 p-2">
                  <Card className="bg-dark text-light">
                    <Card.Img
                      variant="top"
                      src={programmer}
                      className="m-auto mt-2"
                      style={{ width: "15%", height: "15%" }}
                    />
                    <Card.Body>
                      <Card.Title as="h3" className="text-center mb-3">
                        Kenapa Jadi Programmer
                      </Card.Title>
                      <Card.Text as="p" style={{ textAlign: "justify" }}>
                        perjalanan karir dari <b>anak kimia</b>, pengangguran
                        lalu jadi pegawai pabrik obat dengan{" "}
                        <b>salary 1,2juta/bulan</b> sampai jadi programmer
                        profesional dengan pendapatan lebih dari <b>10x</b>{" "}
                        lipatnya
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-12 m-0 p-2">
                  <Card className="bg-dark text-light">
                    <Card.Img
                      variant="top"
                      src={sosmed}
                      className="m-auto mt-2"
                      style={{ width: "15%", height: "15%" }}
                    />
                    <Card.Body>
                      <Card.Title as="h3" className="text-center mb-3">
                        Kenapa Jadi Influencer
                      </Card.Title>
                      <Card.Text as="p" style={{ textAlign: "justify" }}>
                        Gak pernah kebayang sebelumnya untuk bikin konten di
                        sosial media salah satunya{" "}
                        <u className="text-danger">tiktok</u>, semua berawal
                        dari...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col m-1 p-0">
                  <Card className="bg-dark text-light h-100">
                    <Card.Img
                      variant="top"
                      src={guide}
                      className="m-auto mt-2"
                      style={{ width: "15%", height: "15%" }}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">Cara Bertahan</Card.Title>
                      <Card.Text as="p" style={{ textAlign: "justify" }}>
                        Gimana cara gue survive dan bisa mendapatkan kepercayaan
                        diri sebagai seorang programmer untuk menjalani hidup
                        sampai di titik ini.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col m-1 p-0">
                  <Card className="bg-dark text-light h-100">
                    <Card.Img
                      variant="top"
                      src={guide}
                      className="m-auto mt-2"
                      style={{ width: "15%", height: "15%" }}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">Cara Menyerang</Card.Title>
                      <Card.Text as="p" style={{ textAlign: "justify" }}>
                        Tahapan selanjutnya setelah bertahan adalah gimana cara
                        gue merubah pola pikir selama proses belajar ataupun
                        disaat gw bekerja secara profesional.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Alert>
            <Registration />
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}
