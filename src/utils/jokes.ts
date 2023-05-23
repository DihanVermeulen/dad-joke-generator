import { Joke } from "../@types/jokes";

const separateJokeBetweenSetupAndPunchline = (jokeData: Joke) => {
  const joke = jokeData.joke;
  let setup = "";
  let punchline = "";

  // Check if the joke contains a question mark
  if (jokeData.joke.includes("?")) {
    // Extract the setup and punchline from the joke
    setup = joke.substring(0, joke.indexOf("?") + 1).trim();
    punchline = joke.substring(joke.indexOf("?") + 2).trim();
  } else {
    // If no question mark is found, consider the whole joke as the setup
    setup = jokeData.joke.trim();
  }

  return {
    setup,
    punchline,
  };
};

export { separateJokeBetweenSetupAndPunchline };
