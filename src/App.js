import React, { Component } from "react";
import Typist from "react-typist";
import Configs from "./helper/configuration.json";
import ParticlesBg from "particles-bg";
import Footline from "./components/footline";
import Guideline from "./components/guideline";
import Registration from "./components/registration";
import WebinarDetail from "./components/webinar-detail";
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
      devDesc2:
        Configs.devDesc2 ||
        "Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",
      backgroundMode: "default",
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || [],
    };
  }

  render() {
    const { appClass, bgStyle, backgroundMode, devIntro, devDesc, devDesc2 } =
      this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div className={backgroundMode}>
          <main className="App-main">
            <ParticlesBg type="random" bg={true} />
            <div className="container">
              <h1 className="intro">{devIntro}</h1>
              <div className="shell">From Zero To Hero (8 Desember 2021)</div>
              <div className="tagline">
                <Typist>
                  <Typist.Delay ms={500} />
                  {devDesc}
                  <br />
                  {devDesc2}
                </Typist>
              </div>
              <WebinarDetail />
              <Footline />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
