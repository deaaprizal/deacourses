import React, { useState } from "react";
import { Card, Toast } from "react-bootstrap";
import Typist from "react-typist";
import Guideline from "./guideline";
import ShowOff from "./showOff";
import Configs from "../helper/configuration.json";
import myTiktok from "../assets/images/mytiktok.png";

let showPopupButton;
export const Greeting = (parallax) => {
  const [showButton, setShowButton] = useState("none");
  const [showToast, setToast] = useState("block");
  showPopupButton = setShowButton;
  return (
    <div
      style={{
        color: "black",
        height: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Card>
        <Card.Img variant="top" src={myTiktok} fluid />
        <Card.Body>
          <Card.Title>
            <Typist
              cursor={{
                blink: true,
                hideWhenDone: true,
                element: "📌",
                hideWhenDoneDelay: 2000,
              }}
            >
              <Typist.Delay ms={250} />
              <div style={{ width: "100%", height: "100" }}></div>
              <b>Hi, I'm Dea Afrizal</b>
            </Typist>
          </Card.Title>
          <Card.Text>
            <Typist
              cursor={{
                blink: true,
                hideWhenDone: true,
                element: "📌",
                hideWhenDoneDelay: 1000,
              }}
              onTypingDone={() => {
                setTimeout(() => {
                  parallax.current.scrollTo(1);
                  setToast("none");
                }, 1000);
              }}
            >
              <i>Code is an Art, Coders is an Artist</i>
            </Typist>
          </Card.Text>
          <Card.Text
            style={{
              width: "300px",
              maxWidth: "100%",
              display: showButton,
              justifyContent: "center",
              marginBottom: 5,
            }}
            className="mx-auto"
          >
            <Guideline />
          </Card.Text>
        </Card.Body>
      </Card>
      <div style={{ position: "absolute", bottom: 0, display: showToast }}>
        <Toast>
          <Toast.Body>
            Tunggu sampai semua asset terunggah
            <Typist
              cursor={{
                blink: true,
                hideWhenDone: true,
                element: "🎈",
              }}
            >
              <Typist.Delay ms={2200} />. . . . . . . .
            </Typist>
          </Toast.Body>
        </Toast>
      </div>
    </div>
  );
};

const Tagline = (parallax) => {
  return (
    <Typist
      cursor={{
        blink: false,
        hideWhenDone: true,
        element: "",
      }}
      onTypingDone={() => {
        setTimeout(() => {
          parallax.current.scrollTo(0);
        }, 1300);
        setTimeout(() => {
          showPopupButton("flex");
        }, 1800);
      }}
    >
      <p style={{ fontSize: 30, fontWeight: 400 }}>
        <Typist.Delay ms={5500} />
        <strike>{Configs.devDesc}</strike>
        <br />
        <i>{Configs.devDesc2}</i>
      </p>
    </Typist>
  );
};

export const ShowCase = (parallax) => {
  return (
    <div className="text-center">
      <ShowOff tagline={Tagline(parallax)} />
    </div>
  );
};
