import { useState } from "react";
import "./App.css";
import "./styles/buttons.css";
import "./styles/headers.css";
import "./styles/footers.css";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header/Header";
import requests from "./constants/requests";
import { fetchJoke, separateJokeBetweenSetupAndPunchline } from "./utils/jokes";
import { animated, useSpring, useTransition } from "@react-spring/web";
import { Typography, Button, Box } from "@mui/material";
import { Space } from "./styles/utils.styled";
import { JokeContainer } from "./App.styled";

interface Error {
  message?: string;
}

function App() {
  const [jokeSetup, setJokeSetup] = useState<string>("");
  const [jokePunchline, setJokePunchline] = useState<string>("");
  const [error, setError] = useState<Error>({});
  const [_isPunchlineVisible, setIsPunchlineVisible] = useState<boolean>(false);
  const [topPosition, setTopPosition] = useState(0);

  /**
   * Handles the fetching of the dad joke
   */
  const handleFetchDadJoke = () => {
    setTopPosition(0);
    fetchJoke(requests.Random)
      .then((response) => {
        setError({});
        console.log(response.data);
        const separatedJoke = separateJokeBetweenSetupAndPunchline(
          response.data
        );

        setJokeSetup(separatedJoke.setup);
        setJokePunchline(separatedJoke.punchline);
        setIsPunchlineVisible(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const setupTransitions = useTransition(jokeSetup, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(200%)" },
    config: { duration: 500 },
  });

  const punchlineTransitions = useTransition(jokePunchline, {
    from: { transform: "translateX(100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-200%)" },
    config: { duration: 500, tension: 220, friction: 20 },
  });

  const slideDownAnimation = useSpring({
    top: `${topPosition}px`,
    from: { top: "0px" },
    config: { tension: 200, friction: 20 },
  });

  const handlePunchlineClick = () => {
    setTopPosition(60);
  };

  return (
    <>
      <Header />
      <Space height="2rem" />
      <main>
        {Object.keys(error).length !== 0 && (
          <p className="error">
            Oops! There was an error <br />
            Error message: {error.message}
          </p>
        )}
        <Typography variant="h3" component="h1">
          Dad Joke Generator
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: "#D4D4D4" }}>
          A library of the worst jokes on the internet
        </Typography>
        <Space height="2rem" />
        <Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#000945" }}
            onClick={() => {
              handleFetchDadJoke();
            }}
          >
            Generate
          </Button>
          <JokeContainer>
            {setupTransitions((style, item) =>
              item ? (
                <animated.p className="joke__output" style={style}>
                  {item}
                </animated.p>
              ) : null
            )}
            {punchlineTransitions((style, item) =>
              item ? (
                <animated.div className="punchline-content" style={style}>
                  <animated.button
                    className={`punchline__overlay ${
                      topPosition === 0 && "pulse"
                    }`}
                    onClick={handlePunchlineClick}
                    style={slideDownAnimation}
                  >
                    Reveal
                  </animated.button>
                  <p className="joke__output punchline">{jokePunchline}</p>
                </animated.div>
              ) : null
            )}
          </JokeContainer>
        </Box>
      </main>
      <Footer />
    </>
  );
}

export default App;
