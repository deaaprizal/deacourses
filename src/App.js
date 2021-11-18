import React, { Component } from "react";
import Typist from "react-typist";
import Configs from "./helper/configuration.json";
import ParticlesBg from "particles-bg";
import Footline from "./components/footline";
import Guideline from "./components/guideline";

import "./style/course.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        "day",
        "terminal",
        "torquoise",
        "alizarin",
        "amythyst",
        "carrot",
        "peterriver",
      ],
      lightBackgroundModes: [
        "night",
        "lightred",
        "lightpurple",
        "lightgreen",
        "lightblue",
        "lightyellow",
      ],
      backgroundType: Configs.backgroundType || "plain",
      appClass: Configs.plainBackgroundMode || "daylight",
      devIntro: Configs.devIntro || "Lorem Ipsum",
      devDesc:
        Configs.devDesc ||
        "Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",
      backgroundMode: "default",
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || [],
      account: {
        address: localStorage.getItem("address"),
        balance: 0,
      },
    };
  }

  componentDidMount() {}

  goToWhatsapp = () => {
    return (window.location.href =
      "https://api.whatsapp.com/send?phone=+6282119197866&text=Hi%20bang%2C%20daftar%20deacourse.");
  };

  render() {
    const { appClass, bgStyle, backgroundMode, devIntro, devDesc, icons } =
      this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div className={backgroundMode}>
          <main className="App-main">
            <ParticlesBg type="thick" bg={true} />
            <div className="container">
              <h1 className="intro">{devIntro}</h1>
              <div className="shell">GETSTARTED: SESI 1 (20 Nov 2021)</div>
              <div className="tagline">
                <Typist>
                  <Typist.Delay ms={500} />
                  {devDesc}
                </Typist>
              </div>
              <Guideline contact={this.goToWhatsapp} />
              <Footline />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
