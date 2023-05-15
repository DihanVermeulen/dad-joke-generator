import { useState } from "react";
import "./App.css";
import "./styles/buttons.css";
import "./styles/headers.css";
import "./styles/footers.css";
import { axiosInstance } from "./services/axios";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";

function App() {
  const [dadJoke, setDadJoke] = useState<string>("");
  const [error, setError] = useState<any>({});

  const fetchDadJoke = async () => {
    const response = await axiosInstance.get("", {
      headers: {
        Accept: "application/json",
      },
    });
    return response;
  };
  const handleFetchDadJoke = () => {
    fetchDadJoke()
      .then((response) => response.data)
      .then((data) => {
        setError({});
        setDadJoke(data.joke);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <main>
      {Object.keys(error).length !== 0 && (
        <p className="error">
          Oops! There was an error <br />
          Error message: {error.message}
        </p>
      )}
      <h1>Dad Joke Generator</h1>
      <button
        onClick={() => {
          handleFetchDadJoke();
        }}
      >
        Random
      </button>
      <p className="output">{dadJoke}</p>
    </main>
  );
}

export default App;
