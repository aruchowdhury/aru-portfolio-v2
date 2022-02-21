import Particles from "react-tsparticles";

const HomeParticle = ({ init, loaded }) => {
  return (
    <Particles
      id="tsparticles"
      init={init}
      loaded={loaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        fullScreen: {
          zIndex: 0,
        },

        particles: {
          color: {
            value: "#ccd6f6",
          },

          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 12,
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.5,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
            },
          },
          shape: {
            options: {
              character: {
                value: [
                  "javascript",
                  "typescript",
                  "react",
                  "next.js",
                  "node.js",
                  "mongoDB",
                  "graphQL",
                  "posgreSQL",
                  "tailwindCSS",
                  "styledComponent",
                ],
                font: "Verdana",
                style: "",
                weight: "200",
                fill: true,
              },
              char: {
                value: [
                  "javascript",
                  "typescript",
                  "react",
                  "next.js",
                  "node.js",
                  "mongoDB",
                  "graphQL",
                  "posgreSQL",
                  "tailwindCSS",
                  "styledComponent",
                ],
                font: "Verdana",
                style: "",
                weight: "200",
                fill: true,
              },
            },
            type: "char",
          },
          size: {
            value: 8,
            animation: {
              speed: 5,
              minimumValue: 20,
            },
          },
        },
      }}
    />
  );
};

export default HomeParticle;
