import { useState } from "react";
import "./App.css";

function App() {
  const [dadJoke, setDadJoke] = useState<string>("");

  const fetchDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    return response;
  };
  const handleFetchDadJoke = () => {
    fetchDadJoke()
      .then((response) => response.json())
      .then((data) => {
        // Process the received joke data
        setDadJoke(data.joke);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  return (
    <main>
      <h1>Dad Joke Generator</h1>
      <button
        onClick={() => {
          handleFetchDadJoke();
        }}
      >
        Random
      </button>
      <p>{dadJoke}</p>
    </main>
  );
}

export default App;
