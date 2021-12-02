import React from "react";
import tiktokImg from "../assets/images/tik-tok.png";
export default function Footline() {
  return (
    <div className="icons-social mt-5">
      <a href="https://www.tiktok.com/@dea.afrizal?" className="h6 text-decoration-none"><img src={tiktokImg} width="15" alt="tiktok dea.afrizal" className="mb-1"/> dea.afrizal</a>
    </div>
  );
}
