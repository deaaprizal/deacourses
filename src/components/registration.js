import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
export default function Registration() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor, setNomor] = useState("");
  const [donasi, setDonasi] = useState(0);
  const [kota, setKota] = useState("");
  const [gelombang, setGelombang] = useState(1);

  const getNama = (nama) => {
    setNama(nama);
  };
  const getEmail = (email) => {
    setEmail(email);
  };
  const getNomor = (nomor) => {
    setNomor(nomor);
  };
  const getKota = (kota) => {
    setKota(kota);
  };
  const getDonasi = (rupiah) => {
    setDonasi(rupiah);
  };

  const goToWhatsapp = () => {
    if (
      nama.length >= 3 &&
      email !== "" &&
      nomor.length >= 8 &&
      kota.length >= 3
    ) {
      return (window.location.href = `https://api.whatsapp.com/send?phone=+${process.env.REACT_APP_WA_BUSINESS_NUMBER}&text=Hi%20bang%2C%20daftar%20webinar-1:%0A%0Anama:%20${nama}%0Aemail:%20${email}%0Anomor-telepon:%20${nomor}%0Aasal-kota:%20${kota}%0Ajumlah-donasi:%20Rp.${donasi}%0Ajoin-di:%20Gelombang%20${gelombang}%0A%0Athanks.`);
    } else {
      alert("isi data dengan lengkap & benar");
    }
  };

  return (
    <div className="container bg-light">
      <h3 className="text-center">
        <span role="img" aria-label="baloon">
          🎈
        </span>
        daftarkan dirimu sekarang
        <span role="img" aria-label="baloon">
          🎈
        </span>
      </h3>
      <div className="mt-3">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Name Lengkap</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="contoh: Budi Santoso"
                onChange={(e) => getNama(e.target.value)}
              />
              <Form.Control.Feedback>
                Nice, nama lengkap udah kece badai!{" "}
                <span role="img" aria-label="smile">
                  😎
                </span>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="contoh: budi@gmail.com"
                required
                onChange={(e) => getEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Silahkan masukan alamat email dengan benar{" "}
                <span role="img" aria-label="ups">
                  😣
                </span>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label>Nomor Telepon (whatsapp)</Form.Label>
              <Form.Control
                type="number"
                placeholder="0829311222"
                required
                onChange={(e) => getNomor(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Silahkan masukan nomor telepon dengan benar{" "}
                <span role="img" aria-label="ups">
                  😣
                </span>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom04">
              <Form.Label>Asal Kota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Jakarta Barat"
                required
                onChange={(e) => getKota(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Silahkan masukan asal kota dengan benar{" "}
                <span role="img" aria-label="ups">
                  😣
                </span>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom05">
              <Form.Label>
                Jumlah Donasi <i>(berapapun)</i>
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="10000"
                required
                onChange={(e) => getDonasi(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Silahkan masukan jumlah donasi dengan benar{" "}
                <span role="img" aria-label="ups">
                  😣
                </span>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <div as={Col} md="12">
              <Form.Label htmlFor="inlineFormCustomSelect" visuallyHidden>
                Preference
              </Form.Label>
              <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                <option value="1" onClick={() => setGelombang(1)}>
                  Pilih 8 Desember (Rabu)
                </option>
                <option value="2" onClick={() => setGelombang(2)}>
                  Pilih 11 Desember (Sabtu)
                </option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Silahkan masukan tgl terlebih dahulu{" "}
                <span role="img" aria-label="ups">
                  😣
                </span>
              </Form.Control.Feedback>
            </div>
          </Row>
          <Button type="button" onClick={(e) => goToWhatsapp(e)}>
            Daftar Sekarang
          </Button>
        </Form>
        <div className="mt-3">
          <code>donasi bisa dikirim via:</code>
          <br />
          <code>
            transfer antar bank, ewallet (shopee pay, gopay, dana & ovo)
          </code>
        </div>
      </div>
    </div>
  );
}
