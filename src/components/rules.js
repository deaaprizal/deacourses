import React from "react";
import { Accordion } from "react-bootstrap";

export default function Rules() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Kapan sesi 1 dimulai?</Accordion.Header>
        <Accordion.Body>
          Sesi 1 akan dimulai di:
          <br />
          tanggal 20 november 2021
          <br />
          jam 10.00 WIB - 15.00 WIB
          <br />
          breaktime: 30menit (12.00 WIB - 12.30 WIB)
          <br />
          <br />
          <i>
            kapan lagi <b>5 jam ekslusif</b> bareng gue cuy di sesi 1, kemon
            lesgow gasin sampe mentok! haha
          </i>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sistem belajar online atau offline?</Accordion.Header>
        <Accordion.Body>
          Untuk saat ini masih online dulu ya cuy, sampai situasi covid lebih
          membaik lagi doakan saja supaya bisa secepatnya course offline (di
          rumah gue :P).
          <br />
          <br />
          Metode course menggunakan platform video conference{" "}
          <strong>Google Meet</strong>. kalau belum ngerti dan belum registrasi
          google bisa cek langsung di{" "}
          <a href="https://meet.google.com/">disini</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Berapa biaya untuk sesi 1?</Accordion.Header>
        <Accordion.Body>
          kalem cuy, karena gue mengerti gak semua orang punya uang banyak. jadi
          cukup <h4>Rp. 50.000 doang</h4>lu dah bisa bareng gue 5 jam berfaedah
          di dalem 1 sesi ini!
          <br />
          <br />
          <a
            href="https://api.whatsapp.com/send?phone=+6282119197866&text=Hi%20bang%2C%20daftar%20deacourse."
            target="_blank"
          >
            Registrasi
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
          Hasil akhirnya dari course sesi 1 apa?
        </Accordion.Header>
        <Accordion.Body>
          Kalian bakal gue guide untuk setup environment, tools installation
          &amp; preparation laptop atau komputer supaya menunjang dan relevan
          dengan dunia kerja nanti. Sebelum course sesi 2,3,4,5 dan seterusnya
          diadakan yang paling penting dan utama adalah setup environtment dulu.
          Gak cuma itu, nanti kita bakal testing hal hal yang biasanya gak di
          ajari di ranah akademis. Intinya, kita bakal main dari 0 ~seolah kita
          lagi ada di suatu perusahaan. vibes nya begitulah pokonya ya :)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          Setelah selesai sesi 1 ini, kedepannya gimana?
        </Accordion.Header>
        <Accordion.Body>
          Tenang, gue sama tim lagi ngerancang kurikulum buat kalian yang
          antusias ikutin les private gue supaya gak tersesat. Nanti secepatnya
          sesi 2, 3, 4 dan seterusnya akan dirilis.
          <small>akan dimaksimalkan di bulan desember</small>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
          Gimana kalau di sesi 1 ini gue gak selesai bang?
        </Accordion.Header>
        <Accordion.Body>
          Prediksi gue sih harusnya semua bisa banget ya untuk ngejar materi
          dasar ini, karena memang gak berat kok! tapi kalau memang ada trouble
          dan jam course nya udah habis. bisa ikut lagi di next course SESI 1 -
          sebagai peserta evaluasi.
          <br />
          <br />
          <code>
            peserta evaluasi: yang sesi 1 nya gagal, akan ikut secara FREE
            (GRATIS) di pertemuan course lainnya dengan materi yang sama (sesuai
            agenda &amp; disatukan dengan peserta lain yang baru masuk ke SESI 1
            yang digelar ulang untuk peserta slot baru)
          </code>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Bang si admin belum bales chat gue?</Accordion.Header>
        <Accordion.Body>
          Admin bakalan ngebales semua permintaan registrasi yang masuk sesuai
          antrian kok cuy, dimulai dari chat yang paling bawah (orang yang lebih
          dulu chat) sampe yang paling atas (orang yang terahir chat).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
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
