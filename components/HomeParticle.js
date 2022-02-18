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
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: {
              distance: 400,
            },
            push: {
              groups: ["z5000", "z7500", "z2500", "z1000"],
            },
          },
        },
        particles: {
          color: {
            value: "#14B8A6",
            animation: {
              h: {
                speed: 20,
              },
            },
          },
          groups: {
            z5000: {
              number: {
                value: 70,
              },
              zIndex: {
                value: 50,
              },
            },
            z7500: {
              number: {
                value: 30,
              },
              zIndex: {
                value: 75,
              },
            },
            z2500: {
              number: {
                value: 50,
              },
              zIndex: {
                value: 25,
              },
            },
            z1000: {
              number: {
                value: 40,
              },
              zIndex: {
                value: 10,
              },
            },
          },
          links: {
            color: {
              value: "#ffffff",
            },
            opacity: 0.4,
          },
          move: {
            angle: {
              value: 10,
            },
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "top",
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            speed: 1,
          },
          number: {
            value: 200,
          },
          opacity: {
            animation: {
              speed: 3,
              minimumValue: 0.1,
            },
          },
          zIndex: {
            value: 5,
            opacityRate: 0.5,
          },
        },
        emitters: {
          autoPlay: true,
          fill: true,
          life: {
            wait: false,
          },
          rate: {
            quantity: 1,
            delay: 7,
          },
          shape: "square",
          startCount: 0,
          size: {
            mode: "percent",
            height: 0,
            width: 0,
          },
        },
      }}
    />
  );
};

export default HomeParticle;
