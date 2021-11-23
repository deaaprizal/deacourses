import React from "react";
import { Accordion, Alert } from "react-bootstrap";

export default function FAQ() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Kapan pembelajaran dimulai?</strong>
        </Accordion.Header>
        <Accordion.Body>
          Sesi ini akan dimulai di:
          <br />
          <Alert variant="success">
            tanggal 28 november 2021
            <br />
            jam 12.00 WIB - 18.00 WIB
            <br />
            breaktime: 30menit (15.00 WIB - 15.30 WIB)
          </Alert>
          <i>
            kapan lagi <b>6 jam ekslusif</b> bareng gue cuy, kemon lesgow gasin
            sampe mentok! haha
          </i>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sistem belajar online atau offline?</Accordion.Header>
        <Accordion.Body>
          Metode course menggunakan platform video conference{" "}
          <strong>ZOOM VIP MEETING ROOM</strong>. kalau belum ngerti dan belum
          registrasi akun <i>zoom</i> bisa cek langsung di{" "}
          <a href="https://zoom.us/">disini</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <strong>Berapa biaya pembelajaran?</strong>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            kalem cuy, karena gue mengerti gak semua orang punya uang banyak.
            jadi cukup
          </p>
          <h5 style={{ textAlign: "center" }}>Rp. 50.000 doang</h5>
          <p>
            lu dah bisa bareng gue 6 jam berfaedah di dalem sesi pembelajaran
            ini!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=+6282119197866&text=Hi%20bang%2C%20daftar%20deacourse."
            target="_blank"
          >
            Registrasi sekarang
          </a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Gimana kalau gak punya laptop tapi pengen join?
        </Accordion.Header>
        <Accordion.Body>
          gas aja cuy gak apa2 kok, bisa di notes via buku catatan, handphone
          atau alat apapun untuk dipake sebagai bekal nantinya.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <strong>Hasil akhirnya dari pembelajaran sesi ini apa?</strong>
        </Accordion.Header>
        <Accordion.Body>
          Bikin website minimalis untuk portofolio pribadi pake dasar-dasar
          HTML, CSS dan sentuhan magic dari <b>framework bootstrap</b>. Kita
          juga bakal belajar structuring folder yang baik, clean coding &
          improving. Tujuannya udah jelas untuk persiapan bekal menjadi real
          front end developer.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Bang si admin belum bales chat gue?</Accordion.Header>
        <Accordion.Body>
          Admin bakalan ngebales semua permintaan registrasi yang masuk sesuai
          antrian kok cuy, dimulai dari chat yang paling bawah (orang yang lebih
          dulu chat) sampe yang paling atas (orang yang terahir chat).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          Bang pas mulai course boleh di record gak?
        </Accordion.Header>
        <Accordion.Body>
          Buat kalian yang mau record silahkan, bisa buat kenang-kenangan &amp;
          dokumentasi pribadi
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
