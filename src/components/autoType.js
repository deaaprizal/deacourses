import React, { useState } from "react";
import Typist from "react-typist";
import Guideline from "./guideline";
import Configs from "../helper/configuration.json";
import { becomeDevButton } from "./guideline";

let triggerModal;
export const Greeting = (parallax) => {
  const [showButton, setShowButton] = useState("none");
  triggerModal = setShowButton;
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
        marginTop: 100,
        // maxWidth: "100%",
      }}
    >
      <div>
        <Typist
          onTypingDone={() => {
            setTimeout(() => {
              parallax.current.scrollTo(1);
            }, 2200);
          }}
        >
          <Typist.Delay ms={250} />
          <b>Hi, I'm Dea Afrizal</b>
          <br />
          <i>Code is an Art, Coders is an Artist</i>
        </Typist>
        <br />
        <div
          style={{
            width: "300px",
            maxWidth: "100%",
            display: showButton,
            justifyContent: "center",
          }}
          className="mx-auto"
        >
          <Guideline />
        </div>
      </div>
    </div>
  );
};

export const Tagline = () => {
  return (
    <div className="container text-center">
      <div className="tagline mt-4">
        <Typist
          onTypingDone={() => {
            becomeDevButton("flex");
            triggerModal(true);
          }}
        >
          <Typist.Delay ms={4600} />
          <strike>{Configs.devDesc}</strike>
          <br />
          <i>{Configs.devDesc2}</i>
        </Typist>
      </div>
    </div>
  );
};
