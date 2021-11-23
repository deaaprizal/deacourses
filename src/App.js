import React, { Component } from "react";
import Configs from "./helper/configuration.json";
import ParticlesBg from "particles-bg";
import Layout from "./layout.tsx";

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
      backgroundMode: "default",
      backgroundIndex: 0,
      bgStyle: {},
      show: false,
      icons: Configs.icons || [],
    };
  }

  componentDidMount() {
    console.log("init state:", this.state);
  }

  render() {
    const { appClass, bgStyle, backgroundMode, icons } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        <div className={backgroundMode}>
          <main className="App-main">
            <ParticlesBg type="thick" bg={true} />
            <Layout />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
