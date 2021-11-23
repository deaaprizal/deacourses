import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Greeting, ShowCase } from "./components/autoType";

// Little helpers ...

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Layout() {
  const parallax = useRef<IParallax>(null!);
  return (
    <Parallax ref={parallax} pages={2}>
      <ParallaxLayer offset={1} speed={1} />
      <ParallaxLayer offset={2} speed={1} />
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url("stars", true),
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "55%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "70%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "40%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "75%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "25%", marginLeft: "30%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "80%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 20,
          padding: 10,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "80vh",
          }}
        >
          {Greeting(parallax)}
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%" }}>{ShowCase(parallax)}</div>
      </ParallaxLayer>
    </Parallax>
  );
}
