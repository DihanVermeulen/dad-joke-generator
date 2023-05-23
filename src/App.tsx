import { useState } from "react";
import "./App.css";
import "./styles/buttons.css";
import "./styles/headers.css";
import "./styles/footers.css";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import dadJokes from "./data/dad-jokes.json";

interface Error {
  message?: string;
}

function App() {
  const [jokeSetup, setJokeSetup] = useState<string>("");
  const [jokePunchline, setJokePunchline] = useState<string>("");
  const [error, setError] = useState<Error>({});

  /**
   * Fetches random dad joke
   * @returns {object} - dad joke
   */
  const fetchDadJoke = async (): Promise<{
    id: number;
    setup: string;
    punchline: string;
  }> => {
    const data = dadJokes.jokes;
    const randomJoke = data[Math.trunc(Math.random() * data.length + 1)];
    console.log(Math.trunc(Math.random() * data.length + 1));
    console.log(randomJoke);
    return randomJoke;
  };

  /**
   * Hanldes the fetching of the dad joke
   */
  const handleFetchDadJoke = () => {
    fetchDadJoke()
      .then((response) => response)
      .then((data) => {
        setError({});
        setJokeSetup(data.setup);
        setJokePunchline(data.punchline);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <>
      <Header />
      <main>
        {Object.keys(error).length !== 0 && (
          <p className="error">
            Oops! There was an error <br />
            Error message: {error.message}
          </p>
        )}
        <h1>Dad Joke Generator</h1>
        <button
          className="primary__button"
          onClick={() => {
            handleFetchDadJoke();
          }}
        >
          Random
        </button>
        <p className="output">
          {jokeSetup} <br></br> {jokePunchline && jokePunchline}
        </p>
      </main>
      <Footer />
    </>
  );
}

export default App;
