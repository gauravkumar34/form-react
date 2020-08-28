import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setheadingText] = useState("");
  function changed(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function handleClick(event) {
    setheadingText(name);

    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onClick={handleClick}>
        <input
          type="text"
          onChange={changed}
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
